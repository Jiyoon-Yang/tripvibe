/**
 * Typography Constants
 * 프로젝트 전체에서 사용되는 타이포그래피 토큰
 * Figma Foundation에서 추출된 타이포그래피 시스템
 */

/**
 * Font Family
 * 한글(Pretendard)과 영문 폰트를 분리하여 관리
 */
export const FONT_FAMILY = {
  // 한글 폰트
  ko: {
    pretendard: "Pretendard, -apple-system, BlinkMacSystemFont, sans-serif",
    pretendardVariable:
      "Pretendard Variable, -apple-system, BlinkMacSystemFont, sans-serif",
  },
  // 영문 폰트 (추후 다른 값 사용 가능)
  en: {
    pretendard: "Pretendard, -apple-system, BlinkMacSystemFont, sans-serif",
    pretendardVariable:
      "Pretendard Variable, -apple-system, BlinkMacSystemFont, sans-serif",
  },
} as const;

/**
 * Font Weight
 */
export const FONT_WEIGHT = {
  bold: 700,
  semiBold: 600,
  medium: 500,
  regular: 400,
  light: 300,
} as const;

/**
 * Font Size (px 단위)
 */
export const FONT_SIZE = {
  xs: 11,
  sm: 12,
  base: 13,
  md: 14,
  lg: 16,
  xl: 18,
  "2xl": 20,
  "3xl": 24,
  "4xl": 28,
} as const;

/**
 * Line Height (px 단위)
 */
export const LINE_HEIGHT = {
  xs: 12,
  sm: 20,
  base: 24,
  md: 28,
  lg: 32,
  xl: 36,
} as const;

/**
 * Paragraph Spacing (px 단위)
 */
export const PARAGRAPH_SPACING = {
  none: 0,
} as const;

/**
 * Paragraph Indent (px 단위)
 */
export const PARAGRAPH_INDENT = {
  none: 0,
} as const;

/**
 * Typography Preset
 * 모바일과 데스크톱에서 사용할 수 있는 프리셋
 */
export const TYPOGRAPHY_PRESET = {
  // 모바일
  mobile: {
    h1: {
      fontSize: FONT_SIZE["4xl"],
      lineHeight: LINE_HEIGHT.xl,
      fontWeight: FONT_WEIGHT.bold,
      fontFamily: FONT_FAMILY.ko.pretendardVariable,
    },
    h2: {
      fontSize: FONT_SIZE["3xl"],
      lineHeight: LINE_HEIGHT.lg,
      fontWeight: FONT_WEIGHT.bold,
      fontFamily: FONT_FAMILY.ko.pretendardVariable,
    },
    h3: {
      fontSize: FONT_SIZE["2xl"],
      lineHeight: LINE_HEIGHT.md,
      fontWeight: FONT_WEIGHT.semiBold,
      fontFamily: FONT_FAMILY.ko.pretendardVariable,
    },
    h4: {
      fontSize: FONT_SIZE.xl,
      lineHeight: LINE_HEIGHT.base,
      fontWeight: FONT_WEIGHT.semiBold,
      fontFamily: FONT_FAMILY.ko.pretendardVariable,
    },
    body1: {
      fontSize: FONT_SIZE.lg,
      lineHeight: LINE_HEIGHT.base,
      fontWeight: FONT_WEIGHT.regular,
      fontFamily: FONT_FAMILY.ko.pretendardVariable,
    },
    body2: {
      fontSize: FONT_SIZE.md,
      lineHeight: LINE_HEIGHT.sm,
      fontWeight: FONT_WEIGHT.regular,
      fontFamily: FONT_FAMILY.ko.pretendardVariable,
    },
    caption: {
      fontSize: FONT_SIZE.sm,
      lineHeight: LINE_HEIGHT.sm,
      fontWeight: FONT_WEIGHT.regular,
      fontFamily: FONT_FAMILY.ko.pretendardVariable,
    },
    overline: {
      fontSize: FONT_SIZE.xs,
      lineHeight: LINE_HEIGHT.xs,
      fontWeight: FONT_WEIGHT.medium,
      fontFamily: FONT_FAMILY.ko.pretendardVariable,
    },
  },
  // 데스크톱
  desktop: {
    h1: {
      fontSize: FONT_SIZE["4xl"],
      lineHeight: LINE_HEIGHT.xl,
      fontWeight: FONT_WEIGHT.bold,
      fontFamily: FONT_FAMILY.ko.pretendardVariable,
    },
    h2: {
      fontSize: FONT_SIZE["3xl"],
      lineHeight: LINE_HEIGHT.lg,
      fontWeight: FONT_WEIGHT.bold,
      fontFamily: FONT_FAMILY.ko.pretendardVariable,
    },
    h3: {
      fontSize: FONT_SIZE["2xl"],
      lineHeight: LINE_HEIGHT.md,
      fontWeight: FONT_WEIGHT.semiBold,
      fontFamily: FONT_FAMILY.ko.pretendardVariable,
    },
    h4: {
      fontSize: FONT_SIZE.xl,
      lineHeight: LINE_HEIGHT.base,
      fontWeight: FONT_WEIGHT.semiBold,
      fontFamily: FONT_FAMILY.ko.pretendardVariable,
    },
    body1: {
      fontSize: FONT_SIZE.lg,
      lineHeight: LINE_HEIGHT.base,
      fontWeight: FONT_WEIGHT.regular,
      fontFamily: FONT_FAMILY.ko.pretendardVariable,
    },
    body2: {
      fontSize: FONT_SIZE.md,
      lineHeight: LINE_HEIGHT.sm,
      fontWeight: FONT_WEIGHT.regular,
      fontFamily: FONT_FAMILY.ko.pretendardVariable,
    },
    caption: {
      fontSize: FONT_SIZE.sm,
      lineHeight: LINE_HEIGHT.sm,
      fontWeight: FONT_WEIGHT.regular,
      fontFamily: FONT_FAMILY.ko.pretendardVariable,
    },
    overline: {
      fontSize: FONT_SIZE.xs,
      lineHeight: LINE_HEIGHT.xs,
      fontWeight: FONT_WEIGHT.medium,
      fontFamily: FONT_FAMILY.ko.pretendardVariable,
    },
  },
} as const;

/**
 * Typography Helper Function
 * 타이포그래피 스타일을 CSS 문자열로 변환
 */
export const getTypographyStyle = (
  preset: keyof typeof TYPOGRAPHY_PRESET.mobile,
  device: "mobile" | "desktop" = "mobile"
) => {
  const style = TYPOGRAPHY_PRESET[device][preset];
  return {
    fontSize: `${style.fontSize}px`,
    lineHeight: `${style.lineHeight}px`,
    fontWeight: style.fontWeight,
    fontFamily: style.fontFamily,
  };
};

// Type exports for TypeScript
export type FontFamilyLocale = keyof typeof FONT_FAMILY;
export type FontFamilyType = keyof (typeof FONT_FAMILY)["ko"];
export type FontWeightType = keyof typeof FONT_WEIGHT;
export type FontSizeType = keyof typeof FONT_SIZE;
export type LineHeightType = keyof typeof LINE_HEIGHT;
export type TypographyPresetType = keyof typeof TYPOGRAPHY_PRESET.mobile;
export type DeviceType = "mobile" | "desktop";
