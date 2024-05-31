import type { Meta, StoryObj } from "@storybook/react";

type NavbarArgs = {
  loggedIn: boolean;
};

const meta: Meta<NavbarArgs> = {
  title: "Navbar",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<NavbarArgs>;

export const Primary: Story = {
  render: (args) => (
    <div className="navbar">
      <div
        className="navbar__logo"
        style={{ width: 140, backgroundColor: "blue" }}
      />

      <div className="navbar__items">
        <a className="navbar__item navbar__item--active">Home</a>
        <a className="navbar__item">
          Big Screen <span className="badge badge--danger">Live</span>
        </a>
        <a className="navbar__item">Donate</a>
        <a className="navbar__item">Community</a>
        <a className="navbar__item">Merch</a>
      </div>

      {args.loggedIn && <div className="navbar__user">Username</div>}

      {!args.loggedIn && (
        <div className="navbar__actions">
          <button className="button button--primary-text">Sign In</button>
          <button className="button button--primary-solid">Sign Up</button>
        </div>
      )}
    </div>
  ),
  args: {
    loggedIn: true,
  },
};
