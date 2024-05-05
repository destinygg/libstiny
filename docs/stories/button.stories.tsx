import type { Meta, StoryObj } from "@storybook/react";
import { buttonComponent } from "../components/button";

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

export const Primary: Story = {
  render: (args) => (
    <button
      className={buttonComponent({
        variant: args.variant,
        color: args.color,
        size: args.size,
      })}
      disabled={args.disabled}
    >
      {args.label}
    </button>
  ),
  args: {
    color: "primary",
    variant: "solid",
    size: "default",
    disabled: false,
    label: "Button",
  },
};
