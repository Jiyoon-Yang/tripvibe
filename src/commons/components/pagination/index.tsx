import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

export interface PaginationProps {
  /** 현재 페이지 번호 */
  currentPage: number;
  /** 전체 페이지 수 */
  totalPages: number;
  /** 페이지 변경 핸들러 */
  onPageChange: (page: number) => void;
  /** 컴포넌트 크기 */
  size?: "s" | "m";
  /** 한 번에 보여줄 페이지 번호 개수 (기본값: 5) */
  visiblePages?: number;
  /** 추가 className */
  className?: string;
}

/**
 * Pagination Component
 *
 * 페이지네이션 UI 컴포넌트
 * Figma 디자인을 기반으로 구현된 다양한 variant 지원
 * - property: 페이지 1개, 2개 페이지, 3개 이상 페이지, leftright 아이콘 버튼 enable, left 아이콘 버튼 enable
 * - size: s, m
 */
export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  size = "m",
  visiblePages = 5,
  className,
}) => {
  // 페이지 범위 계산
  const getPageNumbers = (): number[] => {
    if (totalPages <= visiblePages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const halfVisible = Math.floor(visiblePages / 2);
    let startPage = Math.max(1, currentPage - halfVisible);
    const endPage = Math.min(totalPages, startPage + visiblePages - 1);

    if (endPage - startPage + 1 < visiblePages) {
      startPage = Math.max(1, endPage - visiblePages + 1);
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  const pageNumbers = getPageNumbers();
  const isLeftDisabled = currentPage <= 1;
  const isRightDisabled = currentPage >= totalPages;

  // variant 결정
  const getVariant = (): string => {
    if (totalPages === 1) return "single-page";
    if (totalPages === 2) return "two-pages";
    if (!isLeftDisabled && !isRightDisabled) return "both-arrows";
    if (!isLeftDisabled && isRightDisabled) return "left-arrow-only";
    return "three-or-more";
  };

  const variant = getVariant();

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const paginationClassName = [
    styles.pagination,
    styles[`size-${size}`],
    styles[`variant-${variant}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // 페이지 1개인 경우
  if (totalPages === 1) {
    return (
      <div className={paginationClassName}>
        <button
          className={`${styles.pageButton} ${styles.selected}`}
          aria-current="page"
          aria-label="페이지 1">
          1
        </button>
      </div>
    );
  }

  return (
    <div className={paginationClassName}>
      {/* 왼쪽 화살표 */}
      <button
        className={`${styles.arrowButton} ${styles.leftArrow}`}
        onClick={handlePrevPage}
        aria-label="이전 페이지"
        disabled={isLeftDisabled}>
        <Image
          src={
            isLeftDisabled
              ? "/icons/left_arrow_disabled.svg"
              : "/icons/left_arrow.svg"
          }
          alt="이전"
          width={24}
          height={24}
        />
      </button>

      {/* 페이지 번호들 */}
      <div className={styles.pageNumbers}>
        {pageNumbers.map((pageNum) => (
          <button
            key={pageNum}
            className={`${styles.pageButton} ${
              pageNum === currentPage ? styles.selected : ""
            }`}
            onClick={() => onPageChange(pageNum)}
            aria-current={pageNum === currentPage ? "page" : undefined}
            aria-label={`페이지 ${pageNum}`}>
            {pageNum}
          </button>
        ))}
      </div>

      {/* 오른쪽 화살표 */}
      <button
        className={`${styles.arrowButton} ${styles.rightArrow}`}
        onClick={handleNextPage}
        aria-label="다음 페이지"
        disabled={isRightDisabled}>
        <Image
          src={
            isRightDisabled
              ? "/icons/right_arrow_disabled.svg"
              : "/icons/right_arrow.svg"
          }
          alt="다음"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};

Pagination.displayName = "Pagination";

export default Pagination;
