import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@destinygg/libstiny/react";

const meta = {
  title: "Switch",
  component: Switch,
  tags: ["autodocs"],
  args: {
    children: "Toggle me",
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

// A native checkbox with role="switch": Space toggles it and screen readers
// announce it as on or off.
export const Primary: Story = {};

export const On: Story = {
  args: { defaultChecked: true },
};
