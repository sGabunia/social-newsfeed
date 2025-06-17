import { queryOptions, useQuery } from '@tanstack/react-query';

import { api } from '@/lib/api-client';
import type { Post } from '@/types/api';
import type { QueryConfig } from '@/lib/react-query';

export const getPosts = (): Promise<Post[]> => {
  return api.post('/Post/GetAll', {});
};

export const getPostsQueryOptions = () => {
  return queryOptions({
    queryKey: ['posts'],
    queryFn: getPosts
  });
};

type UsePostsOptions = {
  queryConfig?: QueryConfig<typeof getPosts>;
};

export const usePosts = ({ queryConfig }: UsePostsOptions) => {
  return useQuery({
    ...getPostsQueryOptions(),
    ...queryConfig
  });
};
