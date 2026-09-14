import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@destinygg/libstiny/react";

const meta = {
  title: "Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: {
    children: "Toggle me",
    disabled: false,
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Checked: Story = {
  args: { defaultChecked: true },
};

export const Disabled: Story = {
  args: { defaultChecked: true, disabled: true },
};
