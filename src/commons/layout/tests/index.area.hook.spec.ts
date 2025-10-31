import { test, expect } from "@playwright/test";

/**
 * Layout 영역 노출 여부 테스트
 * TDD 기반으로 구현된 테스트
 * url.ts의 URL_METADATA에 정의된 경로에 따라 navigation과 banner 영역의 노출 여부를 검증
 */
test.describe("Layout Area Visibility", () => {
  test("게시판 목록(/boards) 페이지에서 navigation과 banner가 모두 노출되어야 함", async ({
    page,
  }) => {
    await page.goto("/boards");
    await page.waitForSelector('[data-testid="layout"]', { timeout: 500 });

    // navigation 영역이 존재하는지 확인
    const navigation = page.locator('[data-testid="navigation-area"]');
    await expect(navigation).toBeVisible();

    // banner 영역이 존재하는지 확인
    const banner = page.locator('[data-testid="banner-area"]');
    await expect(banner).toBeVisible();
  });

  test("게시판 작성(/boards/new) 페이지에서 navigation은 노출되고 banner는 노출되지 않아야 함", async ({
    page,
  }) => {
    await page.goto("/boards/new");
    await page.waitForSelector('[data-testid="layout"]', { timeout: 500 });

    // navigation 영역이 존재하는지 확인
    const navigation = page.locator('[data-testid="navigation-area"]');
    await expect(navigation).toBeVisible();

    // banner 영역이 존재하지 않는지 확인
    const banner = page.locator('[data-testid="banner-area"]');
    await expect(banner).not.toBeVisible();
  });

  test("게시판 상세(/boards/[id]) 페이지에서 navigation과 banner가 모두 노출되어야 함", async ({
    page,
  }) => {
    await page.goto("/boards/1");
    await page.waitForSelector('[data-testid="layout"]', { timeout: 500 });

    // navigation 영역이 존재하는지 확인
    const navigation = page.locator('[data-testid="navigation-area"]');
    await expect(navigation).toBeVisible();

    // banner 영역이 존재하는지 확인
    const banner = page.locator('[data-testid="banner-area"]');
    await expect(banner).toBeVisible();
  });

  test.skip("로그인(/auth/signin) 페이지에서 navigation과 banner가 모두 노출되지 않아야 함", async ({
    page,
  }) => {
    await page.goto("/auth/signin");
    await page.waitForSelector('[data-testid="layout"]', { timeout: 500 });

    // navigation 영역이 존재하지 않는지 확인
    const navigation = page.locator('[data-testid="navigation-area"]');
    await expect(navigation).not.toBeVisible();

    // banner 영역이 존재하지 않는지 확인
    const banner = page.locator('[data-testid="banner-area"]');
    await expect(banner).not.toBeVisible();
  });

  test.skip("회원가입(/auth/signup) 페이지에서 navigation과 banner가 모두 노출되지 않아야 함", async ({
    page,
  }) => {
    await page.goto("/auth/signup");
    await page.waitForSelector('[data-testid="layout"]', { timeout: 500 });

    // navigation 영역이 존재하지 않는지 확인
    const navigation = page.locator('[data-testid="navigation-area"]');
    await expect(navigation).not.toBeVisible();

    // banner 영역이 존재하지 않는지 확인
    const banner = page.locator('[data-testid="banner-area"]');
    await expect(banner).not.toBeVisible();
  });
});
