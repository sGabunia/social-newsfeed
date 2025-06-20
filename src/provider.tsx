import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { queryConfig } from '@/lib/react-query';
import { ErrorBoundary } from 'react-error-boundary';

import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { MainErrorFallback } from './components/error/error';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig
      })
  );
  return (
    <ErrorBoundary FallbackComponent={MainErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <MantineProvider
          theme={{
            primaryColor: 'green'
          }}
        >
          {children}
        </MantineProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};
