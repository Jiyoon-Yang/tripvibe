import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import React from "react";
import { Tooltip } from "./index";

/**
 * Tooltip Component Stories
 *
 * 툴팁 UI 컴포넌트의 Storybook 문서
 * - 2가지 size (s, m)
 * - 다양한 텍스트 길이별 variant
 */
const meta = {
  title: "Commons/Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "정보를 표시하는 툴팁 컴포넌트입니다. Figma 디자인을 기반으로 s와 m 두 가지 크기를 제공합니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["s", "m"],
      description: "툴팁 크기",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "m" },
      },
    },
    children: {
      control: "text",
      description: "툴팁 텍스트 내용",
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
    className: {
      control: "text",
      description: "추가 클래스명",
      table: {
        type: { summary: "string" },
      },
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// Size 별 기본 스토리
// ============================================

export const Small: Story = {
  args: {
    size: "s",
    children: "툴팁 텍스트",
  },
};

export const Medium: Story = {
  args: {
    size: "m",
    children: "툴팁 텍스트",
  },
};

// ============================================
// 텍스트 길이별 스토리
// ============================================

export const ShortText: Story = {
  args: {
    size: "m",
    children: "짧은 텍스트",
  },
};

export const MediumText: Story = {
  args: {
    size: "m",
    children: "중간 길이의 툴팁 텍스트입니다",
  },
};

export const LongText: Story = {
  args: {
    size: "m",
    children:
      "긴 텍스트를 포함하는 툴팁입니다. 이렇게 긴 텍스트도 잘 표시됩니다.",
  },
};

// ============================================
// 전체 Variant 미리보기
// ============================================

export const AllVariants: Story = {
  args: {
    size: "m",
    children: "툴팁 텍스트",
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      {/* Size: s */}
      <div>
        <h3
          style={{
            marginBottom: "16px",
            fontSize: "18px",
            fontWeight: "bold",
          }}>
          Size: s
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ width: "150px", fontSize: "14px" }}>
              짧은 텍스트:
            </span>
            <Tooltip size="s">짧은 텍스트</Tooltip>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ width: "150px", fontSize: "14px" }}>
              중간 텍스트:
            </span>
            <Tooltip size="s">중간 길이의 툴팁 텍스트입니다</Tooltip>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ width: "150px", fontSize: "14px" }}>긴 텍스트:</span>
            <Tooltip size="s">
              긴 텍스트를 포함하는 툴팁입니다. 이렇게 긴 텍스트도 잘 표시됩니다.
            </Tooltip>
          </div>
        </div>
      </div>

      {/* Size: m */}
      <div>
        <h3
          style={{
            marginBottom: "16px",
            fontSize: "18px",
            fontWeight: "bold",
          }}>
          Size: m
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ width: "150px", fontSize: "14px" }}>
              짧은 텍스트:
            </span>
            <Tooltip size="m">짧은 텍스트</Tooltip>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ width: "150px", fontSize: "14px" }}>
              중간 텍스트:
            </span>
            <Tooltip size="m">중간 길이의 툴팁 텍스트입니다</Tooltip>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ width: "150px", fontSize: "14px" }}>긴 텍스트:</span>
            <Tooltip size="m">
              긴 텍스트를 포함하는 툴팁입니다. 이렇게 긴 텍스트도 잘 표시됩니다.
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  ),
};

// ============================================
// 실전 사용 예제
// ============================================

export const WithButton: Story = {
  args: {
    size: "m",
    children: "버튼에 마우스를 올려보세요",
  },
  render: function TooltipExample(args) {
    const [isVisible, setIsVisible] = React.useState(false);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "center",
        }}>
        <div style={{ position: "relative" }}>
          <button
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            style={{
              padding: "12px 24px",
              fontSize: "16px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              background: "#fff",
              cursor: "pointer",
            }}>
            버튼 위에 마우스 올리기
          </button>
          {isVisible && (
            <div
              style={{
                position: "absolute",
                top: "calc(100% + 8px)",
                left: "50%",
                transform: "translateX(-50%)",
              }}>
              <Tooltip {...args} />
            </div>
          )}
        </div>
      </div>
    );
  },
};

// ============================================
// 다양한 위치 예제
// ============================================

export const Positions: Story = {
  args: {
    size: "m",
    children: "툴팁 텍스트",
  },
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "80px",
        alignItems: "center",
        padding: "40px",
      }}>
      {/* 위쪽 */}
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            bottom: "calc(100% + 8px)",
            left: "50%",
            transform: "translateX(-50%)",
          }}>
          <Tooltip size="m">위쪽 툴팁</Tooltip>
        </div>
        <div
          style={{
            padding: "12px 24px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}>
          위쪽 툴팁
        </div>
      </div>

      {/* 아래쪽 */}
      <div style={{ position: "relative" }}>
        <div
          style={{
            padding: "12px 24px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}>
          아래쪽 툴팁
        </div>
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            left: "50%",
            transform: "translateX(-50%)",
          }}>
          <Tooltip size="m">아래쪽 툴팁</Tooltip>
        </div>
      </div>

      {/* 왼쪽 */}
      <div style={{ position: "relative", display: "flex", gap: "8px" }}>
        <Tooltip size="m">왼쪽 툴팁</Tooltip>
        <div
          style={{
            padding: "12px 24px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}>
          왼쪽 툴팁
        </div>
      </div>

      {/* 오른쪽 */}
      <div style={{ position: "relative", display: "flex", gap: "8px" }}>
        <div
          style={{
            padding: "12px 24px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}>
          오른쪽 툴팁
        </div>
        <Tooltip size="m">오른쪽 툴팁</Tooltip>
      </div>
    </div>
  ),
};

// ============================================
// Size 비교
// ============================================

export const SizeComparison: Story = {
  args: {
    size: "m",
    children: "동일한 텍스트",
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <div>
        <h4 style={{ marginBottom: "12px", fontSize: "14px", color: "#666" }}>
          Small (s)
        </h4>
        <Tooltip size="s">동일한 텍스트</Tooltip>
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", fontSize: "14px", color: "#666" }}>
          Medium (m)
        </h4>
        <Tooltip size="m">동일한 텍스트</Tooltip>
      </div>
    </div>
  ),
};

// ============================================
// 실용적인 메시지 예제
// ============================================

export const PracticalMessages: Story = {
  args: {
    size: "m",
    children: "툴팁 텍스트",
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Tooltip size="m">저장되었습니다</Tooltip>
      <Tooltip size="m">삭제되었습니다</Tooltip>
      <Tooltip size="m">오류가 발생했습니다</Tooltip>
      <Tooltip size="m">필수 입력 항목입니다</Tooltip>
      <Tooltip size="m">최소 8자 이상 입력해주세요</Tooltip>
      <Tooltip size="m">이메일 형식이 올바르지 않습니다</Tooltip>
      <Tooltip size="m">비밀번호가 일치하지 않습니다</Tooltip>
    </div>
  ),
};
