import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { Tabs } from "./index";

/**
 * Tabs Component Stories
 *
 * 탭 UI 컴포넌트의 Storybook 문서
 * - 4가지 position (primary-black, primary-white, secondary, side)
 * - 2가지 size (s, m)
 * - 다양한 탭 개수별 variant
 */
const meta = {
  title: "Commons/Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "탭 UI 컴포넌트입니다. Figma 디자인을 기반으로 다양한 variant를 지원하며, s와 m 두 가지 크기와 4가지 포지션(primary-black, primary-white, secondary, side)을 제공합니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    items: {
      description: "탭 아이템 목록 (id와 label로 구성)",
      table: {
        type: { summary: "TabItem[]" },
      },
    },
    selectedId: {
      control: "text",
      description: "현재 선택된 탭의 id",
      table: {
        type: { summary: "string" },
      },
    },
    onTabChange: {
      description: "탭 변경 이벤트 핸들러",
      action: "tab changed",
      table: {
        type: { summary: "(id: string) => void" },
      },
    },
    position: {
      control: "select",
      options: ["primary-black", "primary-white", "secondary", "side"],
      description: "탭 스타일 포지션",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "primary-black" },
      },
    },
    size: {
      control: "select",
      options: ["s", "m"],
      description: "컴포넌트 크기",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "m" },
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
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// 공통 탭 데이터
const twoTabs = [
  { id: "tab1", label: "탭 1" },
  { id: "tab2", label: "탭 2" },
];

const threeTabs = [
  { id: "tab1", label: "탭 1" },
  { id: "tab2", label: "탭 2" },
  { id: "tab3", label: "탭 3" },
];

const fourTabs = [
  { id: "tab1", label: "탭 1" },
  { id: "tab2", label: "탭 2" },
  { id: "tab3", label: "탭 3" },
  { id: "tab4", label: "탭 4" },
];

const fiveTabs = [
  { id: "tab1", label: "전체" },
  { id: "tab2", label: "인기" },
  { id: "tab3", label: "최신" },
  { id: "tab4", label: "댓글순" },
  { id: "tab5", label: "좋아요순" },
];

// ============================================
// Position 별 기본 스토리
// ============================================

export const PrimaryBlack: Story = {
  args: {
    items: threeTabs,
    selectedId: "tab1",
    position: "primary-black",
    size: "m",
    onTabChange: (id) => console.log("Tab changed to:", id),
  },
};

export const PrimaryWhite: Story = {
  args: {
    items: threeTabs,
    selectedId: "tab1",
    position: "primary-white",
    size: "m",
    onTabChange: (id) => console.log("Tab changed to:", id),
  },
};

export const Secondary: Story = {
  args: {
    items: threeTabs,
    selectedId: "tab1",
    position: "secondary",
    size: "m",
    onTabChange: (id) => console.log("Tab changed to:", id),
  },
};

export const Side: Story = {
  args: {
    items: threeTabs,
    selectedId: "tab1",
    position: "side",
    size: "m",
    onTabChange: (id) => console.log("Tab changed to:", id),
  },
};

// ============================================
// Size 별 기본 스토리
// ============================================

export const Small: Story = {
  args: {
    items: threeTabs,
    selectedId: "tab2",
    position: "primary-black",
    size: "s",
    onTabChange: (id) => console.log("Tab changed to:", id),
  },
};

export const Medium: Story = {
  args: {
    items: threeTabs,
    selectedId: "tab2",
    position: "primary-black",
    size: "m",
    onTabChange: (id) => console.log("Tab changed to:", id),
  },
};

// ============================================
// 탭 개수별 스토리
// ============================================

export const TwoTabs: Story = {
  args: {
    items: twoTabs,
    selectedId: "tab1",
    position: "primary-black",
    size: "m",
    onTabChange: (id) => console.log("Tab changed to:", id),
  },
};

export const ThreeTabs: Story = {
  args: {
    items: threeTabs,
    selectedId: "tab2",
    position: "primary-black",
    size: "m",
    onTabChange: (id) => console.log("Tab changed to:", id),
  },
};

