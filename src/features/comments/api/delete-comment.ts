import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '@/lib/api-client';
import type { MutationConfig } from '@/lib/react-query';
import { getCommentsQueryOptions } from './get-comments';
import { getPostsQueryOptions } from '@/features/posts/api/get-posts';

export const deleteComment = (commentId: number): Promise<{ DeletedID: number }> => {
  return api.post(`/Comment/Delete`, { CommentID: commentId });
};

type UseDeleteCommentOptions = {
  CommentID: number;
  mutationConfig?: MutationConfig<typeof deleteComment>;
};

export const useDeleteComment = ({ CommentID, mutationConfig }: UseDeleteCommentOptions) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (...args) => {
      queryClient.invalidateQueries({ queryKey: getCommentsQueryOptions(CommentID).queryKey });
      queryClient.invalidateQueries({
        queryKey: getPostsQueryOptions().queryKey
      });
      onSuccess?.(...args);
    },
    ...restConfig,
    mutationFn: deleteComment
  });
};
