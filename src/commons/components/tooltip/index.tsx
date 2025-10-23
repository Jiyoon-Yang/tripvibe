import React from "react";
import styles from "./styles.module.css";

export interface TooltipProps {
  /** 툴팁 크기 */
  size: "s" | "m";
  /** 툴팁 텍스트 내용 */
  children: React.ReactNode;
  /** 추가 클래스명 */
  className?: string;
}

/**
 * Tooltip Component
 *
 * 정보를 표시하는 툴팁 컴포넌트
 * - size: s, m
 */
export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ size, children, className, ...rest }, ref) => {
    const tooltipClassName = [styles.tooltip, styles[`size-${size}`], className]
      .filter(Boolean)
      .join(" ");

    return (
      <div ref={ref} className={tooltipClassName} {...rest}>
        <span className={styles.text}>{children}</span>
      </div>
    );
  }
);

Tooltip.displayName = "Tooltip";

export default Tooltip;
