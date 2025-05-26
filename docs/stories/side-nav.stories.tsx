import type { Meta, StoryObj } from "@storybook/react";

type SideNavArgs = {};

const meta: Meta<SideNavArgs> = {
  title: "SideNav",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<SideNavArgs>;

export const Primary: Story = {
  render: () => (
    <div className="side-nav" style={{ width: 272 }}>
      <div className="side-nav__item side-nav__item--active">Overview</div>
      <div className="side-nav__item">Subscriptions</div>
      <div className="side-nav__item">Connections</div>
      <div className="side-nav__item">Messages</div>
      <div className="side-nav__item">Developer</div>
      <div className="side-nav__item">Advanced</div>
    </div>
  ),
  args: {},
};
