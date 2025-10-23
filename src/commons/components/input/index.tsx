import React from "react";
import styles from "./styles.module.css";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** 입력 상태 */
  status?:
    | "enabled"
    | "error"
    | "filled"
    | "selected&typing"
    | "disabled"
    | "lead-only";
  /** 입력 크기 */
  size?: "s" | "m";
  /** 채움 상태 */
  filled?: "on" | "off";
  /** 레이블 */
  label?: string;
  /** 필수 입력 여부 */
  required?: boolean;
  /** 에러 메시지 */
  errorMessage?: string;
  /** 오른쪽 버튼 */
  rightButton?: React.ReactNode;
}

/**
 * Input Component
 *
 * 다양한 상태를 지원하는 입력 컴포넌트
 * - status: enabled, error, filled, selected&typing, disabled, lead-only
 * - size: s, m
 * - filled: on, off
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      status = "enabled",
      size = "m",
      filled = "off",
      label,
      required = false,
      errorMessage,
      rightButton,
      className,
      disabled,
      placeholder = "내용을 입력해 주세요.",
      ...rest
    },
    ref
  ) => {
    const isDisabled = status === "disabled" || disabled;
    const isReadOnly = status === "lead-only";
    const isError = status === "error";

    const inputClassName = [
      styles.input,
      styles[`status-${status}`],
      styles[`size-${size}`],
      styles[`filled-${filled}`],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={styles.inputWrapper}>
        {/* 레이블 영역 */}
        {label && (
          <div className={styles.labelArea}>
            <span className={styles.label}>{label}</span>
            {required && <span className={styles.required}>*</span>}
          </div>
        )}

        {/* 입력 영역 */}
        <div className={styles.inputContainer}>
          <div className={styles.inputField}>
            <input
              ref={ref}
              className={inputClassName}
              disabled={isDisabled}
              readOnly={isReadOnly}
              placeholder={placeholder}
              {...rest}
            />
          </div>
          {rightButton && (
            <div className={styles.rightButton}>{rightButton}</div>
          )}
        </div>

        {/* 에러 메시지 */}
        {isError && errorMessage && (
          <div className={styles.errorMessage}>{errorMessage}</div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
