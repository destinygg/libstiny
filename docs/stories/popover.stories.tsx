import type { Meta, StoryObj } from "@storybook/react";

type PopoverArgs = {
  title: string;
  content: string;
};

const meta: Meta<PopoverArgs> = {
  title: "Popover",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<PopoverArgs>;

export const Default: Story = {
  render: (args) => (
    <div style={{ padding: 60, display: "flex", justifyContent: "center" }}>
      <div className="popover" style={{ width: 280 }}>
        <button className="popover__close">&#x2715;</button>
        <div className="popover__header">
          <span className="popover__title">{args.title}</span>
        </div>
        <div className="popover__content">{args.content}</div>
      </div>
    </div>
  ),
  args: {
    title: "Popover Title",
    content:
      "This is the popover content. It can contain any text or elements.",
  },
};

export const WithoutClose: Story = {
  render: (args) => (
    <div style={{ padding: 60, display: "flex", justifyContent: "center" }}>
      <div className="popover" style={{ width: 280 }}>
        <div className="popover__header">
          <span className="popover__title">{args.title}</span>
        </div>
        <div className="popover__content">{args.content}</div>
      </div>
    </div>
  ),
  args: {
    title: "No Close Button",
    content: "This popover omits the close button element entirely.",
  },
};

export const ContentOnly: Story = {
  render: () => (
    <div style={{ padding: 60, display: "flex", justifyContent: "center" }}>
      <div className="popover" style={{ width: 240 }}>
        <div className="popover__content">
          A minimal popover with just content, no header.
        </div>
      </div>
    </div>
  ),
  args: {},
};