export const FourTabs: Story = {
  args: {
    items: fourTabs,
    selectedId: "tab2",
    position: "primary-black",
    size: "m",
    onTabChange: (id) => console.log("Tab changed to:", id),
  },
};

export const FiveTabs: Story = {
  args: {
    items: fiveTabs,
    selectedId: "tab1",
    position: "primary-black",
    size: "m",
    onTabChange: (id) => console.log("Tab changed to:", id),
  },
};

// ============================================
// 선택된 탭 위치별 스토리
// ============================================

export const FirstTabSelected: Story = {
  args: {
    items: fiveTabs,
    selectedId: "tab1",
    position: "primary-black",
    size: "m",
    onTabChange: (id) => console.log("Tab changed to:", id),
  },
};

export const MiddleTabSelected: Story = {
  args: {
    items: fiveTabs,
    selectedId: "tab3",
    position: "primary-black",
    size: "m",
    onTabChange: (id) => console.log("Tab changed to:", id),
  },
};

export const LastTabSelected: Story = {
  args: {
    items: fiveTabs,
    selectedId: "tab5",
    position: "primary-black",
    size: "m",
    onTabChange: (id) => console.log("Tab changed to:", id),
  },
};

// ============================================
// 인터랙티브 예제
// ============================================

export const Interactive: Story = {
  args: {
    items: threeTabs,
    selectedId: "tab1",
    position: "primary-black",
    size: "m",
    onTabChange: (id) => console.log("Tab changed to:", id),
  },
  render: function InteractiveTabs(args) {
    const [selectedId, setSelectedId] = React.useState(args.selectedId);

    React.useEffect(() => {
      setSelectedId(args.selectedId);
    }, [args.selectedId]);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          alignItems: "center",
        }}>
        <Tabs {...args} selectedId={selectedId} onTabChange={setSelectedId} />
        <div
          style={{
            padding: "16px",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            minWidth: "200px",
            textAlign: "center",
          }}>
          <div style={{ fontSize: "14px", color: "#666", marginBottom: "8px" }}>
            선택된 탭
          </div>
          <div style={{ fontSize: "18px", fontWeight: "bold" }}>
            {args.items.find((item) => item.id === selectedId)?.label}
          </div>
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
    items: threeTabs,
    selectedId: "tab1",
    onTabChange: (id) => console.log("Tab changed to:", id),
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
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Primary Black */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ width: "150px", fontSize: "14px" }}>
                Primary Black:
              </span>
              <Tabs
                items={threeTabs}
                selectedId="tab2"
                position="primary-black"
                size={size}
                onTabChange={() => {}}
              />
            </div>

            {/* Primary White */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                background: "#000",
                padding: "16px",
                borderRadius: "8px",
              }}>
              <span style={{ width: "150px", fontSize: "14px", color: "#fff" }}>
                Primary White:
              </span>
              <Tabs
                items={threeTabs}
                selectedId="tab2"
                position="primary-white"
                size={size}
                onTabChange={() => {}}
              />
            </div>

            {/* Secondary */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ width: "150px", fontSize: "14px" }}>
                Secondary:
              </span>
              <Tabs
                items={threeTabs}
                selectedId="tab2"
                position="secondary"
                size={size}
                onTabChange={() => {}}
              />
            </div>

            {/* Side */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ width: "150px", fontSize: "14px" }}>Side:</span>
              <Tabs
                items={threeTabs}
                selectedId="tab2"
                position="side"
                size={size}
                onTabChange={() => {}}
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

export const WithContent: Story = {
  args: {
    items: threeTabs,
    selectedId: "tab1",
    position: "primary-black",
    size: "m",
    onTabChange: (id) => console.log("Tab changed to:", id),
  },
  render: function WithContentExample(args) {
    const [selectedId, setSelectedId] = React.useState(args.selectedId);

    const contentMap: Record<string, string> = {
      tab1: "첫 번째 탭의 콘텐츠입니다.",
      tab2: "두 번째 탭의 콘텐츠입니다.",
      tab3: "세 번째 탭의 콘텐츠입니다.",
    };

    React.useEffect(() => {
      setSelectedId(args.selectedId);
    }, [args.selectedId]);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          width: "600px",
        }}>
        <Tabs {...args} selectedId={selectedId} onTabChange={setSelectedId} />
        <div
          style={{
            padding: "32px",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            minHeight: "200px",
            background: "#fafafa",
          }}>
          <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
            {contentMap[selectedId]}
          </p>
        </div>
      </div>
    );
  },
};

