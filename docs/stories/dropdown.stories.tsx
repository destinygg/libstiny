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
      <div className="dropdown-item">Account Settings</div>
      <div className="dropdown-item">Subscriptions</div>
      <div className="dropdown-item">Connections</div>
      <div className="dropdown-item">Messages</div>
      <div className="dropdown-item">Authentication</div>
      <div className="dropdown-item">Developer</div>
      <div className="dropdown-item">Advanced</div>
      <hr />
      <div className="dropdown-item">Log Out</div>
    </div>
  ),
  args: {},
};
