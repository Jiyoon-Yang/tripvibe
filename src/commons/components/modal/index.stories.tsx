import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Modal } from "./index";
import { ModalProvider } from "../../providers/modal/modal.provider";
import type { DropdownOption } from "../dropdown";

/**
 * Modal Component Stories
 *
 * 다양한 variant, actions, theme를 지원하는 모달 컴포넌트의 Storybook 문서
 * - variant: info, danger
 * - actions: single, dual, cash
 * - theme: light, dark
 */
const meta = {
  title: "Commons/Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "다양한 variant, actions, theme를 지원하는 모달 컴포넌트입니다. info/danger variant, single/dual/cash actions, light/dark theme를 조합하여 사용할 수 있습니다.",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ModalProvider>
        <Story />
      </ModalProvider>
    ),
  ],
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "danger"],
      description: "모달의 variant 스타일",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "info" },
      },
    },
    actions: {
      control: "select",
      options: ["single", "dual", "cash"],
      description: "모달의 actions 타입",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "single" },
      },
    },
    theme: {
      control: "select",
      options: ["light", "dark"],
      description: "모달의 테마",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "light" },
      },
    },
    title: {
      control: "text",
      description: "모달 타이틀",
      table: {
        type: { summary: "string" },
      },
    },
    description: {
      control: "text",
      description: "모달 설명",
      table: {
        type: { summary: "string" },
      },
    },
    singleActionLabel: {
      control: "text",
      description: "single action일 때의 버튼 텍스트",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "확인" },
      },
    },
    cancelLabel: {
      control: "text",
      description: "dual/cash action일 때의 취소 버튼 텍스트",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "취소" },
      },
    },
    confirmLabel: {
      control: "text",
      description: "dual action일 때의 구매/확인 버튼 텍스트",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "구매" },
      },
    },
    chargeLabel: {
      control: "text",
      description: "cash action일 때의 충전 버튼 텍스트",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "충전하기" },
      },
    },
    onSingleAction: {
      description: "single action일 때의 버튼 클릭 핸들러",
      action: "singleAction",
      table: {
        type: { summary: "() => void" },
      },
    },
    onCancel: {
      description: "dual/cash action일 때의 취소 버튼 클릭 핸들러",
      action: "cancel",
      table: {
        type: { summary: "() => void" },
      },
    },
    onConfirm: {
      description: "dual action일 때의 구매/확인 버튼 클릭 핸들러",
      action: "confirm",
      table: {
        type: { summary: "() => void" },
      },
    },
    onCharge: {
      description: "cash action일 때의 충전 버튼 클릭 핸들러",
      action: "charge",
      table: {
        type: { summary: "() => void" },
      },
    },
    dropdownOptions: {
      description: "cash action일 때의 드롭다운 옵션",
      table: {
        type: { summary: "DropdownOption[]" },
      },
    },
    dropdownValue: {
      control: "text",
      description: "cash action일 때의 드롭다운 값",
      table: {
        type: { summary: "string" },
      },
    },
    onDropdownChange: {
      description: "cash action일 때의 드롭다운 변경 핸들러",
      action: "dropdownChange",
      table: {
        type: { summary: "(value: string) => void" },
      },
    },
    dropdownPlaceholder: {
      control: "text",
      description: "cash action일 때의 드롭다운 placeholder",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "내용입력" },
      },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// Info Variant - Single Action
// ============================================

export const InfoSingleLight: Story = {
  args: {
    variant: "info",
    actions: "single",
    theme: "light",
    title: "알림",
    description: "작업이 완료되었습니다.",
    singleActionLabel: "확인",
  },
};

export const InfoSingleDark: Story = {
  args: {
    variant: "info",
    actions: "single",
    theme: "dark",
    title: "알림",
    description: "작업이 완료되었습니다.",
    singleActionLabel: "확인",
  },
};

export const InfoSingleLightNoDescription: Story = {
  args: {
    variant: "info",
    actions: "single",
    theme: "light",
    title: "알림",
  },
};

