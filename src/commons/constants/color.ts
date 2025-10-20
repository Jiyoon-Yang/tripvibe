/**
 * Color Constants
 * 프로젝트 전체에서 사용되는 색상 토큰
 * Figma Foundation에서 추출된 색상 시스템
 */

export const COLORS = {
  // Gray Scale
  gray: {
    w: "#ffffff",
    50: "#f2f2f2",
    100: "#e4e4e4",
    200: "#d4d3d3",
    300: "#c7c7c7",
    400: "#ababab",
    500: "#919191",
    600: "#777777",
    700: "#5f5f5f",
    800: "#333333",
    900: "#1c1c1c",
    b: "#000000",
  },

  // Blue Scale
  blue: {
    light: "#eaf1fc",
    lightHover: "#dfeafb",
    lightActive: "#bdd4f7",
    normal: "#2974e5",
    normalHover: "#2568ce",
    normalActive: "#215db7",
    dark: "#1f57ac",
    darkHover: "#194689",
    darkActive: "#123467",
    darker: "#0e2950",
  },

  // Red Scale
  red: {
    light: "#fef0f0",
    lightHover: "#fee9e9",
    lightActive: "#fcd1d1",
    normal: "#f66a6a",
    normalHover: "#dd5f5f",
    normalActive: "#c55555",
    dark: "#b95050",
    darkHover: "#944040",
    darkActive: "#6f3030",
    darker: "#562525",
  },
} as const;

/**
 * RGBA 형식의 색상 상수
 */
export const COLORS_RGBA = {
  // Gray Scale
  gray: {
    w: "rgba(255, 255, 255, 1)",
    50: "rgba(242, 242, 242, 1)",
    100: "rgba(228, 228, 228, 1)",
    200: "rgba(212, 211, 211, 1)",
    300: "rgba(199, 199, 199, 1)",
    400: "rgba(171, 171, 171, 1)",
    500: "rgba(145, 145, 145, 1)",
    600: "rgba(119, 119, 119, 1)",
    700: "rgba(95, 95, 95, 1)",
    800: "rgba(51, 51, 51, 1)",
    900: "rgba(28, 28, 28, 1)",
    b: "rgba(0, 0, 0, 1)",
  },

  // Blue Scale
  blue: {
    light: "rgba(234, 241, 252, 1)",
    lightHover: "rgba(223, 234, 251, 1)",
    lightActive: "rgba(189, 212, 247, 1)",
    normal: "rgba(41, 116, 229, 1)",
    normalHover: "rgba(37, 104, 206, 1)",
    normalActive: "rgba(33, 93, 183, 1)",
    dark: "rgba(31, 87, 172, 1)",
    darkHover: "rgba(25, 70, 137, 1)",
    darkActive: "rgba(18, 52, 103, 1)",
    darker: "rgba(14, 41, 80, 1)",
  },

  // Red Scale
  red: {
    light: "rgba(254, 240, 240, 1)",
    lightHover: "rgba(254, 233, 233, 1)",
    lightActive: "rgba(252, 209, 209, 1)",
    normal: "rgba(246, 106, 106, 1)",
    normalHover: "rgba(221, 95, 95, 1)",
    normalActive: "rgba(197, 85, 85, 1)",
    dark: "rgba(185, 80, 80, 1)",
    darkHover: "rgba(148, 64, 64, 1)",
    darkActive: "rgba(111, 48, 48, 1)",
    darker: "rgba(86, 37, 37, 1)",
  },
} as const;

// Type exports for TypeScript
export type ColorScale = keyof typeof COLORS;
export type GrayScale = keyof typeof COLORS.gray;
export type BlueScale = keyof typeof COLORS.blue;
export type RedScale = keyof typeof COLORS.red;
