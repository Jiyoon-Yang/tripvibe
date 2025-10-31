import React from "react";
import styles from "./styles.module.css";

export interface TooltipProps {
  /**
   * 툴팁 크기
   */
  size?: "s" | "m";
  /**
   * 툴팁 내용
   */
  children: React.ReactNode;
  /**
   * 추가 클래스명
   */
  className?: string;
}

/**
 * Tooltip 컴포넌트
 *
 * 정보를 표시하는 툴팁 컴포넌트입니다.
 * s와 m 두 가지 크기를 제공합니다.
 */
export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ size = "m", children, className }, ref) => {
    const classNames = [styles.tooltip, styles[`tooltip--${size}`], className]
      .filter(Boolean)
      .join(" ");

    return (
      <div ref={ref} className={classNames}>
        {children}
      </div>
    );
  }
);

Tooltip.displayName = "Tooltip";

export default Tooltip;
