import { queryOptions, useQuery } from '@tanstack/react-query';
import type { QueryConfig } from '@/lib/react-query';

import { api } from '@/lib/api-client';
import type { Reactors } from '@/types/api';

export const getPostReactors = (postId: number): Promise<Reactors> => {
  return api.post('Post/ReactorGetAll', { PostID: postId });
};

export const getPostReactorsQueryOptions = (postId: number) => {
  return queryOptions({
    queryKey: ['post-reactions', postId],
    queryFn: () => getPostReactors(postId)
  });
};

type UsePostReactorsOptions = {
  postId: number;
  queryConfig?: QueryConfig<typeof getPostReactorsQueryOptions>;
};

export const usePostReactors = ({ queryConfig, postId }: UsePostReactorsOptions) => {
  return useQuery({
    ...getPostReactorsQueryOptions(postId),
    ...queryConfig
  });
};
