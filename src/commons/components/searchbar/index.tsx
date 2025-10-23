import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

export interface SearchbarProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** 검색바 상태 */
  state?: "default" | "selected" | "filled" | "typing";
  /** 검색바 크기 */
  size?: "s" | "m";
}

/**
 * Searchbar Component
 *
 * 다양한 상태를 지원하는 검색바 컴포넌트
 * - state: default, selected, filled, typing
 * - size: s (40px), m (48px)
 */
export const Searchbar = React.forwardRef<HTMLInputElement, SearchbarProps>(
  (
    {
      state = "default",
      size = "m",
      className,
      placeholder = "제목을 검색해 주세요.",
      ...rest
    },
    ref
  ) => {
    const containerClassName = [
      styles.searchbarContainer,
      styles[`state-${state}`],
      styles[`size-${size}`],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={containerClassName}>
        <Image
          src="/icons/search.svg"
          alt="search icon"
          width={24}
          height={24}
          className={styles.searchIcon}
        />
        {state === "selected" && <div className={styles.cursor} />}
        <input
          ref={ref}
          type="text"
          className={styles.searchInput}
          placeholder={placeholder}
          {...rest}
        />
      </div>
    );
  }
);

Searchbar.displayName = "Searchbar";

export default Searchbar;
