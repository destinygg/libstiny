import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./_icons";
import { Button } from "@destinygg/libstiny/react";

type DrawerArgs = {};

const meta: Meta<DrawerArgs> = {
  title: "Drawer",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<DrawerArgs>;

export const Primary: Story = {
  render: () => (
    <div className="drawer" style={{ width: 340, height: 900 }}>
      <div>
        <img src="/destiny-logo.png" className="drawer__logo" />
      </div>

      <Button fullWidth>Subscribe</Button>

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
        <Button intent="tertiary" iconOnly>
          <Icon />
        </Button>
        <Button intent="tertiary" iconOnly>
          <Icon />
        </Button>
        <Button intent="tertiary" iconOnly>
          <Icon />
        </Button>
        <Button intent="tertiary" iconOnly>
          <Icon />
        </Button>
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
        <Button intent="secondary">
          <Icon />
          Exit Dashboard
        </Button>
      </div>
    </div>
  ),
  args: {},
};
