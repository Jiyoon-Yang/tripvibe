import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Tabs } from "./index";

const meta: Meta<typeof Tabs> = {
  title: "Commons/Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "select",
      options: ["primary-black", "secondary", "side", "primary-white"],
      description: "탭의 위치/스타일 variant",
    },
    size: {
      control: "select",
      options: ["s", "m"],
      description: "탭의 크기",
    },
    selected: {
      control: "select",
      options: ["on", "off"],
      description: "선택된 상태",
    },
    children: {
      control: "text",
      description: "탭에 표시될 텍스트",
    },
    onClick: {
      action: "clicked",
      description: "클릭 이벤트 핸들러",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Primary Black variants
export const PrimaryBlackMediumOff: Story = {
  args: {
    position: "primary-black",
    size: "m",
    selected: "off",
    children: "트립토크",
  },
};

export const PrimaryBlackMediumOn: Story = {
  args: {
    position: "primary-black",
    size: "m",
    selected: "on",
    children: "트립토크",
  },
};

export const PrimaryBlackSmallOff: Story = {
  args: {
    position: "primary-black",
    size: "s",
    selected: "off",
    children: "트립토크",
  },
};

export const PrimaryBlackSmallOn: Story = {
  args: {
    position: "primary-black",
    size: "s",
    selected: "on",
    children: "트립토크",
  },
};

// Secondary variants
export const SecondaryMediumOff: Story = {
  args: {
    position: "secondary",
    size: "m",
    selected: "off",
    children: "트립토크",
  },
};

export const SecondaryMediumOn: Story = {
  args: {
    position: "secondary",
    size: "m",
    selected: "on",
    children: "트립토크",
  },
};

export const SecondarySmallOff: Story = {
  args: {
    position: "secondary",
    size: "s",
    selected: "off",
    children: "트립토크",
  },
};

export const SecondarySmallOn: Story = {
  args: {
    position: "secondary",
    size: "s",
    selected: "on",
    children: "트립토크",
  },
};

// Primary White variants
export const PrimaryWhiteMediumOff: Story = {
  args: {
    position: "primary-white",
    size: "m",
    selected: "off",
    children: "트립토크",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const PrimaryWhiteMediumOn: Story = {
  args: {
    position: "primary-white",
    size: "m",
    selected: "on",
    children: "트립토크",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

// Side variants
export const SideMediumOff: Story = {
  args: {
    position: "side",
    size: "m",
    selected: "off",
    children: "트립토크",
  },
};

export const SideMediumOn: Story = {
  args: {
    position: "side",
    size: "m",
    selected: "on",
    children: "트립토크",
  },
};

export const SideSmallOff: Story = {
  args: {
    position: "side",
    size: "s",
    selected: "off",
    children: "트립토크",
  },
};

export const SideSmallOn: Story = {
  args: {
    position: "side",
    size: "s",
    selected: "on",
    children: "트립토크",
  },
};

// Interactive example
export const Interactive: Story = {
  args: {
    position: "secondary",
    size: "m",
    selected: "off",
    children: "클릭해보세요",
    onClick: () => alert("탭이 클릭되었습니다!"),
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        alignItems: "flex-start",
      }}>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <Tabs position="primary-black" size="m" selected="off">
          Primary Black Off
        </Tabs>
        <Tabs position="primary-black" size="m" selected="on">
          Primary Black On
        </Tabs>
      </div>

      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <Tabs position="secondary" size="m" selected="off">
          Secondary Off
        </Tabs>
        <Tabs position="secondary" size="m" selected="on">
          Secondary On
        </Tabs>
      </div>

      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <Tabs position="primary-white" size="m" selected="off">
          Primary White Off
        </Tabs>
        <Tabs position="primary-white" size="m" selected="on">
          Primary White On
        </Tabs>
      </div>

      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <Tabs position="side" size="m" selected="off">
          Side Off
        </Tabs>
        <Tabs position="side" size="m" selected="on">
          Side On
        </Tabs>
      </div>

      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <Tabs position="primary-black" size="s" selected="off">
          Small Off
        </Tabs>
        <Tabs position="primary-black" size="s" selected="on">
          Small On
        </Tabs>
      </div>
    </div>
  ),
  parameters: {
    layout: "padded",
  },
};
