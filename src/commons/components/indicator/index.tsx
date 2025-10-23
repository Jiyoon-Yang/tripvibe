import React from "react";
import styles from "./styles.module.css";

export interface IndicatorProps {
  /** Indicator 크기 */
  size: "s" | "m";
  /** 전체 아이템 개수 */
  total: number;
  /** 현재 활성화된 인덱스 (0부터 시작) */
  current: number;
  /** 추가 클래스명 */
  className?: string;
}

/**
 * Indicator Component
 *
 * 페이지네이션이나 캐러셀 등에서 사용되는 Indicator 컴포넌트
 * - size: s, m
 * - 활성화된 점은 불투명, 나머지는 80% 투명도
 */
export const Indicator: React.FC<IndicatorProps> = ({
  size,
  total,
  current,
  className,
}) => {
  const indicatorClassName = [
    styles.indicator,
    styles[`size-${size}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={indicatorClassName}>
      {Array.from({ length: total }, (_, index) => (
        <span
          key={index}
          className={`${styles.dot} ${
            index === current ? styles.active : styles.inactive
          }`}
        />
      ))}
    </div>
  );
};

Indicator.displayName = "Indicator";

export default Indicator;
