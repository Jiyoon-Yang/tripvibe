/**
 * URL Constants
 * 프로젝트 전체에서 사용되는 URL 경로 상수
 * Next.js App Router 기반 동적 라우팅 지원
 */

/**
 * 경로 접근 가능 상태
 */
export const ACCESS_STATE = {
  PUBLIC: "PUBLIC",
  MEMBER_ONLY: "MEMBER_ONLY",
} as const;

/**
 * UI 노출 가능 여부
 */
export const UI_EXPOSURE = {
  BANNER: "BANNER",
  NAVIGATION: "NAVIGATION",
} as const;

/**
 * URL 경로 정의
 */
export const URLS = {
  // 인증 관련
  auth: {
    signin: "/auth/signin",
    signup: "/auth/signup",
  },

  // 게시판 관련
  boards: {
    list: "/boards",
    detail: (id: string | number) => `/boards/${id}`,
    write: "/boards/new",
  },
} as const;

/**
 * URL 경로 메타데이터
 * 각 페이지의 접근 권한 및 UI 노출 여부 관리
 */
export const URL_METADATA = {
  [URLS.auth.signin]: {
    accessState: ACCESS_STATE.PUBLIC,
    showBanner: false,
    showNavigation: false,
  },
  [URLS.auth.signup]: {
    accessState: ACCESS_STATE.PUBLIC,
    showBanner: false,
    showNavigation: false,
  },
  [URLS.boards.list]: {
    accessState: ACCESS_STATE.PUBLIC,
    showBanner: true,
    showNavigation: true,
  },
  [URLS.boards.write]: {
    accessState: ACCESS_STATE.MEMBER_ONLY,
    showBanner: false,
    showNavigation: true,
  },
} as const;

/**
 * 동적 라우트 패턴 매칭
 * URL_METADATA에서 동적 경로를 검색할 때 사용
 */
export const DYNAMIC_ROUTE_PATTERNS = {
  boards_detail: {
    pattern: /^\/boards\/\d+$/,
    metadata: {
      accessState: ACCESS_STATE.MEMBER_ONLY,
      showBanner: true,
      showNavigation: true,
    },
  },
} as const;

/**
 * URL 메타데이터 조회 헬퍼 함수
 * 정적 경로와 동적 경로 모두에서 메타데이터를 가져올 수 있도록 함
 */
export const getUrlMetadata = (pathname: string) => {
  // 정적 경로 확인
  if (pathname in URL_METADATA) {
    return URL_METADATA[pathname as keyof typeof URL_METADATA];
  }

  // 동적 경로 패턴 매칭
  for (const { pattern, metadata } of Object.values(DYNAMIC_ROUTE_PATTERNS)) {
    if (pattern.test(pathname)) {
      return metadata;
    }
  }

  // 기본값 반환
  return {
    accessState: ACCESS_STATE.PUBLIC,
    showBanner: false,
    showNavigation: false,
  };
};

// Type exports for TypeScript
export type AccessState = (typeof ACCESS_STATE)[keyof typeof ACCESS_STATE];
export type UIExposure = (typeof UI_EXPOSURE)[keyof typeof UI_EXPOSURE];
export type URLMetadata = {
  accessState: AccessState;
  showBanner: boolean;
  showNavigation: boolean;
};
