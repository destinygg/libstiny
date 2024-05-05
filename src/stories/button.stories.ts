import type { Meta, StoryObj } from "@storybook/html";
import { cva } from "cva";

type ButtonArgs = {
  color: "primary" | "success" | "danger" | "neutral";
  variant: "solid" | "outlined" | "tonal" | "text";
  label: string;
};

const meta: Meta<ButtonArgs> = {
  title: "Button",
  tags: ["autodocs"],
  argTypes: {
    color: {
      options: ["primary", "success", "danger", "neutral"],
      control: {
        type: "select",
      },
    },
    variant: {
      options: ["solid", "outlined", "tonal", "text"],
      control: {
        type: "select",
      },
    },
  },
};

export default meta;

type Story = StoryObj<ButtonArgs>;

const badgeVariants = cva({
  base: "button",
  variants: {
    color: {
      primary: "primary",
      danger: "danger",
      neutral: "neutral",
      success: "success",
    },

    variant: {
      solid: "solid",
      outlined: "outlined",
      tonal: "tonal",
      text: "text",
    },
  },
});

export const Primary: Story = {
  render: (args) => {
    const badge = document.createElement("button");
    badge.innerText = args.label;
    badge.className = badgeVariants({
      variant: args.variant,
      color: args.color,
    });
    return badge;
  },
  args: {
    color: "primary",
    variant: "solid",
    label: "Button",
  },
};
