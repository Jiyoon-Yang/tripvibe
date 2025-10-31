"use client";

import { usePathname } from "next/navigation";
import { getUrlMetadata } from "@/commons/constants/url";

/**
 * Layout 영역 노출 여부 Hook
 * url.ts의 URL_METADATA에 정의된 경로에 따라 navigation과 banner 영역의 노출 여부를 반환
 */
export const useArea = () => {
  const pathname = usePathname();
  const metadata = getUrlMetadata(pathname);

  return {
    showNavigation: metadata.showNavigation,
    showBanner: metadata.showBanner,
  };
};
