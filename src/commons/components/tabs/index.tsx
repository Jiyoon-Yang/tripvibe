import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

export interface TabsProps {
  /**
   * 탭의 위치/스타일 타입
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
   * 클릭 핸들러
   */
  onClick?: () => void;
  /**
   * 추가 CSS 클래스명
   */
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  position,
  size,
  selected,
  children,
  onClick,
  className = "",
}) => {
  const getTabClasses = () => {
    const baseClasses = [
      styles.tabs,
      styles[`position-${position}`],
      styles[`size-${size}`],
      styles[`selected-${selected}`],
    ];

    if (className) {
      baseClasses.push(className);
    }

    return baseClasses.join(" ");
  };

  const getTextClasses = () => {
    return [
      styles.text,
      styles[`text-${position}`],
      styles[`text-${size}`],
      styles[`text-selected-${selected}`],
    ].join(" ");
  };

  const getIconClasses = () => {
    return [styles.icon, styles[`icon-${size}`]].join(" ");
  };

  return (
    <button className={getTabClasses()} onClick={onClick} type="button">
      {position === "side" && (
        <div className={getIconClasses()}>
          <Image src="/icons/right_arrow.svg" alt="" width={20} height={20} />
        </div>
      )}
      <span className={getTextClasses()}>{children}</span>
      {position === "side" && (
        <div className={getIconClasses()}>
          <Image src="/icons/right_arrow.svg" alt="" width={20} height={20} />
        </div>
      )}
    </button>
  );
};

export default Tabs;
