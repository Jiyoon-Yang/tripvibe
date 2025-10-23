import type { Meta, StoryObj } from "@storybook/nextjs";
import { Searchbar } from "./index";

/**
 * Searchbar Component Stories
 *
 * 다양한 상태를 지원하는 검색바 컴포넌트의 Storybook 문서
 * - 4가지 state (default, selected, filled, typing)
 * - 2가지 size (s, m)
 */
const meta = {
  title: "Commons/Components/Searchbar",
  component: Searchbar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "다양한 상태(state)와 크기(size)를 지원하는 검색바 컴포넌트입니다. default, selected, filled, typing 상태와 s(40px), m(48px) 크기를 조합하여 사용할 수 있습니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    state: {
      control: "select",
      options: ["default", "selected", "filled", "typing"],
      description: "검색바 상태",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "default" },
      },
    },
    size: {
      control: "select",
      options: ["s", "m"],
      description: "검색바 크기",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "m" },
      },
    },
    placeholder: {
      control: "text",
      description: "플레이스홀더",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "제목을 검색해 주세요." },
      },
    },
  },
} satisfies Meta<typeof Searchbar>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// Default 상태 - Size 별
// ============================================

export const DefaultSmall: Story = {
  args: {
    state: "default",
    size: "s",
    placeholder: "제목을 검색해 주세요.",
  },
};

export const DefaultMedium: Story = {
  args: {
    state: "default",
    size: "m",
    placeholder: "제목을 검색해 주세요.",
  },
};

// ============================================
// Selected 상태 - Size 별
// ============================================

export const SelectedSmall: Story = {
  args: {
    state: "selected",
    size: "s",
    placeholder: "제목을 검색해 주세요.",
  },
};

export const SelectedMedium: Story = {
  args: {
    state: "selected",
    size: "m",
    placeholder: "제목을 검색해 주세요.",
  },
};

// ============================================
// Filled 상태 - Size 별
// ============================================

export const FilledSmall: Story = {
  args: {
    state: "filled",
    size: "s",
    placeholder: "제목을 검색해 주세요.",
    defaultValue: "검색어 입력됨",
  },
};

export const FilledMedium: Story = {
  args: {
    state: "filled",
    size: "m",
    placeholder: "제목을 검색해 주세요.",
    defaultValue: "검색어 입력됨",
  },
};

// ============================================
// Typing 상태 - Size 별
// ============================================

export const TypingSmall: Story = {
  args: {
    state: "typing",
    size: "s",
    placeholder: "제목을 검색해 주세요.",
    defaultValue: "입력 중...",
  },
};

export const TypingMedium: Story = {
  args: {
    state: "typing",
    size: "m",
    placeholder: "제목을 검색해 주세요.",
    defaultValue: "입력 중...",
  },
};

// ============================================
// 전체 Variant 미리보기
// ============================================

export const AllVariants: Story = {
  args: {
    state: "default",
    size: "m",
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      {(["default", "selected", "filled", "typing"] as const).map((state) => (
        <div key={state}>
          <h3
            style={{
              marginBottom: "16px",
              textTransform: "capitalize",
              fontSize: "14px",
              fontWeight: "600",
            }}>
            {state}
          </h3>
          <div
            style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
            <Searchbar
              state={state}
              size="s"
              placeholder="Small"
              defaultValue={
                state === "filled" || state === "typing"
                  ? "검색어 입력"
                  : undefined
              }
            />
            <Searchbar
              state={state}
              size="m"
              placeholder="Medium"
              defaultValue={
                state === "filled" || state === "typing"
                  ? "검색어 입력"
                  : undefined
              }
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

export const SearchExample: Story = {
  render: () => (
    <div
      style={{
        width: "600px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}>
      <div>
        <h4 style={{ marginBottom: "12px", fontSize: "14px" }}>
          기본 검색바
        </h4>
        <Searchbar
          state="default"
          size="m"
          placeholder="제목을 검색해 주세요."
        />
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", fontSize: "14px" }}>
          선택된 검색바
        </h4>
        <Searchbar
          state="selected"
          size="m"
          placeholder="제목을 검색해 주세요."
        />
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", fontSize: "14px" }}>
          입력된 검색바
        </h4>
        <Searchbar
          state="filled"
          size="m"
          defaultValue="여행 계획"
          placeholder="제목을 검색해 주세요."
        />
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", fontSize: "14px" }}>
          작은 크기 검색바
        </h4>
        <Searchbar
          state="default"
          size="s"
          placeholder="제목을 검색해 주세요."
        />
      </div>
    </div>
  ),
};

// ============================================
// 커스텀 플레이스홀더 예시
// ============================================

export const CustomPlaceholder: Story = {
  render: () => (
    <div
      style={{
        width: "600px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}>
      <Searchbar
        state="default"
        size="m"
        placeholder="여행지를 검색해 주세요."
      />
      <Searchbar
        state="default"
        size="m"
        placeholder="숙소를 검색해 주세요."
      />
      <Searchbar
        state="default"
        size="m"
        placeholder="게시글을 검색해 주세요."
      />
    </div>
  ),
};

// ============================================
// 인터랙티브 예시
// ============================================

export const Interactive: Story = {
  args: {
    state: "default",
    size: "m",
    placeholder: "제목을 검색해 주세요.",
  },
};

