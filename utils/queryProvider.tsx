'use client';

import React, { ReactNode, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { initializePrefetching } from './prefetchingStrategies';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

interface QueryProviderProps {
  children: ReactNode;
}

export default function QueryProvider({ children }: QueryProviderProps) {
  // Initialize prefetching on component mount
  useEffect(() => {
    // Initialize prefetching strategies
    initializePrefetching(queryClient);
    
    // Log that prefetching has been initialized for debugging
    console.log('React Query prefetching initialized');
    
    // Return cleanup to handle any necessary cleanup
    return () => {
      // Any cleanup code for prefetching if needed
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
} 