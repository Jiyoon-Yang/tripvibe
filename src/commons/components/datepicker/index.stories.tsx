import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DatePicker } from "./index";

/**
 * DatePicker Component Stories
 *
 * 날짜 범위를 선택하는 DatePicker 컴포넌트의 Storybook 문서
 * - 2가지 size (s, m)
 * - 2가지 position (enabled, disabled)
 * - 날짜 범위 선택 기능
 */
const meta = {
  title: "Commons/Components/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "날짜 범위를 표시하고 선택하는 DatePicker 컴포넌트입니다. 2가지 크기(s, m)를 지원하며, 시작 날짜와 종료 날짜를 선택할 수 있습니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["s", "m"],
      description: "DatePicker 크기",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "m" },
      },
    },
    startDate: {
      control: "date",
      description: "시작 날짜",
      table: {
        type: { summary: "Date | null" },
        defaultValue: { summary: "null" },
      },
    },
    endDate: {
      control: "date",
      description: "종료 날짜",
      table: {
        type: { summary: "Date | null" },
        defaultValue: { summary: "null" },
      },
    },
    placeholder: {
      control: "text",
      description: "placeholder 텍스트",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "YYYY.MM.DD - YYYY.MM.DD" },
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
    onClick: {
      description: "클릭 이벤트 핸들러",
      action: "clicked",
      table: {
        type: { summary: "() => void" },
      },
    },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// 기본 상태 (빈 상태)
// ============================================

export const EmptySmall: Story = {
  args: {
    size: "s",
    disabled: false,
  },
};

export const EmptyMedium: Story = {
  args: {
    size: "m",
    disabled: false,
  },
};

// ============================================
// 날짜가 선택된 상태
// ============================================

export const WithDateRangeSmall: Story = {
  args: {
    size: "s",
    startDate: new Date(2025, 0, 1), // 2025.01.01
    endDate: new Date(2025, 0, 7), // 2025.01.07
    disabled: false,
  },
};

export const WithDateRangeMedium: Story = {
  args: {
    size: "m",
    startDate: new Date(2025, 0, 1), // 2025.01.01
    endDate: new Date(2025, 0, 7), // 2025.01.07
    disabled: false,
  },
};

// ============================================
// 시작 날짜만 선택된 상태
// ============================================

export const WithStartDateOnly: Story = {
  args: {
    size: "m",
    startDate: new Date(2025, 0, 1), // 2025.01.01
    endDate: null,
    disabled: false,
  },
};

// ============================================
// 종료 날짜만 선택된 상태
// ============================================

export const WithEndDateOnly: Story = {
  args: {
    size: "m",
    startDate: null,
    endDate: new Date(2025, 0, 7), // 2025.01.07
    disabled: false,
  },
};

// ============================================
// 비활성화 상태
// ============================================

export const DisabledSmall: Story = {
  args: {
    size: "s",
    disabled: true,
  },
};

export const DisabledMedium: Story = {
  args: {
    size: "m",
    disabled: true,
  },
};

export const DisabledWithDateRange: Story = {
  args: {
    size: "m",
    startDate: new Date(2025, 0, 1), // 2025.01.01
    endDate: new Date(2025, 0, 7), // 2025.01.07
    disabled: true,
  },
};

// ============================================
// 커스텀 Placeholder
// ============================================

export const CustomPlaceholder: Story = {
  args: {
    size: "m",
    placeholder: "날짜를 선택해주세요",
    disabled: false,
  },
};

// ============================================
// 전체 Variant 미리보기
// ============================================

export const AllVariants: Story = {
  args: {
    size: "m",
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      {/* Empty States */}
      <div>
        <h3 style={{ marginBottom: "16px" }}>Empty States</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            alignItems: "flex-start",
          }}>
          <DatePicker size="s" />
          <DatePicker size="m" />
        </div>
      </div>

      {/* With Date Range */}
      <div>
        <h3 style={{ marginBottom: "16px" }}>With Date Range</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            alignItems: "flex-start",
          }}>
          <DatePicker
            size="s"
            startDate={new Date(2025, 0, 1)}
            endDate={new Date(2025, 0, 7)}
          />
          <DatePicker
            size="m"
            startDate={new Date(2025, 0, 1)}
            endDate={new Date(2025, 0, 7)}
          />
        </div>
      </div>

      {/* Partial Date Selection */}
      <div>
        <h3 style={{ marginBottom: "16px" }}>Partial Date Selection</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            alignItems: "flex-start",
          }}>
          <DatePicker
            size="m"
            startDate={new Date(2025, 0, 1)}
            endDate={null}
          />
          <DatePicker
            size="m"
            startDate={null}
            endDate={new Date(2025, 0, 7)}
          />
        </div>
      </div>

      {/* Disabled States */}
      <div>
        <h3 style={{ marginBottom: "16px" }}>Disabled States</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            alignItems: "flex-start",
          }}>
          <DatePicker size="s" disabled />
          <DatePicker size="m" disabled />
          <DatePicker
            size="m"
            startDate={new Date(2025, 0, 1)}
            endDate={new Date(2025, 0, 7)}
            disabled
          />
        </div>
      </div>
    </div>
  ),
};
