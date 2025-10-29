"use client";

import React from "react";
import styles from "./styles.module.css";
import { cn } from "../../utils/cn";

export interface TabsProps {
  /**
   * 탭의 위치/스타일 variant
   */
  position: "primary-black" | "secondary" | "side" | "primary-white";
  /**
   * 탭 크기
   */
  size: "s" | "m";
  /**
   * 선택된 상태
   */
  selected: "on" | "off";
  /**
   * 탭에 표시될 텍스트
   */
  children: React.ReactNode;
  /**
   * 비활성화 상태
   */
  disabled?: boolean;
  /**
   * 클릭 이벤트 핸들러
   */
  onClick?: () => void;
  /**
   * 추가 CSS 클래스
   */
  className?: string;
}

export const Tabs = React.forwardRef<HTMLButtonElement, TabsProps>(
  (
    {
      position,
      size,
      selected,
      children,
      disabled = false,
      onClick,
      className,
      ...props
    },
    ref
  ) => {
    const handleClick = () => {
      if (!disabled && onClick) {
        onClick();
      }
    };

    const isSidePosition = position === "side";

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          styles.tabs,
          styles[`position-${position}`],
          styles[`size-${size}`],
          styles[`selected-${selected}`],
          {
            [styles.disabled]: disabled,
            [styles.side]: isSidePosition,
          },
          className
        )}
        onClick={handleClick}
        disabled={disabled}
        {...props}>
        {isSidePosition && (
          <div className={styles.iconContainer}>
            <div className={styles.iconFrame} />
          </div>
        )}
        <span className={styles.text}>{children}</span>
        {isSidePosition && (
          <div className={styles.arrowContainer}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.arrow}>
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
      </button>
    );
  }
);

Tabs.displayName = "Tabs";
