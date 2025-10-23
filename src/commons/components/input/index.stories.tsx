import type { Meta, StoryObj } from "@storybook/nextjs";
import { Input } from "./index";

/**
 * Input Component Stories
 *
 * 다양한 variant를 지원하는 입력 컴포넌트의 Storybook 문서
 * - 6가지 status (enabled, error, filled, selected&typing, disabled, lead-only)
 * - 2가지 size (s, m)
 * - 2가지 filled (on, off)
 */
const meta = {
  title: "Commons/Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "다양한 상태(status)와 크기(size)를 지원하는 범용 입력 컴포넌트입니다. enabled, error, filled, selected&typing, disabled, lead-only 상태와 s, m 크기를 조합하여 사용할 수 있습니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: "select",
      options: [
        "enabled",
        "error",
        "filled",
        "selected&typing",
        "disabled",
        "lead-only",
      ],
      description: "입력 상태",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "enabled" },
      },
    },
    size: {
      control: "select",
      options: ["s", "m"],
      description: "입력 크기",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "m" },
      },
    },
    filled: {
      control: "select",
      options: ["on", "off"],
      description: "채움 상태",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "off" },
      },
    },
    label: {
      control: "text",
      description: "레이블",
      table: {
        type: { summary: "string" },
      },
    },
    required: {
      control: "boolean",
      description: "필수 입력 여부",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    errorMessage: {
      control: "text",
      description: "에러 메시지",
      table: {
        type: { summary: "string" },
      },
    },
    placeholder: {
      control: "text",
      description: "플레이스홀더",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "내용을 입력해 주세요." },
      },
    },
    rightButton: {
      description: "오른쪽 버튼",
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// Enabled 상태 - Size 별
// ============================================

export const EnabledSmall: Story = {
  args: {
    status: "enabled",
    size: "s",
    filled: "off",
    placeholder: "내용을 입력해 주세요.",
  },
};

export const EnabledMedium: Story = {
  args: {
    status: "enabled",
    size: "m",
    filled: "off",
    placeholder: "내용을 입력해 주세요.",
  },
};

// ============================================
// Filled 상태 - Size 별
// ============================================

export const FilledSmall: Story = {
  args: {
    status: "filled",
    size: "s",
    filled: "on",
    placeholder: "내용을 입력해 주세요.",
    defaultValue: "입력된 내용",
  },
};

export const FilledMedium: Story = {
  args: {
    status: "filled",
    size: "m",
    filled: "on",
    placeholder: "내용을 입력해 주세요.",
    defaultValue: "입력된 내용",
  },
};

// ============================================
// Selected & Typing 상태 - Size 별
// ============================================

export const SelectedTypingSmall: Story = {
  args: {
    status: "selected&typing",
    size: "s",
    filled: "on",
    placeholder: "내용을 입력해 주세요.",
    defaultValue: "입력 중...",
  },
};

export const SelectedTypingMedium: Story = {
  args: {
    status: "selected&typing",
    size: "m",
    filled: "on",
    placeholder: "내용을 입력해 주세요.",
    defaultValue: "입력 중...",
  },
};

// ============================================
// Error 상태 - Size 별
// ============================================

export const ErrorSmall: Story = {
  args: {
    status: "error",
    size: "s",
    filled: "off",
    placeholder: "내용을 입력해 주세요.",
    errorMessage: "오류가 발생했습니다.",
  },
};

export const ErrorMedium: Story = {
  args: {
    status: "error",
    size: "m",
    filled: "off",
    placeholder: "내용을 입력해 주세요.",
    errorMessage: "오류가 발생했습니다.",
  },
};

// ============================================
// Disabled 상태 - Size 별
// ============================================

export const DisabledSmall: Story = {
  args: {
    status: "disabled",
    size: "s",
    filled: "off",
    placeholder: "내용을 입력해 주세요.",
  },
};

export const DisabledMedium: Story = {
  args: {
    status: "disabled",
    size: "m",
    filled: "off",
    placeholder: "내용을 입력해 주세요.",
  },
};

// ============================================
// Lead-only (읽기 전용) 상태 - Size 별
// ============================================

export const LeadOnlySmall: Story = {
  args: {
    status: "lead-only",
    size: "s",
    filled: "on",
    defaultValue: "읽기 전용 내용",
  },
};

export const LeadOnlyMedium: Story = {
  args: {
    status: "lead-only",
    size: "m",
    filled: "on",
    defaultValue: "읽기 전용 내용",
  },
};

// ============================================
// Label 있는 경우
// ============================================

export const WithLabel: Story = {
  args: {
    status: "enabled",
    size: "m",
    filled: "off",
    label: "이름",
    placeholder: "이름을 입력해 주세요.",
  },
};

export const WithLabelRequired: Story = {
  args: {
    status: "enabled",
    size: "m",
    filled: "off",
    label: "이메일",
    required: true,
    placeholder: "이메일을 입력해 주세요.",
  },
};

export const WithLabelError: Story = {
  args: {
    status: "error",
    size: "m",
    filled: "off",
    label: "비밀번호",
    required: true,
    errorMessage: "비밀번호는 8자 이상이어야 합니다.",
    placeholder: "비밀번호를 입력해 주세요.",
  },
};

// ============================================
// 오른쪽 버튼 있는 경우
// ============================================

export const WithRightButton: Story = {
  args: {
    status: "enabled",
    size: "m",
    filled: "off",
    label: "검색",
    placeholder: "검색어를 입력해 주세요.",
    rightButton: (
      <button
        style={{
          padding: "8px 16px",
          background: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}>
        검색
      </button>
    ),
  },
};

// ============================================
// 전체 Variant 미리보기
// ============================================

export const AllVariants: Story = {
  args: {
    status: "enabled",
    size: "m",
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      {(
        [
          "enabled",
          "filled",
          "selected&typing",
          "error",
          "disabled",
          "lead-only",
        ] as const
      ).map((status) => (
        <div key={status}>
          <h3
            style={{
              marginBottom: "16px",
              textTransform: "capitalize",
              fontSize: "14px",
              fontWeight: "600",
            }}>
            {status}
          </h3>
          <div
            style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
            <Input
              status={status}
              size="s"
              filled={
                status === "filled" ||
                status === "selected&typing" ||
                status === "lead-only"
                  ? "on"
                  : "off"
              }
              placeholder="Small"
              defaultValue={
                status === "filled" ||
                status === "selected&typing" ||
                status === "lead-only"
                  ? "입력된 값"
                  : undefined
              }
              errorMessage={status === "error" ? "오류 메시지" : undefined}
            />
            <Input
              status={status}
              size="m"
              filled={
                status === "filled" ||
                status === "selected&typing" ||
                status === "lead-only"
                  ? "on"
                  : "off"
              }
              placeholder="Medium"
              defaultValue={
                status === "filled" ||
                status === "selected&typing" ||
                status === "lead-only"
                  ? "입력된 값"
                  : undefined
              }
              errorMessage={status === "error" ? "오류 메시지" : undefined}
            />
          </div>
        </div>
      ))}
    </div>
  ),
};

// ============================================
// 실제 사용 예시
// ============================================

export const FormExample: Story = {
  render: () => (
    <div
      style={{
        width: "400px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}>
      <Input
        status="enabled"
        size="m"
        filled="off"
        label="이름"
        required
        placeholder="이름을 입력해 주세요."
      />
      <Input
        status="enabled"
        size="m"
        filled="off"
        label="이메일"
        required
        placeholder="example@email.com"
        type="email"
      />
      <Input
        status="error"
        size="m"
        filled="off"
        label="비밀번호"
        required
        placeholder="비밀번호를 입력해 주세요."
        type="password"
        errorMessage="비밀번호는 8자 이상이어야 합니다."
      />
      <Input
        status="enabled"
        size="m"
        filled="off"
        label="전화번호"
        placeholder="010-0000-0000"
        type="tel"
      />
    </div>
  ),
};