// ============================================
// Info Variant - Dual Action
// ============================================

export const InfoDualLight: Story = {
  args: {
    variant: "info",
    actions: "dual",
    theme: "light",
    title: "구매 확인",
    description: "이 상품을 구매하시겠습니까?",
    cancelLabel: "취소",
    confirmLabel: "구매",
  },
};

export const InfoDualDark: Story = {
  args: {
    variant: "info",
    actions: "dual",
    theme: "dark",
    title: "구매 확인",
    description: "이 상품을 구매하시겠습니까?",
    cancelLabel: "취소",
    confirmLabel: "구매",
  },
};

export const InfoDualLightNoDescription: Story = {
  args: {
    variant: "info",
    actions: "dual",
    theme: "light",
    title: "확인",
    cancelLabel: "취소",
    confirmLabel: "확인",
  },
};

// ============================================
// Info Variant - Cash Action
// ============================================

const cashDropdownOptions: DropdownOption[] = [
  { value: "1000", label: "1,000원" },
  { value: "5000", label: "5,000원" },
  { value: "10000", label: "10,000원" },
  { value: "50000", label: "50,000원" },
  { value: "100000", label: "100,000원" },
];

export const InfoCashLight: Story = {
  args: {
    variant: "info",
    actions: "cash",
    theme: "light",
    title: "포인트 충전",
    description: "충전할 금액을 선택해주세요.",
    cancelLabel: "취소",
    chargeLabel: "충전하기",
    dropdownOptions: cashDropdownOptions,
    dropdownPlaceholder: "금액 선택",
  },
};

export const InfoCashDark: Story = {
  args: {
    variant: "info",
    actions: "cash",
    theme: "dark",
    title: "포인트 충전",
    description: "충전할 금액을 선택해주세요.",
    cancelLabel: "취소",
    chargeLabel: "충전하기",
    dropdownOptions: cashDropdownOptions,
    dropdownPlaceholder: "금액 선택",
  },
};

export const InfoCashLightWithValue: Story = {
  args: {
    variant: "info",
    actions: "cash",
    theme: "light",
    title: "포인트 충전",
    description: "충전할 금액을 선택해주세요.",
    cancelLabel: "취소",
    chargeLabel: "충전하기",
    dropdownOptions: cashDropdownOptions,
    dropdownValue: "10000",
    dropdownPlaceholder: "금액 선택",
  },
};

// ============================================
// Danger Variant - Single Action
// ============================================

export const DangerSingleLight: Story = {
  args: {
    variant: "danger",
    actions: "single",
    theme: "light",
    title: "주의",
    description: "이 작업은 되돌릴 수 없습니다.",
    singleActionLabel: "확인",
  },
};

export const DangerSingleDark: Story = {
  args: {
    variant: "danger",
    actions: "single",
    theme: "dark",
    title: "주의",
    description: "이 작업은 되돌릴 수 없습니다.",
    singleActionLabel: "확인",
  },
};

// ============================================
// Danger Variant - Dual Action
// ============================================

export const DangerDualLight: Story = {
  args: {
    variant: "danger",
    actions: "dual",
    theme: "light",
    title: "삭제 확인",
    description: "정말로 삭제하시겠습니까?",
    cancelLabel: "취소",
    confirmLabel: "삭제",
  },
};

export const DangerDualDark: Story = {
  args: {
    variant: "danger",
    actions: "dual",
    theme: "dark",
    title: "삭제 확인",
    description: "정말로 삭제하시겠습니까?",
    cancelLabel: "취소",
    confirmLabel: "삭제",
  },
};

// ============================================
// 전체 Variant 미리보기
// ============================================

