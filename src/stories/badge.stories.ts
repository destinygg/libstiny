import type { Meta, StoryObj } from "@storybook/html";
import { cva } from "cva";

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

const badgeVariants = cva({
  base: "badge",
  variants: {
    variant: {
      primary: "badge--primary",
      danger: "badge--danger",
      neutral: "badge--neutral",
      success: "badge--success",
    },
  },
});

export const Primary: Story = {
  render: (args) => {
    const badge = document.createElement("span");
    badge.innerText = args.label;
    badge.className = badgeVariants({ variant: args.variant });
    return badge;
  },
  args: {
    variant: "primary",
    label: "Badge Content",
  },
};
