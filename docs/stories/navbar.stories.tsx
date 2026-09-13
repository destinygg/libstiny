import type { Meta, StoryObj } from "@storybook/react";
import { Icon, Menu } from "./_icons";
import { Button } from "@destinygg/libstiny/react";

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

export const Primary: Story = {
  render: (args) => (
    <div className="navbar">
      <Button intent="tertiary" iconOnly>
        <Menu />
      </Button>

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

        {!args.loggedIn && <Button>Sign In</Button>}
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
      <Button intent="tertiary" iconOnly>
        <Menu />
      </Button>

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