// ============================================
// Side Position 상세 예제
// ============================================

export const SidePositionExample: Story = {
  args: {
    items: [
      { id: "account", label: "계정 설정" },
      { id: "profile", label: "프로필 관리" },
      { id: "privacy", label: "개인정보 보호" },
      { id: "notification", label: "알림 설정" },
    ],
    selectedId: "account",
    position: "side",
    size: "m",
    onTabChange: (id) => console.log("Tab changed to:", id),
  },
  render: function SideExample(args) {
    const [selectedId, setSelectedId] = React.useState(args.selectedId);

    const contentMap: Record<string, { title: string; content: string }> = {
      account: {
        title: "계정 설정",
        content:
          "계정 관련 설정을 관리합니다. 이메일, 비밀번호 등을 변경할 수 있습니다.",
      },
      profile: {
        title: "프로필 관리",
        content: "프로필 사진, 닉네임, 자기소개 등을 수정할 수 있습니다.",
      },
      privacy: {
        title: "개인정보 보호",
        content: "개인정보 공개 범위 및 보안 설정을 관리합니다.",
      },
      notification: {
        title: "알림 설정",
        content: "이메일, 푸시 알림 등 알림 관련 설정을 조정합니다.",
      },
    };

    React.useEffect(() => {
      setSelectedId(args.selectedId);
    }, [args.selectedId]);

    return (
      <div
        style={{
          display: "flex",
          gap: "32px",
          width: "800px",
        }}>
        {/* Side Tabs */}
        <div style={{ width: "250px" }}>
          <Tabs {...args} selectedId={selectedId} onTabChange={setSelectedId} />
        </div>

        {/* Content Area */}
        <div
          style={{
            flex: 1,
            padding: "32px",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            background: "#fafafa",
          }}>
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "16px",
            }}>
            {contentMap[selectedId]?.title}
          </h3>
          <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#666" }}>
            {contentMap[selectedId]?.content}
          </p>
        </div>
      </div>
    );
  },
};

// ============================================
// 긴 레이블 처리 예제
// ============================================

export const LongLabels: Story = {
  args: {
    items: [
      { id: "tab1", label: "매우 긴 탭 레이블 예제 1" },
      { id: "tab2", label: "매우 긴 탭 레이블 예제 2" },
      { id: "tab3", label: "매우 긴 탭 레이블 예제 3" },
    ],
    selectedId: "tab1",
    position: "primary-black",
    size: "m",
    onTabChange: (id) => console.log("Tab changed to:", id),
  },
};

// ============================================
// 다양한 탭 개수 비교
// ============================================

export const TabCountComparison: Story = {
  args: {
    items: threeTabs,
    selectedId: "tab1",
    position: "primary-black",
    size: "m",
    onTabChange: (id) => console.log("Tab changed to:", id),
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <div>
        <h4 style={{ marginBottom: "12px", fontSize: "14px", color: "#666" }}>
          2개 탭
        </h4>
        <Tabs
          items={twoTabs}
          selectedId="tab1"
          position="primary-black"
          size="m"
          onTabChange={() => {}}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", fontSize: "14px", color: "#666" }}>
          3개 탭
        </h4>
        <Tabs
          items={threeTabs}
          selectedId="tab2"
          position="primary-black"
          size="m"
          onTabChange={() => {}}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", fontSize: "14px", color: "#666" }}>
          4개 탭
        </h4>
        <Tabs
          items={fourTabs}
          selectedId="tab3"
          position="primary-black"
          size="m"
          onTabChange={() => {}}
        />
      </div>

      <div>
        <h4 style={{ marginBottom: "12px", fontSize: "14px", color: "#666" }}>
          5개 탭
        </h4>
        <Tabs
          items={fiveTabs}
          selectedId="tab4"
          position="primary-black"
          size="m"
          onTabChange={() => {}}
        />
      </div>
    </div>
  ),
};
