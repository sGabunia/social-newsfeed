import { useMutation, useQueryClient } from '@tanstack/react-query';
import { z } from 'zod';

import { api } from '@/lib/api-client';
import type { MutationConfig } from '@/lib/react-query';
import { getPostsQueryOptions } from '@/features/posts/api/get-posts';
import type { Post } from '@/types/api';

export const toggleReactiontInputSchema = z.object({
  PostID: z.number(),
  ReactionType: z.string()
});

export type ToggleReactionInput = z.infer<typeof toggleReactiontInputSchema>;

const toggleReaction = (
  input: ToggleReactionInput
): Promise<{ IsReacted: boolean; ReactionType: number }> => {
  return api.post('Post/ReactionToggle', input);
};

type UseToggleReactionOptions = {
  mutationConfig?: Omit<
    MutationConfig<typeof toggleReaction>,
    'onMutate' | 'onError' | 'onSettled'
  >;
};

export const useToggleReaction = ({ mutationConfig }: UseToggleReactionOptions = {}) => {
  const queryClient = useQueryClient();

  return useMutation({
    onMutate: async ({ PostID, ReactionType }) => {
      await queryClient.cancelQueries({ queryKey: getPostsQueryOptions().queryKey });
      const previousPosts = queryClient.getQueryData<Post[]>(getPostsQueryOptions().queryKey);

      queryClient.setQueryData<Post[]>(getPostsQueryOptions().queryKey, (old) => {
        if (!old) return [];
        return old.map((post) => {
          if (post.PostID === PostID) {
            const oldReactionType = post.UserReaction;

            const updatedReactions = { ...post.Reactions };

            if (oldReactionType) {
              updatedReactions[oldReactionType as keyof typeof updatedReactions] -= 1;
            }

            if (ReactionType !== oldReactionType) {
              updatedReactions[ReactionType as keyof typeof updatedReactions] += 1;
            }

            return {
              ...post,
              UserReaction: ReactionType !== oldReactionType ? ReactionType : undefined,
              Reactions: updatedReactions,
              TotalReactions:
                ReactionType !== oldReactionType
                  ? oldReactionType
                    ? post.TotalReactions
                    : post.TotalReactions + 1
                  : post.TotalReactions - 1
            };
          }
          return post;
        });
      });

      return { previousPosts };
    },
    onError: (_err, _variables, context) => {
      if (context?.previousPosts) {
        queryClient.setQueryData(getPostsQueryOptions().queryKey, context.previousPosts);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: getPostsQueryOptions().queryKey });
    },
    ...mutationConfig,
    mutationFn: toggleReaction
  });
};
