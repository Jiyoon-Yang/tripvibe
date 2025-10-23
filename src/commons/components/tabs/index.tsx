import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

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
export const Tabs: React.FC<TabsProps> = ({
  position,
  size,
  selected,
  disabled = false,
  children,
  onClick,
  className = "",
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const getTabClasses = () => {
    const baseClasses = [
      styles.tab,
      styles[`position-${position}`],
      styles[`size-${size}`],
      styles[`selected-${selected}`],
    ];

    if (disabled) {
      baseClasses.push(styles.disabled);
    }

    if (className) {
      baseClasses.push(className);
    }

    return baseClasses.join(" ");
  };

  return (
    <button
      type="button"
      className={getTabClasses()}
      onClick={handleClick}
      disabled={disabled}
      aria-pressed={selected === "on"}>
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
      {children}
    </button>
  );
};

export default Tabs;
