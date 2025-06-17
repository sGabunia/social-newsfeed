import Axios, { type InternalAxiosRequestConfig } from 'axios';
import { env } from '@/config/env';

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  if (config.headers) {
    config.headers['Content-Type'] = 'application/json';
    config.headers['X-Token'] = env.USER_TOKEN;
  }

  return config;
}

export const api = Axios.create({
  baseURL: env.API_URL
});

api.interceptors.request.use(authRequestInterceptor);

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(error);
  }
);
