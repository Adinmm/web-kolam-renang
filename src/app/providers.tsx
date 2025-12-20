"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";



export function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: (failureCount, error: any) => {
          if (error.response?.status === 401) return false;
          if (error.response?.status === 404) return false;
          if (error.response?.status === 400) return false;
          if (error.response?.status === 403) return false;
          if (error.response?.status === 409) return false;
          return failureCount < 3;
        },
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}