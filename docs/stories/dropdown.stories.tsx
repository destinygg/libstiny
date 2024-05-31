import type { Meta, StoryObj } from "@storybook/react";

type DropdownArgs = {};

const meta: Meta<DropdownArgs> = {
  title: "Dropdown",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<DropdownArgs>;

export const Primary: Story = {
  render: () => (
    <div className="dropdown" style={{ width: 280 }}>
      <div className="dropdown__item">Account Settings</div>
      <div className="dropdown__item">Subscriptions</div>
      <div className="dropdown__item">Connections</div>
      <div className="dropdown__item">Messages</div>
      <div className="dropdown__item">Authentication</div>
      <div className="dropdown__item">Developer</div>
      <div className="dropdown__item">Advanced</div>
      <hr />
      <div className="dropdown__item">Log Out</div>
    </div>
  ),
  args: {},
};
