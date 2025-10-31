import { clsx } from "clsx";

/**
 * 클래스 이름을 조건부로 합치는 유틸리티 함수
 * clsx를 래핑하여 사용
 */
export function cn(...inputs: Parameters<typeof clsx>) {
  return clsx(inputs);
}

