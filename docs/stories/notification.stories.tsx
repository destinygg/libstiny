import type { Meta, StoryObj } from "@storybook/react";
import { Button, Notification } from "@destinygg/libstiny/react";

const meta = {
  title: "Notification",
  component: Notification,
  tags: ["autodocs"],
  argTypes: {
    intent: {
      control: "select",
      options: ["primary", "success", "danger", "neutral"],
    },
    type: { control: "inline-radio", options: ["alert", "toast"] },
  },
  args: {
    intent: "neutral",
    type: "alert",
    title: "Notification Title",
    message: "Supporting copy that explains what just happened.",
  },
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

// The colour and size axes combine freely.
export const Alert: Story = {
  render: (args) => (
    <Notification
      {...args}
      action={<Button intent="secondary">Action</Button>}
    />
  ),
};

export const Toast: Story = {
  ...Alert,
  args: { type: "toast" },
};

// Danger gets `role="alert"`; everything else gets `role="status"`.
export const Danger: Story = {
  ...Alert,
  args: { intent: "danger" },
};

export const Success: Story = { ...Alert, args: { intent: "success" } };
