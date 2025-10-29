"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import styles from "./styles.module.css";
import { Button } from "../components/button";

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Layout 컴포넌트
 * HTML과 flexbox를 활용한 와이어프레임 구조
 *
 * 영역 구성:
 * - navigation: 1280 * 80
 * - banner: 1920 * 516
 * - gap: 1280 * 40
 * - children: 1280 * 1136
 */
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState("트립토크");

  return (
    <div className={styles.layout}>
      {/* Navigation 영역 */}
      <nav className={styles.navigation}>
        <div className={styles.navigationContent}>
          <div className={styles.leftSection}>
            {/* Logo */}
            <div className={styles.logoArea}>
              <Image
                src="/images/logo-s.png"
                alt="Logo"
                width={51.52}
                height={32}
                priority
              />
            </div>

            {/* Navigation Tabs */}
            <div className={styles.tabContainer}>
              <button
                className={`${styles.customTab} ${styles.tripTalk} ${
                  activeTab === "트립토크" ? styles.active : ""
                }`}
                onClick={() => setActiveTab("트립토크")}>
                트립토크
                <div className={styles.tabIndicator}></div>
              </button>
              <button
                className={`${styles.customTab} ${styles.accommodation} ${
                  activeTab === "숙박권 구매" ? styles.active : ""
                }`}
                onClick={() => setActiveTab("숙박권 구매")}>
                숙박권 구매
                <div className={styles.tabIndicator}></div>
              </button>
              <button
                className={`${styles.customTab} ${styles.myPage} ${
                  activeTab === "마이 페이지" ? styles.active : ""
                }`}
                onClick={() => setActiveTab("마이 페이지")}>
                마이 페이지
                <div className={styles.tabIndicator}></div>
              </button>
            </div>
          </div>

          {/* Right Section - Login Button */}
          <div className={styles.rightSection}>
            <Button
              hiraki="quaternary"
              size="s"
              position="enabled"
              rightIcon={
                <Image
                  src="/icons/right_icon.svg"
                  alt="login"
                  width={24}
                  height={24}
                />
              }
              className={styles.loginButton}>
              로그인
            </Button>
          </div>
        </div>
      </nav>

      {/* Banner 영역 */}
      <section className={styles.banner}>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          className={styles.bannerSwiper}>
          <SwiperSlide>
            <Image
              src="/images/banner1.png"
              alt="Banner 1"
              width={1920}
              height={516}
              priority
              className={styles.bannerImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/banner2.png"
              alt="Banner 2"
              width={1920}
              height={516}
              className={styles.bannerImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/images/banner3.png"
              alt="Banner 3"
              width={1920}
              height={516}
              className={styles.bannerImage}
            />
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Gap 영역 */}
      <div className={styles.gap}></div>

      {/* Main Content 영역 */}
      <main className={styles.mainContent}>
        <div className={styles.contentWrapper}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
