import { useMutation, useQueryClient } from '@tanstack/react-query';
import { z } from 'zod';

import { api } from '@/lib/api-client';
import type { MutationConfig } from '@/lib/react-query';
import { getPostsQueryOptions } from '@/features/posts/api/get-posts';

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
  mutationConfig?: MutationConfig<typeof toggleReaction>;
};

export const useToggleReaction = ({ mutationConfig }: UseToggleReactionOptions = {}) => {
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
    mutationFn: toggleReaction
  });
};
