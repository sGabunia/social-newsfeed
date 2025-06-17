import { useQuery } from '@tanstack/react-query';
import { api } from './api-client';
import type { User } from '@/types/api';

export const getUser = async (): Promise<User> => {
  return api.post('/User/Get', {});
};

export const useUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: getUser,
    staleTime: 1000 * 60 * 20 // 20 minutes
  });
};
