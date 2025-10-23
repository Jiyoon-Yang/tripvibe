import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** 라디오 버튼 크기 */
  size: "s" | "m";
  /** 라디오 버튼 선택 상태 */
  state?: "enabled" | "selected";
  /** 라디오 버튼 레이블 */
  label: string;
  /** 라디오 버튼 값 */
  value: string;
  /** 체크 여부 (controlled) */
  checked?: boolean;
  /** onChange 핸들러 */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Radio Component
 *
 * 다양한 variant를 지원하는 라디오 버튼 컴포넌트
 * - size: s, m
 * - state: enabled, selected (자동으로 checked 상태에 따라 관리됨)
 */
export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      size,
      state,
      label,
      value,
      checked = false,
      onChange,
      className,
      disabled,
      ...rest
    },
    ref
  ) => {
    // checked 상태에 따라 state를 자동으로 결정
    const effectiveState = checked ? "selected" : "enabled";
    const displayState = state || effectiveState;

    const iconSize = size === "m" ? 24 : 20;
    const iconSrc =
      displayState === "selected"
        ? "/icons/radio-selected.svg"
        : "/icons/radio-enabled.svg";

    const containerClassName = [
      styles.radioContainer,
      styles[`size-${size}`],
      styles[`state-${displayState}`],
      disabled && styles.disabled,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <label className={containerClassName}>
        <input
          ref={ref}
          type="radio"
          className={styles.radioInput}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          {...rest}
        />
        <div className={styles.radioIcon}>
          <Image
            src={iconSrc}
            alt={displayState === "selected" ? "선택됨" : "선택 안 됨"}
            width={iconSize}
            height={iconSize}
          />
        </div>
        <span className={styles.radioLabel}>{label}</span>
      </label>
    );
  }
);

Radio.displayName = "Radio";

export default Radio;
