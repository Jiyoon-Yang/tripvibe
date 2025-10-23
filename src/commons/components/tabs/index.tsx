import React from "react";
import styles from "./styles.module.css";

// cn 유틸리티 함수 (클래스명 병합)
const cn = (
  ...classes: (string | undefined | null | false | Record<string, boolean>)[]
): string => {
  return classes
    .map((cls) => {
      if (typeof cls === "object" && cls !== null) {
        return Object.entries(cls)
          .filter(([, value]) => value)
          .map(([key]) => key)
          .join(" ");
      }
      return cls;
    })
    .filter(Boolean)
    .join(" ");
};

export interface TabsProps {
  /**
   * 탭의 위치/스타일 variant
   */
  position?: "primary-black" | "secondary" | "side" | "primary-white";

  /**
   * 탭 크기
   */
  size?: "s" | "m";

  /**
   * 선택된 상태
   */
  selected?: "on" | "off";

  /**
   * 비활성화 상태
   */
  disabled?: boolean;

  /**
   * 탭 텍스트 내용
   */
  children: React.ReactNode;

  /**
   * 클릭 이벤트 핸들러
   */
  onClick?: () => void;

  /**
   * 추가 CSS 클래스명
   */
  className?: string;
}

/**
 * 다양한 위치(position)와 크기(size)를 지원하는 범용 탭 컴포넌트
 *
 * @example
 * ```tsx
 * <Tabs position="secondary" size="m" selected="on">
 *   탭 텍스트
 * </Tabs>
 * ```
 */
export const Tabs = React.forwardRef<HTMLButtonElement, TabsProps>(
  (
    {
      position = "secondary",
      size = "m",
      selected = "off",
      disabled = false,
      children,
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
          },
          className
        )}
        onClick={handleClick}
        disabled={disabled}
        {...props}>
        <span className={styles.text}>{children}</span>
      </button>
    );
  }
);

Tabs.displayName = "Tabs";
