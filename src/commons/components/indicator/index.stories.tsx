// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Indicator } from "./index";

/**
 * Indicator Component Stories
 *
 * 페이지네이션이나 캐러셀 등에서 사용되는 Indicator 컴포넌트의 Storybook 문서
 * - 2가지 size (s, m)
 * - 활성화된 점은 불투명, 나머지는 80% 투명도
 */
const meta = {
  title: "Commons/Components/Indicator",
  component: Indicator,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "페이지네이션이나 캐러셀 등에서 현재 위치를 표시하는 Indicator 컴포넌트입니다. s와 m 두 가지 크기를 지원하며, 활성화된 점은 불투명하고 나머지는 80% 투명도로 표시됩니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["s", "m"],
      description: "Indicator 크기",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "m" },
      },
    },
    total: {
      control: { type: "number", min: 1, max: 10 },
      description: "전체 아이템 개수",
      table: {
        type: { summary: "number" },
      },
    },
    current: {
      control: { type: "number", min: 0, max: 9 },
      description: "현재 활성화된 인덱스 (0부터 시작)",
      table: {
        type: { summary: "number" },
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
} satisfies Meta<typeof Indicator>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// Size 별 기본 스토리
// ============================================

export const Small: Story = {
  args: {
    size: "s",
    total: 5,
    current: 0,
  },
};

export const Medium: Story = {
  args: {
    size: "m",
    total: 5,
    current: 0,
  },
};

// ============================================
// 아이템 개수별 스토리
// ============================================

export const ThreeItems: Story = {
  args: {
    size: "m",
    total: 3,
    current: 1,
  },
};

export const FiveItems: Story = {
  args: {
    size: "m",
    total: 5,
    current: 2,
  },
};

export const SevenItems: Story = {
  args: {
    size: "m",
    total: 7,
    current: 3,
  },
};

export const TenItems: Story = {
  args: {
    size: "m",
    total: 10,
    current: 5,
  },
};

// ============================================
// 현재 위치별 스토리
// ============================================

export const FirstPosition: Story = {
  args: {
    size: "m",
    total: 5,
    current: 0,
  },
};

export const MiddlePosition: Story = {
  args: {
    size: "m",
    total: 5,
    current: 2,
  },
};

export const LastPosition: Story = {
  args: {
    size: "m",
    total: 5,
    current: 4,
  },
};

// ============================================
// 인터랙티브 예제
// ============================================

export const Interactive: Story = {
  args: {
    size: "m",
    total: 5,
    current: 0,
  },
  render: function InteractiveIndicator(args) {
    const [current, setCurrent] = React.useState(args.current);

    React.useEffect(() => {
      setCurrent(args.current);
    }, [args.current]);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          alignItems: "center",
        }}>
        <Indicator {...args} current={current} />
        <div style={{ display: "flex", gap: "8px" }}>
          <button
            onClick={() => setCurrent((prev) => Math.max(0, prev - 1))}
            disabled={current === 0}
            style={{
              padding: "8px 16px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              background: current === 0 ? "#f0f0f0" : "#fff",
              cursor: current === 0 ? "not-allowed" : "pointer",
            }}>
            이전
          </button>
          <button
            onClick={() =>
              setCurrent((prev) => Math.min(args.total - 1, prev + 1))
            }
            disabled={current === args.total - 1}
            style={{
              padding: "8px 16px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              background: current === args.total - 1 ? "#f0f0f0" : "#fff",
              cursor: current === args.total - 1 ? "not-allowed" : "pointer",
            }}>
            다음
          </button>
        </div>
      </div>
    );
  },
};

// ============================================
// 전체 Variant 미리보기
// ============================================

export const AllVariants: Story = {
  args: {
    size: "m",
    total: 5,
    current: 2,
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      {(["s", "m"] as const).map((size) => (
        <div key={size}>
          <h3 style={{ marginBottom: "16px", textTransform: "capitalize" }}>
            Size: {size}
          </h3>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[3, 5, 7].map((total) => (
              <div
                key={total}
                style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span style={{ width: "80px", fontSize: "14px" }}>
                  {total} items:
                </span>
                <Indicator
                  size={size}
                  total={total}
                  current={Math.floor(total / 2)}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

// ============================================
// 캐러셀 사용 예제
// ============================================

export const CarouselExample: Story = {
  args: {
    size: "m",
    total: 4,
    current: 0,
  },
  render: function CarouselExample(args) {
    const [current, setCurrent] = React.useState(0);
    const items = ["슬라이드 1", "슬라이드 2", "슬라이드 3", "슬라이드 4"];

    React.useEffect(() => {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % items.length);
      }, 3000);

      return () => clearInterval(interval);
    }, [items.length]);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "center",
        }}>
        <div
          style={{
            width: "300px",
            height: "200px",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "24px",
            fontWeight: "bold",
          }}>
          {items[current]}
        </div>
        <Indicator {...args} total={items.length} current={current} />
      </div>
    );
  },
};
