"use client";

import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

export interface DatepickerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** DatePicker 크기 */
  size: "s" | "m";
  /** 시작 날짜 */
  startDate?: Date | null;
  /** 종료 날짜 */
  endDate?: Date | null;
  /** placeholder 텍스트 */
  placeholder?: string;
  /** 비활성화 상태 */
  disabled?: boolean;
  /** 추가 클래스명 */
  className?: string;
}

/**
 * DatePicker Component
 *
 * 날짜 범위를 표시하는 DatePicker 컴포넌트
 * - size: s, m
 * - 피그마 디자인에 따라 calendar icon + 날짜 텍스트만 표시
 */
export const DatePicker = React.forwardRef<HTMLDivElement, DatepickerProps>(
  (
    {
      size,
      startDate = null,
      endDate = null,
      placeholder = "YYYY.MM.DD - YYYY.MM.DD",
      disabled = false,
      className,
      onClick,
      ...rest
    },
    ref
  ) => {
    const formatDate = (date: Date | null): string => {
      if (!date) return "";

      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");

      return `${year}.${month}.${day}`;
    };

    const getDisplayText = (): string => {
      if (!startDate && !endDate) {
        return placeholder;
      }

      const start = formatDate(startDate);
      const end = formatDate(endDate);

      if (start && end) {
        return `${start} - ${end}`;
      } else if (start) {
        return `${start} - YYYY.MM.DD`;
      } else if (end) {
        return `YYYY.MM.DD - ${end}`;
      }

      return placeholder;
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!disabled && onClick) {
        onClick(e);
      }
    };

    const datepickerClassName = [
      styles.datepicker,
      styles[`size-${size}`],
      disabled && styles.disabled,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const displayText = getDisplayText();
    const isPlaceholder = displayText === placeholder;

    return (
      <div
        ref={ref}
        className={datepickerClassName}
        onClick={handleClick}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        {...rest}>
        <div className={styles.iconWrapper}>
          <Image
            src="/icons/calendar.svg"
            alt="calendar"
            width={24}
            height={24}
            className={styles.icon}
          />
        </div>
        <div className={styles.dateTextWrapper}>
          <span
            className={`${styles.dateText} ${
              isPlaceholder ? styles.placeholder : ""
            }`}>
            {displayText}
          </span>
        </div>
      </div>
    );
  }
);

DatePicker.displayName = "DatePicker";

export default DatePicker;
