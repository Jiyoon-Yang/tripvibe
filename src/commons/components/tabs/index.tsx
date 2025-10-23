import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

export interface TabItem {
  id: string;
  label: string;
}

export interface TabsProps {
  items: TabItem[];
  selectedId: string;
  onTabChange: (id: string) => void;
  position?: "primary-black" | "secondary" | "side" | "primary-white";
  size?: "s" | "m";
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  selectedId,
  onTabChange,
  position = "primary-black",
  size = "m",
  className,
}) => {
  const containerClass = [
    styles.tabsContainer,
    styles[`position-${position}`],
    styles[`size-${size}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClass}>
      {items.map((item) => {
        const isSelected = item.id === selectedId;
        const tabClass = [
          styles.tab,
          styles[`position-${position}`],
          styles[`size-${size}`],
          isSelected ? styles.selected : styles.unselected,
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <button
            key={item.id}
            className={tabClass}
            onClick={() => onTabChange(item.id)}
            aria-selected={isSelected}
            role="tab">
            {position === "side" && <span className={styles.sideIcon} />}
            <span className={styles.label}>{item.label}</span>
            {position === "side" && (
              <Image
                src="/icons/right_arrow.svg"
                alt=""
                width={size === "m" ? 20 : 16}
                height={size === "m" ? 20 : 16}
                className={styles.arrowIcon}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
