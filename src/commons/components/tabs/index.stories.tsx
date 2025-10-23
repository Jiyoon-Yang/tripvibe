// eslint-disable-next-line storybook/no-renderer-packages
import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./index";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: { type: "select" },
      options: ["primary-black", "secondary", "side", "primary-white"],
    },
    size: {
      control: { type: "select" },
      options: ["s", "m"],
    },
    selected: {
      control: { type: "select" },
      options: ["on", "off"],
    },
    children: {
      control: { type: "text" },
    },
    onClick: { action: "clicked" },
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

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
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

      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
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

      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
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

      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          background: "#000",
          padding: "10px",
          borderRadius: "8px",
        }}>
        <Tabs position="primary-white" size="m" selected="off">
          Primary White Off
        </Tabs>
        <Tabs position="primary-white" size="m" selected="on">
          Primary White On
        </Tabs>
      </div>
    </div>
  ),
};
