import { queryOptions, useQuery } from '@tanstack/react-query';
import type { QueryConfig } from '@/lib/react-query';

import { api } from '@/lib/api-client';
import type { Comment } from '@/types/api';

export const getComments = (postId: number): Promise<Comment[]> => {
  return api.post('/Comment/GetAll', { PostID: postId });
};

export const getCommentsQueryOptions = (postId: number) => {
  return queryOptions({
    queryKey: ['comments', postId],
    queryFn: () => getComments(postId)
  });
};

type UseCommentsOptions = {
  postId: number;
  queryConfig?: QueryConfig<typeof getCommentsQueryOptions>;
};

export const useComments = ({ queryConfig, postId }: UseCommentsOptions) => {
  return useQuery({
    ...getCommentsQueryOptions(postId),
    ...queryConfig
  });
};
