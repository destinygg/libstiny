import type { Meta, StoryObj } from "@storybook/react";

type DrawerArgs = {};

const meta: Meta<DrawerArgs> = {
  title: "Drawer",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<DrawerArgs>;

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
    <div className="drawer" style={{ width: 340, height: 900 }}>
      <div>
        <img src="/destiny-logo.png" className="drawer__logo" />
      </div>

      <button className="button button--primary button--full-width">
        Subscribe
      </button>

      <div className="drawer__category-group">
        <div className="drawer__category">
          <span className="drawer__category-title">Community</span>
          <a className="drawer__item drawer__item--active">YouTube</a>
          <a className="drawer__item">Kick</a>
          <a className="drawer__item">Reddit</a>
          <a className="drawer__item">Discord</a>
        </div>

        <div className="drawer__category">
          <span className="drawer__category-title">Podcasts</span>
          <a className="drawer__item">Bridges</a>
          <a className="drawer__item">Anything Else?</a>
        </div>
      </div>

      <div className="drawer__footer">
        <button className="button button--tertiary button--icon-only">
          <Icon />
        </button>
        <button className="button button--tertiary button--icon-only">
          <Icon />
        </button>
        <button className="button button--tertiary button--icon-only">
          <Icon />
        </button>
        <button className="button button--tertiary button--icon-only">
          <Icon />
        </button>
      </div>
    </div>
  ),
  args: {},
};

export const WithAction: Story = {
  render: () => (
    <div className="drawer" style={{ width: 340, height: 900 }}>
      <div>
        <img src="/destiny-logo.png" className="drawer__logo" />
      </div>

      <div className="drawer__category-group">
        <div className="drawer__category">
          <span className="drawer__category-title">Cool Emotes</span>
          <a className="drawer__item drawer__item--active">YEE</a>
          <a className="drawer__item">nathanYee</a>
          <a className="drawer__item">YEEHAW</a>
        </div>

        <div className="drawer__category">
          <span className="drawer__category-title">Lame Emotes</span>
          <a className="drawer__item">PEPE</a>
          <a className="drawer__item">nathanPepe</a>
          <a className="drawer__item">PARDNER</a>
        </div>
      </div>

      <div className="drawer__action-footer">
        <button className="button button--secondary">
          <Icon />
          Exit Dashboard
        </button>
      </div>
    </div>
  ),
  args: {},
};
