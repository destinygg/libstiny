import type { Meta, StoryObj } from "@storybook/html";
import { cva } from "cva";

type ButtonArgs = {
  color: "primary" | "success" | "danger" | "neutral";
  variant: "solid" | "outlined" | "tonal" | "text";
  size: "default" | "small" | "large";
  disabled: boolean;
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
    size: {
      options: ["default", "small", "large"],
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

    size: {
      default: "default",
      large: "large",
      small: "small",
    },
  },
});

export const Primary: Story = {
  render: (args) => {
    const button = document.createElement("button");

    button.innerText = args.label;
    button.disabled = args.disabled;
    button.className = badgeVariants({
      variant: args.variant,
      color: args.color,
      size: args.size,
    });

    return button;
  },
  args: {
    color: "primary",
    variant: "solid",
    size: "default",
    disabled: false,
    label: "Button",
  },
};
