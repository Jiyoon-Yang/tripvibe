import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Tabs } from "./index";

const meta: Meta<typeof Tabs> = {
  title: "Commons/Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "탭 컴포넌트는 다양한 위치와 크기, 선택 상태를 지원하는 완전한 variant 시스템을 제공합니다.",
      },
    },
  },
  argTypes: {
    position: {
      control: { type: "select" },
      options: ["primary-black", "secondary", "side", "primary-white"],
      description: "탭의 위치/스타일 variant",
    },
    size: {
      control: { type: "select" },
      options: ["s", "m"],
      description: "탭의 크기",
    },
    selected: {
      control: { type: "select" },
      options: ["on", "off"],
      description: "선택된 상태",
    },
    children: {
      control: { type: "text" },
      description: "탭의 텍스트 내용",
    },
    disabled: {
      control: { type: "boolean" },
      description: "비활성화 상태",
    },
    onClick: {
      action: "clicked",
      description: "클릭 핸들러",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

// 기본 스토리
export const Default: Story = {
  args: {
    children: "트립토크",
    position: "secondary",
    size: "m",
    selected: "off",
  },
};

// Primary Black Variants
export const PrimaryBlackOff: Story = {
  args: {
    children: "트립토크",
    position: "primary-black",
    size: "m",
    selected: "off",
  },
};

export const PrimaryBlackOn: Story = {
  args: {
    children: "트립토크",
    position: "primary-black",
    size: "m",
    selected: "on",
  },
};

export const PrimaryBlackSmall: Story = {
  args: {
    children: "트립토크",
    position: "primary-black",
    size: "s",
    selected: "off",
  },
};

export const PrimaryBlackSmallOn: Story = {
  args: {
    children: "트립토크",
    position: "primary-black",
    size: "s",
    selected: "on",
  },
};

// Primary White Variants
export const PrimaryWhiteOff: Story = {
  args: {
    children: "트립토크",
    position: "primary-white",
    size: "m",
    selected: "off",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const PrimaryWhiteOn: Story = {
  args: {
    children: "트립토크",
    position: "primary-white",
    size: "m",
    selected: "on",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

// Secondary Variants
export const SecondaryOff: Story = {
  args: {
    children: "트립토크",
    position: "secondary",
    size: "m",
    selected: "off",
  },
};

export const SecondaryOn: Story = {
  args: {
    children: "트립토크",
    position: "secondary",
    size: "m",
    selected: "on",
  },
};

export const SecondarySmall: Story = {
  args: {
    children: "트립토크",
    position: "secondary",
    size: "s",
    selected: "off",
  },
};

export const SecondarySmallOn: Story = {
  args: {
    children: "트립토크",
    position: "secondary",
    size: "s",
    selected: "on",
  },
};

// Side Variants
export const SideOff: Story = {
  args: {
    children: "트립토크",
    position: "side",
    size: "m",
    selected: "off",
  },
};

export const SideOn: Story = {
  args: {
    children: "트립토크",
    position: "side",
    size: "m",
    selected: "on",
  },
};

export const SideSmall: Story = {
  args: {
    children: "트립토크",
    position: "side",
    size: "s",
    selected: "off",
  },
};

export const SideSmallOn: Story = {
  args: {
    children: "트립토크",
    position: "side",
    size: "s",
    selected: "on",
  },
};

// Disabled State
export const Disabled: Story = {
  args: {
    children: "트립토크",
    position: "secondary",
    size: "m",
    selected: "off",
    disabled: true,
  },
};

// Interactive Example
export const Interactive: Story = {
  args: {
    children: "클릭해보세요",
    position: "secondary",
    size: "m",
    selected: "off",
  },
  parameters: {
    docs: {
      description: {
        story: "탭을 클릭하여 상호작용을 확인할 수 있습니다.",
      },
    },
  },
};

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
      }}>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Tabs position="primary-black" size="m" selected="off">
          Primary Black Off
        </Tabs>
        <Tabs position="primary-black" size="m" selected="on">
          Primary Black On
        </Tabs>
        <Tabs position="primary-black" size="s" selected="off">
          Primary Black S Off
        </Tabs>
        <Tabs position="primary-black" size="s" selected="on">
          Primary Black S On
        </Tabs>
      </div>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Tabs position="primary-white" size="m" selected="off">
          Primary White Off
        </Tabs>
        <Tabs position="primary-white" size="m" selected="on">
          Primary White On
        </Tabs>
      </div>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Tabs position="secondary" size="m" selected="off">
          Secondary Off
        </Tabs>
        <Tabs position="secondary" size="m" selected="on">
          Secondary On
        </Tabs>
        <Tabs position="secondary" size="s" selected="off">
          Secondary S Off
        </Tabs>
        <Tabs position="secondary" size="s" selected="on">
          Secondary S On
        </Tabs>
      </div>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Tabs position="side" size="m" selected="off">
          Side Off
        </Tabs>
        <Tabs position="side" size="m" selected="on">
          Side On
        </Tabs>
        <Tabs position="side" size="s" selected="off">
          Side S Off
        </Tabs>
        <Tabs position="side" size="s" selected="on">
          Side S On
        </Tabs>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "모든 variant 조합을 한 번에 확인할 수 있습니다.",
      },
    },
  },
};
