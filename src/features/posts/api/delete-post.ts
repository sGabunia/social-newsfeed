import { useMutation, useQueryClient } from '@tanstack/react-query';

import { api } from '@/lib/api-client';
import type { MutationConfig } from '@/lib/react-query';
import { getPostsQueryOptions } from './get-posts';

export const deletePost = (postId: number) => {
  return api.post('/Post/Delete', { PostId: postId });
};

type UseDeletePostOptions = {
  mutationConfig?: MutationConfig<typeof deletePost>;
};

export const useDeletePost = ({ mutationConfig }: UseDeletePostOptions = {}) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (...args) => {
      queryClient.invalidateQueries({
        queryKey: getPostsQueryOptions().queryKey
      });
      onSuccess?.(...args);
    },
    ...restConfig,
    mutationFn: deletePost
  });
};
