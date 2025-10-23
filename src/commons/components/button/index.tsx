import React from "react";
import styles from "./styles.module.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 버튼의 계층 스타일 */
  hiraki: "primary" | "secondary" | "tertiary" | "quaternary" | "ghost";
  /** 버튼 크기 */
  size: "s" | "m" | "xs";
  /** 버튼 활성화 상태 */
  position?: "enabled" | "disabled";
  /** 버튼 텍스트 */
  children: React.ReactNode;
  /** 왼쪽 아이콘 */
  leftIcon?: React.ReactNode;
  /** 오른쪽 아이콘 */
  rightIcon?: React.ReactNode;
  /** 전체 너비 사용 여부 */
  fullWidth?: boolean;
}

/**
 * Button Component
 *
 * 다양한 variant를 지원하는 버튼 컴포넌트
 * - hiraki: primary, secondary, tertiary, quaternary, ghost
 * - size: s, m, xs
 * - position: enabled, disabled
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      hiraki,
      size,
      position = "enabled",
      children,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className,
      disabled,
      ...rest
    },
    ref
  ) => {
    const isDisabled = position === "disabled" || disabled;

    const buttonClassName = [
      styles.button,
      styles[`hiraki-${hiraki}`],
      styles[`size-${size}`],
      styles[`position-${position}`],
      fullWidth && styles.fullWidth,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        className={buttonClassName}
        disabled={isDisabled}
        {...rest}>
        {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
        <span className={styles.label}>{children}</span>
        {rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

