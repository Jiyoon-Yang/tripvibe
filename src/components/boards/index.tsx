"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";
import { Searchbar } from "../../commons/components/searchbar";
import { Button } from "../../commons/components/button";
import { DatePicker } from "antd";
import "antd/dist/reset.css";
import { Pagination } from "../../commons/components/pagination";
import Image from "next/image";
import { useRouter } from "next/navigation";

const { RangePicker } = DatePicker;

// 타입 정의
interface HotPost {
  id: number;
  title: string;
  author: string;
  profileImage: string;
  image: string;
  likes: number;
  date: string;
}

interface BoardPost {
  id: number;
  title: string;
  author: string;
  date: string;
}

// Mock 데이터 (컴포넌트 외부로 분리)
const hotPostData: HotPost[] = [
  {
    id: 1,
    title: "제주 살이 1일차 청산별곡이 생각나네요",
    author: "홍길동",
    profileImage: "/images/profile1.png",
    image: "/images/cardimage1.png",
    likes: 24,
    date: "2024.11.11",
  },
  {
    id: 2,
    title: "길 걷고 있었는데 고양이한테 간택 받았어요",
    author: "홍길동",
    profileImage: "/images/profile2.png",
    image: "/images/cardimage2.png",
    likes: 24,
    date: "2024.11.11",
  },
  {
    id: 3,
    title: "강릉 여름바다 보기 좋네요 서핑하고 싶어요!",
    author: "홍길동",
    profileImage: "/images/profile3.png",
    image: "/images/cardimage3.png",
    likes: 24,
    date: "2024.11.11",
  },
  {
    id: 4,
    title: "누가 양양 핫하다고 했어 나밖에 없는데?",
    author: "홍길동",
    profileImage: "/images/profile4.png",
    image: "/images/cardimage4.png",
    likes: 24,
    date: "2024.11.11",
  },
];

// 게시판 Mock 데이터 (피그마 디자인 기반)
const boardPostData: BoardPost[] = [
  {
    id: 243,
    title: "제주 살이 1일차",
    author: "홍길동",
    date: "2024.12.16",
  },
  {
    id: 242,
    title: "강남 살이 100년차",
    author: "홍길동",
    date: "2024.12.16",
  },
  {
    id: 241,
    title: "길 걷고 있었는데 고양이한테 간택 받았어요",
    author: "홍길동",
    date: "2024.12.16",
  },
  {
    id: 240,
    title: "오늘 날씨 너무 좋아서 바다보러 왔어요~",
    author: "홍길동",
    date: "2024.12.16",
  },
  {
    id: 239,
    title: "누가 양양 핫하다고 했어 나밖에 없는데?",
    author: "홍길동",
    date: "2024.12.16",
  },
  {
    id: 238,
    title: "여름에 보드타고 싶은거 저밖에 없나요 🥲",
    author: "홍길동",
    date: "2024.12.16",
  },
  {
    id: 237,
    title:
      "사무실에서 과자 너무 많이 먹은거 같아요 다이어트하러 여행 가야겠어요",
    author: "홍길동",
    date: "2024.12.16",
  },
  {
    id: 236,
    title: "여기는 기승전 여행이네요 ㅋㅋㅋ",
    author: "홍길동",
    date: "2024.12.16",
  },
  {
    id: 235,
    title: "상여금 들어왔는데 이걸로 다낭갈까 사이판 갈까",
    author: "홍길동",
    date: "2024.12.16",
  },
  {
    id: 234,
    title: "강릉 여름바다 보기 좋네요",
    author: "홍길동",
    date: "2024.12.16",
  },
];

// HotPostCard 컴포넌트 분리
interface HotPostCardProps {
  post: HotPost;
}

const HotPostCard: React.FC<HotPostCardProps> = ({ post }) => {
  return (
    <article className={styles.hotpostCard} role="listitem">
      <div className={styles.cardImage}>
        <Image
          src={post.image}
          alt={post.title}
          width={112}
          height={152}
          className={styles.image}
        />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>{post.title}</h3>
          <div className={styles.profile}>
            <Image
              src={post.profileImage}
              alt={`${post.author}의 프로필`}
              width={24}
              height={24}
              className={styles.profileImage}
            />
            <span className={styles.authorName}>{post.author}</span>
          </div>
        </div>
        <div className={styles.cardFooter}>
          <div
            className={styles.likeArea}
            role="button"
            tabIndex={0}
            aria-label={`좋아요 ${post.likes}개`}>
            <Image
              src="/icons/redLikeIcon.svg"
              alt=""
              width={24}
              height={24}
              className={styles.redLikeIcon}
            />
            <span className={styles.likeCount}>{post.likes}</span>
          </div>
          <time className={styles.date} dateTime="2024-11-11">
            {post.date}
          </time>
        </div>
      </div>
    </article>
  );
};

// BoardRow 컴포넌트 분리
interface BoardRowProps {
  post: BoardPost;
}

const BoardRow: React.FC<BoardRowProps> = ({ post }) => {
  return (
    <div className={styles.boardRow}>
      <div className={styles.boardNumber}>{post.id}</div>
      <div className={styles.boardTitle}>{post.title}</div>
      <div className={styles.boardAuthor}>{post.author}</div>
      <div className={styles.boardDate}>{post.date}</div>
    </div>
  );
};

const Boards = () => {
  // 페이지네이션 상태 관리
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Mock 데이터 기준
  const router = useRouter();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.container}>
      {/* hotpost: 1280 * 212 */}
      <section className={styles.hotpost} aria-labelledby="hotpost-title">
        {/* 라벨: 1280 * 36 */}
        <header className={styles.hotpostLabel}>
          <h2 id="hotpost-title">오늘 핫한 트립토크</h2>
        </header>

        {/* gap: 1280 * 24 */}
        <div className={styles.gap24}></div>

        {/* 카드영역: 1280 * 152 */}
        <div
          className={styles.hotpostCards}
          role="list"
          aria-label="인기 게시글 목록">
          {hotPostData.map((post) => (
            <HotPostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* main content div: 1280 * 844 */}
      <div className={styles.mainContent}>
        {/* boardlabel: 1280 * 36 */}
        <div className={styles.boardLabel}>
          <h2>트립토크 게시판</h2>
        </div>

        {/* gap: 1280 * 24 */}
        <div className={styles.gap24}></div>

        {/* search: 1280 * 48 */}
        <div className={styles.search}>
          <div className={styles.searchLeft}>
            <RangePicker
              placeholder={["YYYY.MM.DD", "YYYY.MM.DD"]}
              format="YYYY.MM.DD"
              className={styles.datepicker}
            />
            <Searchbar
              state="default"
              size="m"
              placeholder="제목을 검색해 주세요."
              className={styles.searchbar}
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
              onClick={() => router.push("/boards/new")}
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
            {/* 게시판 헤더 */}
            <div className={styles.boardHeader}>
              <div className={styles.headerNumber}>번호</div>
              <div className={styles.headerTitle}>제목</div>
              <div className={styles.headerAuthor}>작성자</div>
              <div className={styles.headerDate}>날짜</div>
            </div>

            {/* 게시글 목록 영역 */}
            <div className={styles.boardList}>
              {boardPostData.map((post) => (
                <BoardRow key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* pagination: 1184 * 32 */}
          <div className={styles.pagination}>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              size="m"
              className={styles.paginationComponent}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boards;
