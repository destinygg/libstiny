import type { Meta, StoryObj } from "@storybook/react";

type SwitchArgs = {
  size: "default" | "small";
  label: string;
};

const meta: Meta<SwitchArgs> = {
  title: "Switch",
  tags: ["autodocs"],
  argTypes: {
    size: {
      options: ["default", "small"],
      control: {
        type: "select",
      },
    },
  },
};

export default meta;

type Story = StoryObj<SwitchArgs>;

export const Primary: Story = {
  render: (args) => (
    <label className={`switch${args.size === "small" ? " switch--small" : ""}`}>
      <span className="switch__toggle">
        <input type="checkbox" />
        <span className="switch__slider switch__slider--round"></span>
      </span>
      <span className="switch__label">{args.label}</span>
    </label>
  ),
  args: {
    size: "default",
    label: "Toggle me",
  },
};
