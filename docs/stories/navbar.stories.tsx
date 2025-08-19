import type { Meta, StoryObj } from "@storybook/react";

type NavbarArgs = {
  loggedIn: boolean;
};

type NavbarTitleArgs = {
  title: string;
  showTitle: boolean;
};

const meta: Meta<NavbarArgs> = {
  title: "Navbar",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<NavbarArgs>;
type TitleStory = StoryObj<NavbarTitleArgs>;

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

const Menu = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.33301 10H16.6663M3.33301 5H16.6663M3.33301 15H16.6663"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Primary: Story = {
  render: (args) => (
    <div className="navbar">
      <button className="button button--tertiary button--icon-only">
        <Menu />
      </button>

      <img src="/destiny-logo.png" className="navbar__logo" />

      <div className="navbar__items">
        <a className="navbar__icon">
          <Icon />
        </a>
        <a className="navbar__icon">
          <Icon />
        </a>
        <a className="navbar__icon">
          <Icon />
        </a>
        <a className="navbar__icon">
          <Icon />
        </a>
      </div>

      <div className="navbar__items">
        <a className="navbar__item navbar__item--active">Home</a>
        <a className="navbar__item">
          Big Screen <span className="badge badge--danger">Live</span>
        </a>
        <a className="navbar__item">Donate</a>
        <a className="navbar__item">Merch</a>
      </div>

      <div className="navbar__actions">
        {args.loggedIn && <div className="navbar__user">Username</div>}

        {!args.loggedIn && (
          <button className="button button--primary">Sign In</button>
        )}
      </div>
    </div>
  ),
  args: {
    loggedIn: true,
  },
};

export const WithTitle: TitleStory = {
  render: (args) => (
    <div className="navbar">
      <button className="button button--tertiary button--icon-only">
        <Menu />
      </button>

      <img src="/destiny-logo.png" className="navbar__logo" />

      <div className="navbar__title">
        <Icon />
        {args.showTitle && args.title}
      </div>

      <div className="navbar__actions">
        <div className="navbar__user">Username</div>
      </div>
    </div>
  ),
  args: {
    title: "Title",
    showTitle: true,
  },
};
