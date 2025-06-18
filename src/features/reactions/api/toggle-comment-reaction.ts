import { useMutation, useQueryClient } from '@tanstack/react-query';
import { z } from 'zod';

import { api } from '@/lib/api-client';
import type { MutationConfig } from '@/lib/react-query';
import { getPostsQueryOptions } from '@/features/posts/api/get-posts';
import { getCommentsQueryOptions } from '@/features/comments/api/get-comments';

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
  mutationConfig?: MutationConfig<typeof toggleCommentReaction>;
};

export const useToggleCommentReaction = ({
  mutationConfig,
  postId
}: UseToggleCommentReactionOptions) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (...args) => {
      queryClient.invalidateQueries({
        queryKey: getPostsQueryOptions().queryKey
      });
      queryClient.invalidateQueries({
        queryKey: getCommentsQueryOptions(postId).queryKey
      });

      onSuccess?.(...args);
    },
    ...restConfig,
    mutationFn: toggleCommentReaction
  });
};
