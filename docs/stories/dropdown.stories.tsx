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
      <div className="menu-item">Account Settings</div>
      <div className="menu-item">Subscriptions</div>
      <div className="menu-item">Connections</div>
      <div className="menu-item">Messages</div>
      <div className="menu-item">Authentication</div>
      <div className="menu-item">Developer</div>
      <div className="menu-item">Advanced</div>
      <hr />
      <div className="menu-item">Log Out</div>
    </div>
  ),
  args: {},
};
