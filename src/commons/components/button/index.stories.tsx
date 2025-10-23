import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./index";

/**
 * Button Component Stories
 *
 * 다양한 variant를 지원하는 버튼 컴포넌트의 Storybook 문서
 * - 5가지 hiraki (primary, secondary, tertiary, quaternary, ghost)
 * - 3가지 size (xs, s, m)
 * - 2가지 position (enabled, disabled)
 */
const meta = {
  title: "Commons/Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "다양한 계층(hiraki)과 크기(size)를 지원하는 범용 버튼 컴포넌트입니다. primary부터 ghost까지 5가지 스타일과 xs부터 m까지 3가지 크기를 조합하여 사용할 수 있습니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    hiraki: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "quaternary", "ghost"],
      description: "버튼의 계층 스타일",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      control: "select",
      options: ["s", "m", "xs"],
      description: "버튼 크기",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "m" },
      },
    },
    position: {
      control: "select",
      options: ["enabled", "disabled"],
      description: "버튼 활성화 상태",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "enabled" },
      },
    },
    fullWidth: {
      control: "boolean",
      description: "전체 너비 사용 여부",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    children: {
      control: "text",
      description: "버튼 텍스트",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    leftIcon: {
      description: "왼쪽 아이콘",
      table: {
        type: { summary: "ReactNode" },
      },
    },
    rightIcon: {
      description: "오른쪽 아이콘",
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// Primary 버튼들
// ============================================

export const PrimarySmall: Story = {
  args: {
    hiraki: "primary",
    size: "s",
    position: "enabled",
    children: "버튼",
  },
};

export const PrimaryMedium: Story = {
  args: {
    hiraki: "primary",
    size: "m",
    position: "enabled",
    children: "버튼",
  },
};

export const PrimaryExtraSmall: Story = {
  args: {
    hiraki: "primary",
    size: "xs",
    position: "enabled",
    children: "버튼",
  },
};

export const PrimaryDisabled: Story = {
  args: {
    hiraki: "primary",
    size: "m",
    position: "disabled",
    children: "버튼",
  },
};

// ============================================
// Secondary 버튼들
// ============================================

export const SecondarySmall: Story = {
  args: {
    hiraki: "secondary",
    size: "s",
    position: "enabled",
    children: "버튼",
  },
};

export const SecondaryMedium: Story = {
  args: {
    hiraki: "secondary",
    size: "m",
    position: "enabled",
    children: "버튼",
  },
};

export const SecondaryExtraSmall: Story = {
  args: {
    hiraki: "secondary",
    size: "xs",
    position: "enabled",
    children: "버튼",
  },
};

export const SecondaryDisabled: Story = {
  args: {
    hiraki: "secondary",
    size: "m",
    position: "disabled",
    children: "버튼",
  },
};

// ============================================
// Tertiary 버튼들
// ============================================

export const TertiarySmall: Story = {
  args: {
    hiraki: "tertiary",
    size: "s",
    position: "enabled",
    children: "버튼",
  },
};

export const TertiaryMedium: Story = {
  args: {
    hiraki: "tertiary",
    size: "m",
    position: "enabled",
    children: "버튼",
  },
};

export const TertiaryExtraSmall: Story = {
  args: {
    hiraki: "tertiary",
    size: "xs",
    position: "enabled",
    children: "버튼",
  },
};

export const TertiaryDisabled: Story = {
  args: {
    hiraki: "tertiary",
    size: "m",
    position: "disabled",
    children: "버튼",
  },
};

// ============================================
// Quaternary 버튼들
// ============================================

export const QuaternarySmall: Story = {
  args: {
    hiraki: "quaternary",
    size: "s",
    position: "enabled",
    children: "버튼",
  },
};

export const QuaternaryMedium: Story = {
  args: {
    hiraki: "quaternary",
    size: "m",
    position: "enabled",
    children: "버튼",
  },
};

export const QuaternaryExtraSmall: Story = {
  args: {
    hiraki: "quaternary",
    size: "xs",
    position: "enabled",
    children: "버튼",
  },
};

export const QuaternaryDisabled: Story = {
  args: {
    hiraki: "quaternary",
    size: "m",
    position: "disabled",
    children: "버튼",
  },
};

// ============================================
// Ghost 버튼들
// ============================================

export const GhostSmall: Story = {
  args: {
    hiraki: "ghost",
    size: "s",
    position: "enabled",
    children: "버튼",
  },
};

export const GhostMedium: Story = {
  args: {
    hiraki: "ghost",
    size: "m",
    position: "enabled",
    children: "버튼",
  },
};

export const GhostExtraSmall: Story = {
  args: {
    hiraki: "ghost",
    size: "xs",
    position: "enabled",
    children: "버튼",
  },
};

export const GhostDisabled: Story = {
  args: {
    hiraki: "ghost",
    size: "m",
    position: "disabled",
    children: "버튼",
  },
};

// ============================================
// 아이콘 버튼들
// ============================================

export const WithLeftIcon: Story = {
  args: {
    hiraki: "primary",
    size: "m",
    position: "enabled",
    children: "버튼",
    leftIcon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 3V13M3 8H13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
};

export const WithRightIcon: Story = {
  args: {
    hiraki: "primary",
    size: "m",
    position: "enabled",
    children: "버튼",
    rightIcon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 3L11 8L6 13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
};

export const WithBothIcons: Story = {
  args: {
    hiraki: "primary",
    size: "m",
    position: "enabled",
    children: "버튼",
    leftIcon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 3V13M3 8H13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    rightIcon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 3L11 8L6 13"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
};

// ============================================
// 레이아웃 옵션
// ============================================

export const FullWidth: Story = {
  args: {
    hiraki: "primary",
    size: "m",
    position: "enabled",
    children: "Full Width 버튼",
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

// ============================================
// 전체 Variant 미리보기
// ============================================

export const AllVariants: Story = {
  args: {
    hiraki: "primary",
    size: "m",
    children: "버튼",
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      {(
        ["primary", "secondary", "tertiary", "quaternary", "ghost"] as const
      ).map((hiraki) => (
        <div key={hiraki}>
          <h3 style={{ marginBottom: "16px", textTransform: "capitalize" }}>
            {hiraki}
          </h3>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <Button hiraki={hiraki} size="xs" position="enabled">
              XS
            </Button>
            <Button hiraki={hiraki} size="s" position="enabled">
              Small
            </Button>
            <Button hiraki={hiraki} size="m" position="enabled">
              Medium
            </Button>
            <Button hiraki={hiraki} size="m" position="disabled">
              Disabled
            </Button>
          </div>
        </div>
      ))}
    </div>
  ),
};
