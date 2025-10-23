import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { Radio } from "./index";

/**
 * Radio Component Stories
 *
 * 라디오 버튼 UI 컴포넌트의 Storybook 문서
 * - 2가지 size (s, m)
 * - 2가지 state (enabled, selected)
 * - 라디오 그룹 기능 지원
 */
const meta = {
  title: "Commons/Components/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "라디오 버튼 UI 컴포넌트입니다. Figma 디자인을 기반으로 다양한 variant를 지원하며, s와 m 두 가지 크기로 제공됩니다. 라디오 그룹 내에서 하나의 옵션만 선택할 수 있습니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["s", "m"],
      description: "라디오 버튼 크기",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "m" },
      },
    },
    state: {
      control: "select",
      options: ["enabled", "selected"],
      description: "라디오 버튼 선택 상태 (checked 속성에 따라 자동 관리됨)",
      table: {
        type: { summary: "string" },
      },
    },
    label: {
      control: "text",
      description: "라디오 버튼 레이블",
      table: {
        type: { summary: "string" },
      },
    },
    value: {
      control: "text",
      description: "라디오 버튼 값",
      table: {
        type: { summary: "string" },
      },
    },
    checked: {
      control: "boolean",
      description: "체크 여부 (controlled)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
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
    onChange: {
      description: "onChange 핸들러",
      action: "changed",
      table: {
        type: { summary: "(e: React.ChangeEvent<HTMLInputElement>) => void" },
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
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// Size 별 기본 스토리
// ============================================

export const Small: Story = {
  args: {
    size: "s",
    label: "Small 라디오 버튼",
    value: "small",
    checked: false,
  },
};

export const Medium: Story = {
  args: {
    size: "m",
    label: "Medium 라디오 버튼",
    value: "medium",
    checked: false,
  },
};

// ============================================
// State 별 스토리
// ============================================

export const Enabled: Story = {
  args: {
    size: "m",
    label: "활성화된 라디오 버튼",
    value: "enabled",
    checked: false,
  },
};

export const Selected: Story = {
  args: {
    size: "m",
    label: "선택된 라디오 버튼",
    value: "selected",
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    size: "m",
    label: "비활성화된 라디오 버튼",
    value: "disabled",
    checked: false,
    disabled: true,
  },
};

export const DisabledSelected: Story = {
  args: {
    size: "m",
    label: "비활성화된 선택 상태 라디오 버튼",
    value: "disabled-selected",
    checked: true,
    disabled: true,
  },
};

// ============================================
// 인터랙티브 예제
// ============================================

export const Interactive: Story = {
  args: {
    size: "m",
    label: "인터랙티브 라디오 버튼",
    value: "interactive",
    checked: false,
  },
  render: function InteractiveRadio(args) {
    const [checked, setChecked] = React.useState(args.checked || false);

    React.useEffect(() => {
      setChecked(args.checked || false);
    }, [args.checked]);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Radio
          {...args}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <div style={{ fontSize: "14px", color: "#666" }}>
          현재 상태: {checked ? "선택됨" : "선택 안 됨"}
        </div>
      </div>
    );
  },
};

// ============================================
// 라디오 그룹 예제
// ============================================

export const RadioGroup: Story = {
  args: {
    size: "m",
    label: "라디오 그룹",
    value: "group",
  },
  render: function RadioGroupExample(args) {
    const [selected, setSelected] = React.useState("option1");

    const options = [
      { value: "option1", label: "옵션 1" },
      { value: "option2", label: "옵션 2" },
      { value: "option3", label: "옵션 3" },
    ];

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ fontSize: "16px", fontWeight: "bold" }}>
          라디오 그룹 예제
        </div>
        {options.map((option) => (
          <Radio
            key={option.value}
            size={args.size}
            label={option.label}
            value={option.value}
            checked={selected === option.value}
            onChange={(e) => setSelected(e.target.value)}
          />
        ))}
        <div
          style={{
            marginTop: "8px",
            padding: "12px",
            background: "#f5f5f5",
            borderRadius: "4px",
            fontSize: "14px",
          }}>
          선택된 값: <strong>{selected}</strong>
        </div>
      </div>
    );
  },
};

export const RadioGroupSmall: Story = {
  args: {
    size: "s",
    label: "Small 라디오 그룹",
    value: "group-small",
  },
  render: function RadioGroupSmallExample(args) {
    const [selected, setSelected] = React.useState("option1");

    const options = [
      { value: "option1", label: "옵션 1" },
      { value: "option2", label: "옵션 2" },
      { value: "option3", label: "옵션 3" },
    ];

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <div style={{ fontSize: "14px", fontWeight: "bold" }}>
          Small 라디오 그룹
        </div>
        {options.map((option) => (
          <Radio
            key={option.value}
            size={args.size}
            label={option.label}
            value={option.value}
            checked={selected === option.value}
            onChange={(e) => setSelected(e.target.value)}
          />
        ))}
      </div>
    );
  },
};

