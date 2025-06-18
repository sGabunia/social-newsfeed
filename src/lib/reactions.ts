import { queryOptions, useQuery } from '@tanstack/react-query';
import type { QueryConfig } from '@/lib/react-query';

import { api } from '@/lib/api-client';

const getReactions = (): Promise<string[]> => {
  return api.post('Post/ReactionTypesGet', {});
};

export const getReactionsQueryOptions = () => {
  return queryOptions({
    queryKey: ['reactions'],
    queryFn: getReactions
  });
};

type UseReactionsOptions = {
  queryConfig?: QueryConfig<typeof getReactions>;
};

export const useReactions = ({ queryConfig }: UseReactionsOptions) => {
  return useQuery({
    ...getReactionsQueryOptions(),
    ...queryConfig,
    staleTime: 1000 * 60 * 1440
  });
};
