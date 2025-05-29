import type { Meta, StoryObj } from "@storybook/react";

type SideNavArgs = {};

const meta: Meta<SideNavArgs> = {
  title: "SideNav",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<SideNavArgs>;

const Icon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.3337 3.33319C18.3337 3.33319 17.7503 5.08319 16.667 6.16652C18.0003 14.4999 8.83366 20.5832 1.66699 15.8332C3.50033 15.9165 5.33366 15.3332 6.66699 14.1665C2.50033 12.9165 0.416992 7.99986 2.50033 4.16652C4.33366 6.33319 7.16699 7.58319 10.0003 7.49986C9.25033 3.99986 13.3337 1.99986 15.8337 4.33319C16.7503 4.33319 18.3337 3.33319 18.3337 3.33319Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Primary: Story = {
  render: () => (
    <div className="side-nav" style={{ width: "12rem", height: 545 }}>
      <div className="side-nav__category">
        <div className="side-nav__item side-nav__item--active">
          <Icon />
          Overview
        </div>
        <div className="side-nav__item">
          <Icon />
          Subscriptions
        </div>
        <div className="side-nav__item">
          <Icon />
          Connections
        </div>
        <div className="side-nav__item">
          <Icon />
          Messages
        </div>
        <div className="side-nav__item">
          <Icon />
          Developer
        </div>
        <div className="side-nav__item">
          <Icon />
          Advanced
        </div>
      </div>
      <div
        className="side-nav__art"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img
          src="/gemzar-do-not-pull.png"
          style={{ width: 180, height: 180 }}
        />
      </div>
    </div>
  ),
  args: {},
};
