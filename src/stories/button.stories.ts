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

const buttonVariants = cva({
  base: "button",
  variants: {
    color: {
      primary: [],
      danger: [],
      neutral: [],
      success: [],
    },

    variant: {
      solid: [],
      outlined: [],
      tonal: [],
      text: [],
    },

    size: {
      default: "button--default",
      large: "button--large",
      small: "button--small",
    },
  },
  compoundVariants: [
    {
      variant: "solid",
      color: "primary",
      className: "button--primary-solid",
    },
    {
      variant: "solid",
      color: "success",
      className: "button--success-solid",
    },
    {
      variant: "solid",
      color: "danger",
      className: "button--danger-solid",
    },
    {
      variant: "solid",
      color: "neutral",
      className: "button--neutral-solid",
    },
    {
      variant: "outlined",
      color: "primary",
      className: "button--primary-outlined",
    },
    {
      variant: "outlined",
      color: "success",
      className: "button--success-outlined",
    },
    {
      variant: "outlined",
      color: "danger",
      className: "button--danger-outlined",
    },
    {
      variant: "outlined",
      color: "neutral",
      className: "button--neutral-outlined",
    },
    {
      variant: "tonal",
      color: "primary",
      className: "button--primary-tonal",
    },
    {
      variant: "tonal",
      color: "success",
      className: "button--success-tonal",
    },
    {
      variant: "tonal",
      color: "danger",
      className: "button--danger-tonal",
    },
    {
      variant: "tonal",
      color: "neutral",
      className: "button--neutral-tonal",
    },
    {
      variant: "text",
      color: "primary",
      className: "button--primary-text",
    },
    {
      variant: "text",
      color: "success",
      className: "button--success-text",
    },
    {
      variant: "text",
      color: "danger",
      className: "button--danger-text",
    },
    {
      variant: "text",
      color: "neutral",
      className: "button--neutral-text",
    },
  ],
});

export const Primary: Story = {
  render: (args) => {
    const button = document.createElement("button");

    button.innerText = args.label;
    button.disabled = args.disabled;
    button.className = buttonVariants({
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
