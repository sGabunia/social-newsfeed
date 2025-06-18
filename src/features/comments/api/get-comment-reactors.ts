import { queryOptions, useQuery } from '@tanstack/react-query';
import type { QueryConfig } from '@/lib/react-query';

import { api } from '@/lib/api-client';
import type { Reactors } from '@/types/api';

export const getCommentReactors = (commentId: number): Promise<Reactors> => {
  return api.post('Comment/ReactorGetAll', { CommentID: commentId });
};

export const getCommentReactorsQueryOptions = (commentId: number) => {
  return queryOptions({
    queryKey: ['comment-reactions', commentId],
    queryFn: () => getCommentReactors(commentId)
  });
};

type UseCommentReactorsOptions = {
  commentId: number;
  queryConfig?: QueryConfig<typeof getCommentReactorsQueryOptions>;
};

export const useCommentReactors = ({ queryConfig, commentId }: UseCommentReactorsOptions) => {
  return useQuery({
    ...getCommentReactorsQueryOptions(commentId),
    ...queryConfig
  });
};
