"use client";

import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { ReactNode, useMemo } from "react";

// Apollo Client 싱글톤 인스턴스 생성 함수
function createApolloClient() {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "http://localhost:4000/graphql",
  });

  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            // 필요시 캐시 정책 추가
          },
        },
      },
    }),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-and-network",
        errorPolicy: "all",
      },
      query: {
        fetchPolicy: "network-only",
        errorPolicy: "all",
      },
      mutate: {
        errorPolicy: "all",
      },
    },
  });
}

let apolloClient: ReturnType<typeof createApolloClient> | null = null;

// Apollo Client 싱글톤 인스턴스 가져오기
function getApolloClient() {
  if (!apolloClient) {
    apolloClient = createApolloClient();
  }
  return apolloClient;
}

export function ApolloClientProvider({ children }: { children: ReactNode }) {
  const client = useMemo(() => getApolloClient(), []);
  
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

