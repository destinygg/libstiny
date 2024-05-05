import type { Meta, StoryObj } from "@storybook/react";
import { badgeComponent } from "../components/badge";

type BadgeArgs = {
  variant: "primary" | "success" | "danger" | "neutral";
  label: string;
};

const meta: Meta<BadgeArgs> = {
  title: "Badge",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "success", "danger", "neutral"],
      control: {
        type: "select",
      },
    },
  },
};

export default meta;

type Story = StoryObj<BadgeArgs>;

export const Primary: Story = {
  render: (args) => (
    <span className={badgeComponent({ variant: args.variant })}>
      {args.label}
    </span>
  ),
  args: {
    variant: "primary",
    label: "Badge Content",
  },
};
