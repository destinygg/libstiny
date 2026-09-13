import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@destinygg/libstiny/react";
import { Icon } from "./_icons";

const meta = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    intent: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "danger"],
    },
    size: { control: "select", options: ["default", "small", "large"] },
  },
  args: { intent: "primary", size: "default", children: "Button" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Small: Story = { args: { size: "small" } };

export const Large: Story = { args: { size: "large" } };

export const Disabled: Story = { args: { disabled: true } };

// `button--full-width` exists in button.scss but was missing from the old
// variant map, so it had no story until now.
export const FullWidth: Story = { args: { fullWidth: true } };

// Icon-only buttons carry no text, so they need an accessible name.
export const IconOnly: Story = {
  args: { iconOnly: true, "aria-label": "Settings", children: <Icon /> },
};

// `render` substitutes the element while keeping the button styling.
export const AsLink: Story = {
  args: { render: <a href="#" />, children: "Link styled as a button" },
};
