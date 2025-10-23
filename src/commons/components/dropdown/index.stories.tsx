// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./index";
import { useState } from "react";

/**
 * Dropdown Component Stories
 *
 * 다양한 variant를 지원하는 드롭다운 컴포넌트의 Storybook 문서
 * - 2가지 filled (on, off) - 값이 선택되었는지 여부
 * - 2가지 selected (on, off) - 드롭다운이 열려있는지 여부
 */
const meta = {
  title: "Commons/Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "다양한 상태를 지원하는 드롭다운 컴포넌트입니다. filled(값 선택 여부)와 selected(드롭다운 열림 여부) 상태를 조합하여 사용할 수 있습니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    filled: {
      control: "select",
      options: ["on", "off"],
      description: "값이 선택되었는지 여부",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "off" },
      },
    },
    selected: {
      control: "select",
      options: ["on", "off"],
      description: "드롭다운이 열려있는지 여부",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "off" },
      },
    },
    options: {
      description: "선택 가능한 옵션 목록",
      table: {
        type: { summary: "DropdownOption[]" },
      },
    },
    value: {
      control: "text",
      description: "선택된 값",
      table: {
        type: { summary: "string" },
      },
    },
    placeholder: {
      control: "text",
      description: "placeholder 텍스트",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "내용입력" },
      },
    },
    disabled: {
      control: "boolean",
      description: "비활성화 여부",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    onChange: {
      description: "값이 변경될 때 호출되는 콜백",
      action: "changed",
      table: {
        type: { summary: "(value: string) => void" },
      },
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 옵션 데이터
const defaultOptions = [
  { value: "option1", label: "옵션 1" },
  { value: "option2", label: "옵션 2" },
  { value: "option3", label: "옵션 3" },
  { value: "option4", label: "옵션 4" },
  { value: "option5", label: "옵션 5" },
];

// ============================================
// 기본 상태 - filled: off, selected: off
// ============================================

export const Default: Story = {
  args: {
    filled: "off",
    selected: "off",
    options: defaultOptions,
    placeholder: "선택하세요",
  },
};

// ============================================
// filled: off, selected: on (드롭다운 열림, 값 선택 안 됨)
// ============================================

export const OpenedNoValue: Story = {
  args: {
    filled: "off",
    selected: "on",
    options: defaultOptions,
    placeholder: "선택하세요",
  },
};

// ============================================
// filled: on, selected: off (값 선택됨, 드롭다운 닫힘)
// ============================================

export const SelectedValue: Story = {
  args: {
    filled: "on",
    selected: "off",
    options: defaultOptions,
    value: "option2",
  },
};

// ============================================
// filled: on, selected: on (값 선택됨, 드롭다운 열림)
// ============================================

export const SelectedAndOpened: Story = {
  args: {
    filled: "on",
    selected: "on",
    options: defaultOptions,
    value: "option3",
  },
};

// ============================================
// Disabled 상태
// ============================================

export const Disabled: Story = {
  args: {
    filled: "off",
    selected: "off",
    options: defaultOptions,
    placeholder: "선택하세요",
    disabled: true,
  },
};

export const DisabledWithValue: Story = {
  args: {
    filled: "on",
    selected: "off",
    options: defaultOptions,
    value: "option2",
    disabled: true,
  },
};

// ============================================
// 다양한 옵션 개수
// ============================================

export const FewOptions: Story = {
  args: {
    filled: "off",
    selected: "off",
    options: [
      { value: "yes", label: "예" },
      { value: "no", label: "아니오" },
    ],
    placeholder: "선택하세요",
  },
};

export const ManyOptions: Story = {
  args: {
    filled: "off",
    selected: "off",
    options: [
      { value: "option1", label: "옵션 1" },
      { value: "option2", label: "옵션 2" },
      { value: "option3", label: "옵션 3" },
      { value: "option4", label: "옵션 4" },
      { value: "option5", label: "옵션 5" },
      { value: "option6", label: "옵션 6" },
      { value: "option7", label: "옵션 7" },
      { value: "option8", label: "옵션 8" },
      { value: "option9", label: "옵션 9" },
      { value: "option10", label: "옵션 10" },
    ],
    placeholder: "선택하세요",
  },
};

// ============================================
// 커스텀 Placeholder
// ============================================

export const CustomPlaceholder: Story = {
  args: {
    filled: "off",
    selected: "off",
    options: defaultOptions,
    placeholder: "항목을 선택해주세요",
  },
};

// ============================================
// Interactive 예제 (실제 동작)
// ============================================

export const Interactive: Story = {
  args: {
    options: defaultOptions,
  },
  render: () => {
    const InteractiveDropdown = () => {
      const [value, setValue] = useState<string | undefined>(undefined);

      return (
        <div style={{ width: "300px" }}>
          <Dropdown
            options={defaultOptions}
            value={value}
            onChange={setValue}
            placeholder="옵션을 선택하세요"
          />
          <div style={{ marginTop: "16px", fontSize: "14px", color: "#666" }}>
            선택된 값: {value || "(없음)"}
          </div>
        </div>
      );
    };

    return <InteractiveDropdown />;
  },
};

// ============================================
// 전체 Variant 미리보기
// ============================================

export const AllVariants: Story = {
  args: {
    options: defaultOptions,
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      <div>
        <h3 style={{ marginBottom: "16px" }}>
          Filled: Off, Selected: Off (기본 상태)
        </h3>
        <Dropdown
          filled="off"
          selected="off"
          options={defaultOptions}
          placeholder="선택하세요"
        />
      </div>

      <div>
        <h3 style={{ marginBottom: "16px" }}>
          Filled: Off, Selected: On (드롭다운 열림)
        </h3>
        <Dropdown
          filled="off"
          selected="on"
          options={defaultOptions}
          placeholder="선택하세요"
        />
      </div>

      <div>
        <h3 style={{ marginBottom: "16px" }}>
          Filled: On, Selected: Off (값 선택됨)
        </h3>
        <Dropdown
          filled="on"
          selected="off"
          options={defaultOptions}
          value="option2"
        />
      </div>

      <div>
        <h3 style={{ marginBottom: "16px" }}>
          Filled: On, Selected: On (값 선택됨 + 드롭다운 열림)
        </h3>
        <Dropdown
          filled="on"
          selected="on"
          options={defaultOptions}
          value="option3"
        />
      </div>

      <div>
        <h3 style={{ marginBottom: "16px" }}>Disabled (비활성화)</h3>
        <Dropdown
          filled="off"
          selected="off"
          options={defaultOptions}
          placeholder="선택하세요"
          disabled={true}
        />
      </div>

      <div>
        <h3 style={{ marginBottom: "16px" }}>
          Disabled with Value (비활성화 + 값 선택됨)
        </h3>
        <Dropdown
          filled="on"
          selected="off"
          options={defaultOptions}
          value="option2"
          disabled={true}
        />
      </div>
    </div>
  ),
};

// ============================================
// 실사용 시나리오
// ============================================

export const RealWorldScenario: Story = {
  args: {
    options: defaultOptions,
  },
  render: () => {
    const RealWorldExample = () => {
      const [region, setRegion] = useState<string | undefined>(undefined);
      const [category, setCategory] = useState<string | undefined>(undefined);

      const regions = [
        { value: "seoul", label: "서울" },
        { value: "busan", label: "부산" },
        { value: "jeju", label: "제주" },
        { value: "gangneung", label: "강릉" },
        { value: "gyeongju", label: "경주" },
      ];

      const categories = [
        { value: "hotel", label: "호텔" },
        { value: "resort", label: "리조트" },
        { value: "pension", label: "펜션" },
        { value: "camping", label: "캠핑" },
        { value: "guesthouse", label: "게스트하우스" },
      ];

      return (
        <div style={{ width: "400px" }}>
          <div style={{ marginBottom: "24px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "14px",
                fontWeight: "500",
              }}>
              지역 선택
            </label>
            <Dropdown
              options={regions}
              value={region}
              onChange={setRegion}
              placeholder="지역을 선택하세요"
            />
          </div>

          <div style={{ marginBottom: "24px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontSize: "14px",
                fontWeight: "500",
              }}>
              숙소 유형
            </label>
            <Dropdown
              options={categories}
              value={category}
              onChange={setCategory}
              placeholder="숙소 유형을 선택하세요"
            />
          </div>

          <div
            style={{
              padding: "16px",
              backgroundColor: "#f5f5f5",
              borderRadius: "8px",
              fontSize: "14px",
            }}>
            <div>
              <strong>선택된 지역:</strong> {region || "(선택 안 됨)"}
            </div>
            <div style={{ marginTop: "8px" }}>
              <strong>선택된 숙소 유형:</strong> {category || "(선택 안 됨)"}
            </div>
          </div>
        </div>
      );
    };

    return <RealWorldExample />;
  },
};
