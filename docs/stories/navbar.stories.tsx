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
        className="nav-logo"
        style={{ width: 140, backgroundColor: "blue" }}
      />

      <div className="nav-items">
        <a className="nav-item nav-item--active">Home</a>
        <a className="nav-item">
          Big Screen <span className="badge badge--danger">Live</span>
        </a>
        <a className="nav-item">Donate</a>
        <a className="nav-item">Community</a>
        <a className="nav-item">Merch</a>
      </div>

      {args.loggedIn && <div className="nav-user">Username</div>}

      {!args.loggedIn && (
        <div className="nav-actions">
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
