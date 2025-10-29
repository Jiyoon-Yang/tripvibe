import React from "react";
import styles from "./styles.module.css";
import { Searchbar } from "../../commons/components/searchbar";
import { Button } from "../../commons/components/button";
import { DatePicker } from "../../commons/components/datepicker";
import Image from "next/image";

const Boards = () => {
  return (
    <div className={styles.container}>
      {/* hotpost: 1280 * 212 */}
      <div className={styles.hotpost}>
        <div className={styles.hotpostContent}>Hot Post 영역</div>
      </div>

      {/* main content div: 1280 * 844 */}
      <div className={styles.mainContent}>
        {/* boardlabel: 1280 * 36 */}
        <div className={styles.boardLabel}>
          <h2>게시판</h2>
        </div>

        {/* gap: 1280 * 24 */}
        <div className={styles.gap24}></div>

        {/* search: 1280 * 48 */}
        <div className={styles.search}>
          <div className={styles.searchLeft}>
            <Searchbar
              state="default"
              size="m"
              placeholder="제목을 검색해 주세요."
              className={styles.searchbar}
            />
            <DatePicker
              size="m"
              placeholder="YYYY.MM.DD - YYYY.MM.DD"
              className={styles.datepicker}
            />
            <Button
              hiraki="secondary"
              size="m"
              position="enabled"
              className={styles.searchButton}>
              검색
            </Button>
          </div>
          <div className={styles.searchRight}>
            <Button
              hiraki="primary"
              size="m"
              position="enabled"
              className={styles.tripTalkButton}
              leftIcon={
                <Image
                  src="/icons/write.svg"
                  alt="write icon"
                  width={24}
                  height={24}
                />
              }>
              트립토크 등록
            </Button>
          </div>
        </div>

        {/* gap: 1280 * 24 */}
        <div className={styles.gap24}></div>

        {/* content div: 1280 * 712 */}
        <div className={styles.contentArea}>
          {/* boards: 1184 * 608 */}
          <div className={styles.boards}>
            <div className={styles.boardList}>
              {/* 게시글 목록 영역 */}
              <div className={styles.boardItem}>게시글 1</div>
              <div className={styles.boardItem}>게시글 2</div>
              <div className={styles.boardItem}>게시글 3</div>
              <div className={styles.boardItem}>게시글 4</div>
              <div className={styles.boardItem}>게시글 5</div>
            </div>
          </div>

          {/* gap: 1280 * 24 */}
          <div className={styles.gap24}></div>

          {/* pagination: 1184 * 32 */}
          <div className={styles.pagination}>
            <div className={styles.paginationContent}>
              <button className={styles.pageButton}>이전</button>
              <span className={styles.pageNumbers}>1 2 3 4 5</span>
              <button className={styles.pageButton}>다음</button>
            </div>
          </div>

          {/* gap: 1280 * 24 */}
          <div className={styles.gap24}></div>
        </div>
      </div>
    </div>
  );
};

export default Boards;