export const RadioGroupWithDisabled: Story = {
  args: {
    size: "m",
    label: "비활성화 옵션 포함 라디오 그룹",
    value: "group-disabled",
  },
  render: function RadioGroupWithDisabledExample(args) {
    const [selected, setSelected] = React.useState("option1");

    const options = [
      { value: "option1", label: "옵션 1", disabled: false },
      { value: "option2", label: "옵션 2 (비활성화)", disabled: true },
      { value: "option3", label: "옵션 3", disabled: false },
      { value: "option4", label: "옵션 4 (비활성화)", disabled: true },
    ];

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ fontSize: "16px", fontWeight: "bold" }}>
          비활성화 옵션 포함 라디오 그룹
        </div>
        {options.map((option) => (
          <Radio
            key={option.value}
            size={args.size}
            label={option.label}
            value={option.value}
            checked={selected === option.value}
            disabled={option.disabled}
            onChange={(e) => setSelected(e.target.value)}
          />
        ))}
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
    label: "전체 Variant",
    value: "all-variants",
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
      {(["s", "m"] as const).map((size) => (
        <div key={size}>
          <h3
            style={{
              marginBottom: "24px",
              textTransform: "capitalize",
              fontSize: "18px",
              fontWeight: "bold",
            }}>
            Size: {size}
          </h3>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* Enabled */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ width: "150px", fontSize: "14px" }}>Enabled:</span>
              <Radio
                size={size}
                label="선택 안 됨"
                value="enabled"
                checked={false}
              />
            </div>

            {/* Selected */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ width: "150px", fontSize: "14px" }}>
                Selected:
              </span>
              <Radio
                size={size}
                label="선택됨"
                value="selected"
                checked={true}
              />
            </div>

            {/* Disabled */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ width: "150px", fontSize: "14px" }}>
                Disabled:
              </span>
              <Radio
                size={size}
                label="비활성화"
                value="disabled"
                checked={false}
                disabled={true}
              />
            </div>

            {/* Disabled + Selected */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ width: "150px", fontSize: "14px" }}>
                Disabled + Selected:
              </span>
              <Radio
                size={size}
                label="비활성화 + 선택됨"
                value="disabled-selected"
                checked={true}
                disabled={true}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
};

// ============================================
// 실전 사용 예제
// ============================================

export const FormExample: Story = {
  args: {
    size: "m",
    label: "폼 예제",
    value: "form-example",
  },
  render: function FormExampleStory(args) {
    const [formData, setFormData] = React.useState({
      gender: "",
      age: "",
      agreement: "",
    });

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          maxWidth: "400px",
          padding: "24px",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
        }}>
        <div style={{ fontSize: "20px", fontWeight: "bold" }}>
          설문조사 예제
        </div>

        {/* 성별 선택 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ fontSize: "16px", fontWeight: "600" }}>성별</div>
          <Radio
            size={args.size}
            label="남성"
            value="male"
            checked={formData.gender === "male"}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
          />
          <Radio
            size={args.size}
            label="여성"
            value="female"
            checked={formData.gender === "female"}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
          />
          <Radio
            size={args.size}
            label="선택하지 않음"
            value="other"
            checked={formData.gender === "other"}
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
          />
        </div>

        {/* 연령대 선택 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ fontSize: "16px", fontWeight: "600" }}>연령대</div>
          <Radio
            size={args.size}
            label="10대"
            value="10s"
            checked={formData.age === "10s"}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          />
          <Radio
            size={args.size}
            label="20대"
            value="20s"
            checked={formData.age === "20s"}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          />
          <Radio
            size={args.size}
            label="30대"
            value="30s"
            checked={formData.age === "30s"}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          />
          <Radio
            size={args.size}
            label="40대 이상"
            value="40s+"
            checked={formData.age === "40s+"}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          />
        </div>

        {/* 동의 여부 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ fontSize: "16px", fontWeight: "600" }}>
            개인정보 수집 동의
          </div>
          <Radio
            size={args.size}
            label="동의함"
            value="agree"
            checked={formData.agreement === "agree"}
            onChange={(e) =>
              setFormData({ ...formData, agreement: e.target.value })
            }
          />
          <Radio
            size={args.size}
            label="동의하지 않음"
            value="disagree"
            checked={formData.agreement === "disagree"}
            onChange={(e) =>
              setFormData({ ...formData, agreement: e.target.value })
            }
          />
        </div>

        {/* 결과 표시 */}
        <div
          style={{
            marginTop: "8px",
            padding: "16px",
            background: "#f5f5f5",
            borderRadius: "4px",
            fontSize: "14px",
          }}>
          <div style={{ fontWeight: "bold", marginBottom: "8px" }}>
            선택된 값:
          </div>
          <div>성별: {formData.gender || "(선택 안 됨)"}</div>
          <div>연령대: {formData.age || "(선택 안 됨)"}</div>
          <div>동의 여부: {formData.agreement || "(선택 안 됨)"}</div>
        </div>
      </div>
    );
  },
};

export const HorizontalLayout: Story = {
  args: {
    size: "m",
    label: "가로 레이아웃",
    value: "horizontal",
  },
  render: function HorizontalLayoutExample(args) {
    const [selected, setSelected] = React.useState("option1");

    const options = [
      { value: "option1", label: "옵션 1" },
      { value: "option2", label: "옵션 2" },
      { value: "option3", label: "옵션 3" },
    ];

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div style={{ fontSize: "16px", fontWeight: "bold" }}>
          가로 레이아웃
        </div>
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          {options.map((option) => (
            <Radio
              key={option.value}
              size={args.size}
              label={option.label}
              value={option.value}
              checked={selected === option.value}
              onChange={(e) => setSelected(e.target.value)}
            />
          ))}
        </div>
      </div>
    );
  },
};
