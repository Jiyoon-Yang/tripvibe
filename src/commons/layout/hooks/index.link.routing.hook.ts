"use client";

import { useRouter } from "next/navigation";
import { URLS } from "@/commons/constants/url";

/**
 * Layout 네비게이션 링크 라우팅 Hook
 * url.ts의 경로 상수를 사용하여 페이지 이동을 처리
 */
export const useLinkRouting = () => {
  const router = useRouter();

  /**
   * 로고 클릭 시 게시판 목록 페이지로 이동
   */
  const handleLogoClick = () => {
    router.push(URLS.boards.list);
  };

  /**
   * 트립토크 클릭 시 게시판 목록 페이지로 이동
   */
  const handleTripTalkClick = () => {
    router.push(URLS.boards.list);
  };

  /**
   * 로그인 클릭 시 로그인 페이지로 이동
   */
  const handleLoginClick = () => {
    router.push(URLS.auth.signin);
  };

  return {
    handleLogoClick,
    handleTripTalkClick,
    handleLoginClick,
  };
};
