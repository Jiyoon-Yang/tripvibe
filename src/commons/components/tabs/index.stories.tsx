import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import React from "react";
import { Tabs } from "./index";

/**
 * Tabs Component Stories
 *
 * 다양한 position과 size를 지원하는 탭 컴포넌트의 Storybook 문서
 * - 4가지 position (primary-black, primary-white, secondary, side)
 * - 2가지 size (s, m)
 * - 2가지 선택 상태 (on, off)
 * - 비활성화 상태 지원
 */
const meta = {
  title: "Commons/Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "다양한 위치와 스타일을 지원하는 탭 컴포넌트입니다. primary-black, primary-white, secondary, side 4가지 position과 s, m 2가지 크기를 조합하여 사용할 수 있습니다. side position은 아이콘과 화살표를 포함한 특별한 레이아웃을 제공합니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "select",
      options: ["primary-black", "primary-white", "secondary", "side"],
      description: "탭의 위치/스타일 variant",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "primary-black" },
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
    children: {
      control: "text",
      description: "탭에 표시될 텍스트",
      table: {
        type: { summary: "ReactNode" },
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
    className: {
      control: "text",
      description: "추가 CSS 클래스",
      table: {
        type: { summary: "string" },
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
    children: "선택된 탭",
  },
};

export const PrimaryBlackDisabled: Story = {
  args: {
    position: "primary-black",
    size: "m",
    selected: "off",
    children: "비활성화된 탭",
    disabled: true,
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
      <div style={{ background: "#333", padding: "20px", borderRadius: "8px" }}>
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
      <div style={{ background: "#333", padding: "20px", borderRadius: "8px" }}>
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
    children: "선택된 탭",
  },
  decorators: [
    (Story) => (
      <div style={{ background: "#333", padding: "20px", borderRadius: "8px" }}>
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
    children: "비활성화된 탭",
    disabled: true,
  },
  decorators: [
    (Story) => (
      <div style={{ background: "#333", padding: "20px", borderRadius: "8px" }}>
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
    children: "선택된 탭",
  },
};

export const SecondaryDisabled: Story = {
  args: {
    position: "secondary",
    size: "m",
    selected: "off",
    children: "비활성화된 탭",
    disabled: true,
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
    children: "사이드 탭",
  },
};

export const SideMedium: Story = {
  args: {
    position: "side",
    size: "m",
    selected: "off",
    children: "사이드 탭",
  },
};

export const SideSelected: Story = {
  args: {
    position: "side",
    size: "m",
    selected: "on",
    children: "선택된 사이드 탭",
  },
};

export const SideDisabled: Story = {
  args: {
    position: "side",
    size: "m",
    selected: "off",
    children: "비활성화된 사이드 탭",
    disabled: true,
  },
};

// ============================================
// 인터랙티브 예제
// ============================================

export const Interactive: Story = {
  args: {
    position: "primary-black",
    size: "m",
    selected: "off",
    children: "인터랙티브 탭",
  },
  render: function InteractiveTabs(args) {
    const [selected, setSelected] = React.useState(args.selected);

    React.useEffect(() => {
      setSelected(args.selected);
    }, [args.selected]);

    const handleClick = () => {
      setSelected(selected === "on" ? "off" : "on");
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          alignItems: "center",
        }}>
        <Tabs {...args} selected={selected} onClick={handleClick} />
        <div style={{ fontSize: "14px", color: "#666" }}>
          선택 상태: {selected === "on" ? "선택됨" : "선택 안됨"}
        </div>
      </div>
    );
  },
};

// ============================================
// 탭 그룹 예제
// ============================================

export const TabGroup: Story = {
  args: {
    position: "primary-black",
    size: "m",
    selected: "off",
    children: "탭",
  },
  render: function TabGroupExample() {
    const [activeTab, setActiveTab] = React.useState(0);
    const tabs = ["홈", "검색", "마이페이지", "설정"];

    return (
      <div style={{ display: "flex", gap: "8px" }}>
        {tabs.map((tab, index) => (
          <Tabs
            key={tab}
            position="primary-black"
            size="m"
            selected={activeTab === index ? "on" : "off"}
            onClick={() => setActiveTab(index)}>
            {tab}
          </Tabs>
        ))}
      </div>
    );
  },
};

export const SideTabGroup: Story = {
  args: {
    position: "side",
    size: "m",
    selected: "off",
    children: "탭",
  },
  render: function SideTabGroupExample() {
    const [activeTab, setActiveTab] = React.useState(0);
    const tabs = ["대시보드", "프로젝트", "팀", "설정"];

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        {tabs.map((tab, index) => (
          <Tabs
            key={tab}
            position="side"
            size="m"
            selected={activeTab === index ? "on" : "off"}
            onClick={() => setActiveTab(index)}>
            {tab}
          </Tabs>
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
    position: "primary-black",
    size: "m",
    selected: "off",
    children: "탭",
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
      {(["primary-black", "primary-white", "secondary", "side"] as const).map(
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
              {(["s", "m"] as const).map((size) => (
                <div
                  key={size}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}>
                  <Tabs position={position} size={size} selected="off">
                    {size.toUpperCase()}
                  </Tabs>
                  <Tabs position={position} size={size} selected="on">
                    {size.toUpperCase()} 선택됨
                  </Tabs>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  ),
  decorators: [
    (Story) => (
      <div
        style={{ background: "#f8f9fa", padding: "20px", borderRadius: "8px" }}>
        <Story />
      </div>
    ),
  ],
};

// ============================================
// 다크 테마 예제
// ============================================

export const DarkTheme: Story = {
  args: {
    position: "primary-white",
    size: "m",
    selected: "off",
    children: "다크 테마 탭",
  },
  render: () => (
    <div
      style={{ background: "#1a1a1a", padding: "20px", borderRadius: "8px" }}>
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <Tabs position="primary-white" size="m" selected="off">
          홈
        </Tabs>
        <Tabs position="primary-white" size="m" selected="on">
          검색
        </Tabs>
        <Tabs position="primary-white" size="m" selected="off">
          마이페이지
        </Tabs>
        <Tabs position="primary-white" size="m" selected="off" disabled>
          설정
        </Tabs>
      </div>
    </div>
  ),
};

// ============================================
// 사이드바 예제
// ============================================

export const SidebarExample: Story = {
  args: {
    position: "side",
    size: "m",
    selected: "off",
    children: "탭",
  },
  render: function SidebarExample() {
    const [activeTab, setActiveTab] = React.useState(0);
    const menuItems = [
      "대시보드",
      "프로젝트 관리",
      "팀원 관리",
      "리포트",
      "설정",
      "도움말",
    ];

    return (
      <div
        style={{
          display: "flex",
          background: "#f8f9fa",
          borderRadius: "8px",
          overflow: "hidden",
        }}>
        <div
          style={{
            width: "240px",
            background: "#fff",
            borderRight: "1px solid #e0e0e0",
          }}>
          <div style={{ padding: "16px 0" }}>
            {menuItems.map((item, index) => (
              <Tabs
                key={item}
                position="side"
                size="m"
                selected={activeTab === index ? "on" : "off"}
                onClick={() => setActiveTab(index)}>
                {item}
              </Tabs>
            ))}
          </div>
        </div>
        <div style={{ flex: 1, padding: "20px" }}>
          <h2>선택된 메뉴: {menuItems[activeTab]}</h2>
          <p>여기에 해당 메뉴의 내용이 표시됩니다.</p>
        </div>
      </div>
    );
  },
};
