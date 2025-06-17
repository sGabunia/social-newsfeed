import { useMutation, useQueryClient } from '@tanstack/react-query';
import { z } from 'zod';

import { api } from '@/lib/api-client';
import type { MutationConfig } from '@/lib/react-query';
import { getPostsQueryOptions } from './get-posts';
import type { Post } from '@/types/api';

export const createPostInputSchema = z.object({
  Content: z.string().min(1, 'Content is required')
});

export type CreatePostInput = z.infer<typeof createPostInputSchema>;

export const createPost = (input: CreatePostInput): Promise<Post> => {
  return api.post('/Post/Create', input);
};

type UseCreatePostOptions = {
  mutationConfig?: MutationConfig<typeof createPost>;
};

export const useCreatePost = ({ mutationConfig }: UseCreatePostOptions = {}) => {
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
    mutationFn: createPost
  });
};
