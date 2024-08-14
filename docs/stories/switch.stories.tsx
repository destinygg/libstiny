import type { Meta, StoryObj } from "@storybook/react";

type SwitchArgs = {};

const meta: Meta<SwitchArgs> = {
  title: "Switch",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<SwitchArgs>;

export const Primary: Story = {
  render: () => (
    <label className="switch">
      <span className="switch__toggle">
        <input type="checkbox" />
        <span className="switch__slider switch__slider--round"></span>
      </span>
      <span className="switch__label">Toggle me</span>
    </label>
  ),
  args: {},
};
