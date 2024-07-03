import type { Meta, StoryObj } from "@storybook/react";
import { buttonComponent } from "../components/button";

type ButtonArgs = {
  intent: "primary" | "secondary" | "tertiary" | "danger";
  size: "default" | "small" | "large";
  disabled: boolean;
  iconOnly: boolean;
  label: string;
};

const meta: Meta<ButtonArgs> = {
  title: "Button",
  tags: ["autodocs"],
  argTypes: {
    intent: {
      options: ["primary", "secondary", "tertiary", "danger"],
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
        intent: args.intent,
        size: args.size,
        iconOnly: args.iconOnly,
      })}
      disabled={args.disabled}
    >
      {args.iconOnly ? "i" : args.label}
    </button>
  ),
  args: {
    intent: "primary",
    size: "default",
    iconOnly: false,
    disabled: false,
    label: "Button",
  },
};
