import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

export interface TabsProps {
  /**
   * 탭의 위치/스타일 variant
   */
  position?: "primary-black" | "secondary" | "side" | "primary-white";
  /**
   * 탭의 크기
   */
  size?: "s" | "m";
  /**
   * 선택된 상태
   */
  selected?: "on" | "off";
  /**
   * 탭의 텍스트 내용
   */
  children: React.ReactNode;
  /**
   * 클릭 핸들러
   */
  onClick?: () => void;
  /**
   * 추가 CSS 클래스명
   */
  className?: string;
  /**
   * 비활성화 상태
   */
  disabled?: boolean;
}

export const Tabs: React.FC<TabsProps> = ({
  position = "secondary",
  size = "m",
  selected = "off",
  children,
  onClick,
  className = "",
  disabled = false,
}) => {
  const baseClasses = [
    styles.tabs,
    styles[`position-${position}`],
    styles[`size-${size}`],
    styles[`selected-${selected}`],
    disabled ? styles.disabled : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      type="button">
      <span className={styles.text}>{children}</span>
      {position === "side" && (
        <div className={styles.iconContainer}>
          <Image
            src="/icons/right_arrow.svg"
            alt=""
            width={20}
            height={20}
            className={styles.icon}
          />
        </div>
      )}
    </button>
  );
};

export default Tabs;
