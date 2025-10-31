import { test, expect } from "@playwright/test";

/**
 * Layout 네비게이션 링크 라우팅 테스트
 * TDD 기반으로 구현된 테스트
 */
test.describe("Layout Navigation Routing", () => {
  test.beforeEach(async ({ page }) => {
    // 기본 페이지로 이동 (navigation이 표시되는 페이지)
    await page.goto("/boards");

    // 페이지가 완전히 로드될 때까지 대기 (data-testid 사용)
    await page.waitForSelector('[data-testid="layout"]', { timeout: 500 });
    await page.waitForSelector('[data-testid="navigation-area"]', {
      timeout: 500,
    });
  });

  test("로고 클릭 시 게시판 목록 페이지(/boards)로 이동해야 함", async ({
    page,
  }) => {
    // 로고 요소 클릭
    await page.click('[data-testid="nav-logo"]');

    // URL이 /boards로 변경되고 페이지가 로드될 때까지 대기
    await page.waitForURL("/boards");
    await expect(page).toHaveURL("/boards");
  });

  test("트립토크 클릭 시 게시판 목록 페이지(/boards)로 이동해야 함", async ({
    page,
  }) => {
    // 트립토크 버튼 클릭
    await page.click('[data-testid="nav-trip-talk"]');

    // URL이 /boards로 변경되고 페이지가 로드될 때까지 대기
    await page.waitForURL("/boards");
    await expect(page).toHaveURL("/boards");
  });

  test("로그인 클릭 시 로그인 페이지(/auth/signin)로 이동해야 함", async ({
    page,
  }) => {
    // 로그인 버튼 클릭
    await page.click('[data-testid="nav-login"]');

    // URL이 /auth/signin으로 변경되고 페이지가 로드될 때까지 대기
    await page.waitForURL("/auth/signin");
    await expect(page).toHaveURL("/auth/signin");
  });
});
