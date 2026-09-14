import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@destinygg/libstiny/react";

const meta = {
  title: "Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    intent: {
      control: "select",
      options: ["primary", "success", "danger", "neutral", "accent"],
    },
  },
  args: { intent: "primary", children: "Badge" },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Success: Story = { args: { intent: "success" } };
export const Danger: Story = { args: { intent: "danger" } };
export const Neutral: Story = { args: { intent: "neutral" } };
export const Accent: Story = { args: { intent: "accent" } };
