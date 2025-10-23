"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

export function ReactQueryProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // 데이터가 stale 상태로 간주되기까지의 시간 (밀리초)
            staleTime: 60 * 1000, // 1분
            // 캐시가 유지되는 시간 (밀리초)
            gcTime: 5 * 60 * 1000, // 5분 (이전의 cacheTime)
            // 쿼리 실패 시 재시도 횟수
            retry: 1,
            // 윈도우 포커스 시 자동 refetch 여부
            refetchOnWindowFocus: false,
            // 마운트 시 자동 refetch 여부
            refetchOnMount: true,
            // 재연결 시 자동 refetch 여부
            refetchOnReconnect: true,
          },
          mutations: {
            // mutation 실패 시 재시도 횟수
            retry: 0,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
