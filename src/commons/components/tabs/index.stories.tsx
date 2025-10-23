import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Tabs } from "./index";

/**
 * Tabs Component Stories
 *
 * 다양한 variant를 지원하는 탭 컴포넌트의 Storybook 문서
 * - 4가지 position (primary-black, secondary, side, primary-white)
 * - 2가지 size (s, m)
 * - 2가지 selected 상태 (on, off)
 */
const meta = {
  title: "Commons/Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "다양한 위치(position)와 크기(size)를 지원하는 범용 탭 컴포넌트입니다. primary-black부터 side까지 4가지 스타일과 s부터 m까지 2가지 크기를 조합하여 사용할 수 있습니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "select",
      options: ["primary-black", "secondary", "side", "primary-white"],
      description: "탭의 위치/스타일 variant",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "secondary" },
      },
    },
    size: {
      control: "select",
      options: ["s", "m"],
      description: "탭 크기",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "m" },
      },
    },
    selected: {
      control: "select",
      options: ["on", "off"],
      description: "선택된 상태",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "off" },
      },
    },
    disabled: {
      control: "boolean",
      description: "비활성화 상태",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    children: {
      control: "text",
      description: "탭 텍스트 내용",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    onClick: {
      description: "클릭 이벤트 핸들러",
      action: "clicked",
      table: {
        type: { summary: "() => void" },
      },
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// Primary Black 탭들
// ============================================

export const PrimaryBlackSmall: Story = {
  args: {
    position: "primary-black",
    size: "s",
    selected: "off",
    children: "탭",
  },
};

export const PrimaryBlackMedium: Story = {
  args: {
    position: "primary-black",
    size: "m",
    selected: "off",
    children: "탭",
  },
};

export const PrimaryBlackSelected: Story = {
  args: {
    position: "primary-black",
    size: "m",
    selected: "on",
    children: "탭",
  },
};

export const PrimaryBlackDisabled: Story = {
  args: {
    position: "primary-black",
    size: "m",
    selected: "off",
    disabled: true,
    children: "탭",
  },
};

// ============================================
// Primary White 탭들
// ============================================

export const PrimaryWhiteSmall: Story = {
  args: {
    position: "primary-white",
    size: "s",
    selected: "off",
    children: "탭",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: "#333333",
          padding: "20px",
          borderRadius: "8px",
        }}>
        <Story />
      </div>
    ),
  ],
};

export const PrimaryWhiteMedium: Story = {
  args: {
    position: "primary-white",
    size: "m",
    selected: "off",
    children: "탭",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: "#333333",
          padding: "20px",
          borderRadius: "8px",
        }}>
        <Story />
      </div>
    ),
  ],
};

export const PrimaryWhiteSelected: Story = {
  args: {
    position: "primary-white",
    size: "m",
    selected: "on",
    children: "탭",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: "#333333",
          padding: "20px",
          borderRadius: "8px",
        }}>
        <Story />
      </div>
    ),
  ],
};

export const PrimaryWhiteDisabled: Story = {
  args: {
    position: "primary-white",
    size: "m",
    selected: "off",
    disabled: true,
    children: "탭",
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: "#333333",
          padding: "20px",
          borderRadius: "8px",
        }}>
        <Story />
      </div>
    ),
  ],
};

// ============================================
// Secondary 탭들
// ============================================

export const SecondarySmall: Story = {
  args: {
    position: "secondary",
    size: "s",
    selected: "off",
    children: "탭",
  },
};

export const SecondaryMedium: Story = {
  args: {
    position: "secondary",
    size: "m",
    selected: "off",
    children: "탭",
  },
};

export const SecondarySelected: Story = {
  args: {
    position: "secondary",
    size: "m",
    selected: "on",
    children: "탭",
  },
};

export const SecondaryDisabled: Story = {
  args: {
    position: "secondary",
    size: "m",
    selected: "off",
    disabled: true,
    children: "탭",
  },
};

// ============================================
// Side 탭들
// ============================================

export const SideSmall: Story = {
  args: {
    position: "side",
    size: "s",
    selected: "off",
    children: "탭",
  },
};

export const SideMedium: Story = {
  args: {
    position: "side",
    size: "m",
    selected: "off",
    children: "탭",
  },
};

export const SideSelected: Story = {
  args: {
    position: "side",
    size: "m",
    selected: "on",
    children: "탭",
  },
};

export const SideDisabled: Story = {
  args: {
    position: "side",
    size: "m",
    selected: "off",
    disabled: true,
    children: "탭",
  },
};

// ============================================
// 전체 Variant 미리보기
// ============================================

export const AllVariants: Story = {
  args: {
    position: "secondary",
    size: "m",
    selected: "off",
    children: "탭",
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      {(["primary-black", "secondary", "side", "primary-white"] as const).map(
        (position) => (
          <div key={position}>
            <h3 style={{ marginBottom: "16px", textTransform: "capitalize" }}>
              {position.replace("-", " ")}
            </h3>
            <div
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                flexWrap: "wrap",
              }}>
              <Tabs position={position} size="s" selected="off">
                Small
              </Tabs>
              <Tabs position={position} size="m" selected="off">
                Medium
              </Tabs>
              <Tabs position={position} size="m" selected="on">
                Selected
              </Tabs>
              <Tabs position={position} size="m" selected="off" disabled>
                Disabled
              </Tabs>
            </div>
          </div>
        )
      )}
    </div>
  ),
  decorators: [
    (Story) => (
      <div style={{ padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
};

// ============================================
// 탭 그룹 예시
// ============================================

export const TabGroup: Story = {
  args: {
    position: "secondary",
    size: "m",
    selected: "off",
    children: "탭",
  },
  render: () => (
    <div style={{ display: "flex", gap: "8px" }}>
      <Tabs position="secondary" size="m" selected="on">
        첫 번째
      </Tabs>
      <Tabs position="secondary" size="m" selected="off">
        두 번째
      </Tabs>
      <Tabs position="secondary" size="m" selected="off">
        세 번째
      </Tabs>
    </div>
  ),
};

export const SideTabGroup: Story = {
  args: {
    position: "side",
    size: "m",
    selected: "off",
    children: "탭",
  },
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        width: "232px",
      }}>
      <Tabs position="side" size="m" selected="on">
        첫 번째 탭
      </Tabs>
      <Tabs position="side" size="m" selected="off">
        두 번째 탭
      </Tabs>
      <Tabs position="side" size="m" selected="off">
        세 번째 탭
      </Tabs>
    </div>
  ),
};
