import { useMutation, useQueryClient } from '@tanstack/react-query';
import { z } from 'zod';

import { api } from '@/lib/api-client';
import type { MutationConfig } from '@/lib/react-query';
import { getPostsQueryOptions } from '@/features/posts/api/get-posts';
import { getCommentsQueryOptions } from '@/features/comments/api/get-comments';
import type { Comment } from '@/types/api';

export const toggleCommentReactiontInputSchema = z.object({
  CommentID: z.number(),
  ReactionType: z.string()
});

export type ToggleCommentReactionInput = z.infer<typeof toggleCommentReactiontInputSchema>;

const toggleCommentReaction = (
  input: ToggleCommentReactionInput
): Promise<{ IsReacted: boolean; ReactionType: number }> => {
  return api.post('Comment/ReactionToggle', input);
};

type UseToggleCommentReactionOptions = {
  postId: number;
  mutationConfig?: Omit<
    MutationConfig<typeof toggleCommentReaction>,
    'onMutate' | 'onError' | 'onSettled'
  >;
};

export const useToggleCommentReaction = ({
  mutationConfig,
  postId
}: UseToggleCommentReactionOptions) => {
  const queryClient = useQueryClient();

  return useMutation({
    onMutate: async ({ CommentID, ReactionType }) => {
      await queryClient.cancelQueries({ queryKey: getCommentsQueryOptions(postId).queryKey });

      const previousComments = queryClient.getQueryData<Comment[]>(
        getCommentsQueryOptions(postId).queryKey
      );

      queryClient.setQueryData<Comment[]>(getCommentsQueryOptions(postId).queryKey, (old): any => {
        if (!old) return [];
        return old.map((comment) => {
          if (comment.CommentID === CommentID) {
            const oldReactionType = comment.UserReaction;

            const updatedReactions = { ...comment.Reactions };

            if (oldReactionType) {
              updatedReactions[oldReactionType as keyof typeof updatedReactions] -= 1;
            }

            if (ReactionType !== oldReactionType) {
              updatedReactions[ReactionType as keyof typeof updatedReactions] += 1;
            }

            return {
              ...comment,
              UserReaction: ReactionType !== oldReactionType ? ReactionType : undefined,
              Reactions: updatedReactions,
              TotalReactions:
                ReactionType !== oldReactionType
                  ? oldReactionType
                    ? comment.TotalReactions
                    : comment.TotalReactions + 1
                  : comment.TotalReactions - 1
            };
          }
          return comment;
        });
      });

      return { previousComments };
    },

    onError: (_err, _variables, context) => {
      if (context?.previousComments) {
        queryClient.setQueryData(
          getCommentsQueryOptions(postId).queryKey,
          context.previousComments
        );
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: getCommentsQueryOptions(postId).queryKey });
      queryClient.invalidateQueries({ queryKey: getPostsQueryOptions().queryKey });
    },

    ...mutationConfig,
    mutationFn: toggleCommentReaction
  });
};
