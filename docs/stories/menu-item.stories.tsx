import type { Meta, StoryObj } from "@storybook/react";
import { cva } from "cva";

type MenuItemArgs = {
  active: boolean;
};

const menuItem = cva({
  base: "menu-item",
  variants: {
    active: {
      true: "menu-item--active",
    },
  },
});

const meta: Meta<MenuItemArgs> = {
  title: "Menu Item",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<MenuItemArgs>;

export const Primary: Story = {
  render: (args) => (
    <div className={menuItem({ active: args.active })} style={{ width: 280 }}>
      Menu Item
    </div>
  ),
  args: {
    active: false,
  },
};
