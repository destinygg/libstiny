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

export const Top: Story = {
  render: (args) => (
    <div style={{ padding: 60, display: "flex", justifyContent: "center" }}>
      <div className="popover popover--top" style={{ width: 280 }}>
        <div className="popover__header">
          <span className="popover__title">{args.title}</span>
          <button className="popover__close">&#x2715;</button>
        </div>
        <div className="popover__content">{args.content}</div>
        <div className="popover__arrow" />
      </div>
    </div>
  ),
  args: {
    title: "Popover Title",
    content:
      "This is the popover content. It can contain any text or elements.",
  },
};

export const Bottom: Story = {
  render: (args) => (
    <div style={{ padding: 60, display: "flex", justifyContent: "center" }}>
      <div className="popover popover--bottom" style={{ width: 280 }}>
        <div className="popover__arrow" />
        <div className="popover__header">
          <span className="popover__title">{args.title}</span>
        </div>
        <div className="popover__content">{args.content}</div>
      </div>
    </div>
  ),
  args: {
    title: "Bottom Popover",
    content:
      "Arrow points upward because the popover sits below its trigger.",
  },
};

export const Left: Story = {
  render: (args) => (
    <div style={{ padding: 60 }}>
      <div className="popover popover--left" style={{ width: 280 }}>
        <div className="popover__header">
          <span className="popover__title">{args.title}</span>
          <button className="popover__close">&#x2715;</button>
        </div>
        <div className="popover__content">{args.content}</div>
        <div className="popover__arrow" />
      </div>
    </div>
  ),
  args: {
    title: "Left Popover",
    content: "Arrow points right because the popover sits to the left.",
  },
};

export const Right: Story = {
  render: (args) => (
    <div style={{ padding: 60 }}>
      <div className="popover popover--right" style={{ width: 280 }}>
        <div className="popover__arrow" />
        <div className="popover__header">
          <span className="popover__title">{args.title}</span>
        </div>
        <div className="popover__content">{args.content}</div>
      </div>
    </div>
  ),
  args: {
    title: "Right Popover",
    content: "Arrow points left because the popover sits to the right.",
  },
};

export const WithoutClose: Story = {
  render: (args) => (
    <div style={{ padding: 60, display: "flex", justifyContent: "center" }}>
      <div className="popover popover--top" style={{ width: 280 }}>
        <div className="popover__header">
          <span className="popover__title">{args.title}</span>
        </div>
        <div className="popover__content">{args.content}</div>
        <div className="popover__arrow" />
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
      <div className="popover popover--top" style={{ width: 240 }}>
        <div className="popover__content">
          A minimal popover with just content, no header.
        </div>
        <div className="popover__arrow" />
      </div>
    </div>
  ),
  args: {},
};
