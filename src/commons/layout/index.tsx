import React from "react";
import styles from "./styles.module.css";

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
  return (
    <div className={styles.layout}>
      {/* Navigation 영역 */}
      <nav className={styles.navigation}>
        <div className={styles.navigationContent}>
          {/* Navigation content will be added here */}
        </div>
      </nav>

      {/* Banner 영역 */}
      <section className={styles.banner}>
        <div className={styles.bannerContent}>
          {/* Banner content will be added here */}
        </div>
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