export const AllVariants: Story = {
  args: {
    variant: "info",
    actions: "single",
    theme: "light",
    title: "알림",
  },
  render: () => {
    const cashOptions: DropdownOption[] = [
      { value: "1000", label: "1,000원" },
      { value: "5000", label: "5,000원" },
      { value: "10000", label: "10,000원" },
    ];

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        {/* Info Single */}
        <div>
          <h3 style={{ marginBottom: "16px" }}>Info - Single Action</h3>
          <div style={{ display: "flex", gap: "24px" }}>
            <div>
              <p style={{ marginBottom: "8px", fontSize: "12px" }}>Light</p>
              <Modal
                variant="info"
                actions="single"
                theme="light"
                title="알림"
                description="작업이 완료되었습니다."
              />
            </div>
            <div>
              <p style={{ marginBottom: "8px", fontSize: "12px" }}>Dark</p>
              <Modal
                variant="info"
                actions="single"
                theme="dark"
                title="알림"
                description="작업이 완료되었습니다."
              />
            </div>
          </div>
        </div>

        {/* Info Dual */}
        <div>
          <h3 style={{ marginBottom: "16px" }}>Info - Dual Action</h3>
          <div style={{ display: "flex", gap: "24px" }}>
            <div>
              <p style={{ marginBottom: "8px", fontSize: "12px" }}>Light</p>
              <Modal
                variant="info"
                actions="dual"
                theme="light"
                title="구매 확인"
                description="이 상품을 구매하시겠습니까?"
              />
            </div>
            <div>
              <p style={{ marginBottom: "8px", fontSize: "12px" }}>Dark</p>
              <Modal
                variant="info"
                actions="dual"
                theme="dark"
                title="구매 확인"
                description="이 상품을 구매하시겠습니까?"
              />
            </div>
          </div>
        </div>

        {/* Info Cash */}
        <div>
          <h3 style={{ marginBottom: "16px" }}>Info - Cash Action</h3>
          <div style={{ display: "flex", gap: "24px" }}>
            <div>
              <p style={{ marginBottom: "8px", fontSize: "12px" }}>Light</p>
              <Modal
                variant="info"
                actions="cash"
                theme="light"
                title="포인트 충전"
                description="충전할 금액을 선택해주세요."
                dropdownOptions={cashOptions}
                dropdownPlaceholder="금액 선택"
              />
            </div>
            <div>
              <p style={{ marginBottom: "8px", fontSize: "12px" }}>Dark</p>
              <Modal
                variant="info"
                actions="cash"
                theme="dark"
                title="포인트 충전"
                description="충전할 금액을 선택해주세요."
                dropdownOptions={cashOptions}
                dropdownPlaceholder="금액 선택"
              />
            </div>
          </div>
        </div>

        {/* Danger Single */}
        <div>
          <h3 style={{ marginBottom: "16px" }}>Danger - Single Action</h3>
          <div style={{ display: "flex", gap: "24px" }}>
            <div>
              <p style={{ marginBottom: "8px", fontSize: "12px" }}>Light</p>
              <Modal
                variant="danger"
                actions="single"
                theme="light"
                title="주의"
                description="이 작업은 되돌릴 수 없습니다."
              />
            </div>
            <div>
              <p style={{ marginBottom: "8px", fontSize: "12px" }}>Dark</p>
              <Modal
                variant="danger"
                actions="single"
                theme="dark"
                title="주의"
                description="이 작업은 되돌릴 수 없습니다."
              />
            </div>
          </div>
        </div>

        {/* Danger Dual */}
        <div>
          <h3 style={{ marginBottom: "16px" }}>Danger - Dual Action</h3>
          <div style={{ display: "flex", gap: "24px" }}>
            <div>
              <p style={{ marginBottom: "8px", fontSize: "12px" }}>Light</p>
              <Modal
                variant="danger"
                actions="dual"
                theme="light"
                title="삭제 확인"
                description="정말로 삭제하시겠습니까?"
              />
            </div>
            <div>
              <p style={{ marginBottom: "8px", fontSize: "12px" }}>Dark</p>
              <Modal
                variant="danger"
                actions="dual"
                theme="dark"
                title="삭제 확인"
                description="정말로 삭제하시겠습니까?"
              />
            </div>
          </div>
        </div>
      </div>
    );
  },
};
