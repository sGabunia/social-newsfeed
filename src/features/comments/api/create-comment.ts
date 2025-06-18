import { useMutation, useQueryClient } from '@tanstack/react-query';
import { z } from 'zod';

import { api } from '@/lib/api-client';
import type { MutationConfig } from '@/lib/react-query';
import type { Comment } from '@/types/api';
import { getCommentsQueryOptions } from './get-comments';
import { getPostsQueryOptions } from '@/features/posts/api/get-posts';

export const createCommentInputSchema = z.object({
  PostID: z.number(),
  Content: z.string().min(1, 'Required')
});

export type CreateCommentInput = z.infer<typeof createCommentInputSchema>;

export const createComment = (input: CreateCommentInput): Promise<Comment> => {
  return api.post('/Comment/Create', input);
};

type UseCreateCommentOptions = {
  PostID: number;
  mutationConfig?: MutationConfig<typeof createComment>;
};

export const useCreateComment = ({ PostID, mutationConfig }: UseCreateCommentOptions) => {
  const queryClient = useQueryClient();

  const { onSuccess, ...restConfig } = mutationConfig || {};

  return useMutation({
    onSuccess: (...args) => {
      queryClient.invalidateQueries({ queryKey: getCommentsQueryOptions(PostID).queryKey });
      queryClient.invalidateQueries({
        queryKey: getPostsQueryOptions().queryKey
      });
      onSuccess?.(...args);
    },
    ...restConfig,
    mutationFn: createComment
  });
};
