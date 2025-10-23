import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

export interface TabsProps {
  /**
   * 탭의 위치/스타일 variant
   */
  position: "primary-black" | "secondary" | "side" | "primary-white";
  /**
   * 탭의 크기
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
   * 클릭 이벤트 핸들러
   */
  onClick?: () => void;
  /**
   * 추가 CSS 클래스명
   */
  className?: string;
}

/**
 * Tabs 컴포넌트
 * 다양한 position, size, selected 상태를 지원하는 탭 컴포넌트
 */
export const Tabs: React.FC<TabsProps> = ({
  position,
  size,
  selected,
  children,
  onClick,
  className = "",
}) => {
  const getTabClassName = () => {
    const baseClass = styles.tab;
    const positionClass = styles[`position-${position}`];
    const sizeClass = styles[`size-${size}`];
    const selectedClass = styles[`selected-${selected}`];

    return `${baseClass} ${positionClass} ${sizeClass} ${selectedClass} ${className}`.trim();
  };

  const renderSideContent = () => {
    if (position === "side") {
      return (
        <>
          <div className={styles.iconFrame} />
          <span className={styles.sideText}>{children}</span>
          <Image
            src="/icons/right_arrow.svg"
            alt="right arrow"
            width={size === "m" ? 20 : 16}
            height={size === "m" ? 20 : 16}
            className={styles.rightArrow}
          />
        </>
      );
    }
    return children;
  };

  return (
    <button type="button" className={getTabClassName()} onClick={onClick}>
      {renderSideContent()}
    </button>
  );
};

export default Tabs;
