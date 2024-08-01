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
    <div className="switch">
      <label className="switch__toggle">
        <input type="checkbox" id="switch-demo" />
        <span className="switch__slider"></span>
      </label>

      <label className="switch__label" htmlFor="switch-demo">
        This is the label
      </label>
    </div>
  ),
  args: {},
};
