import type { Meta, StoryObj } from "@storybook/react";
import { Button, Popover } from "@destinygg/libstiny/react";

type PopoverArgs = {
  title: string;
  content: string;
  side: "top" | "bottom" | "left" | "right";
};

const meta: Meta<PopoverArgs> = {
  title: "Popover",
  tags: ["autodocs"],
  argTypes: {
    side: {
      options: ["top", "bottom", "left", "right"],
      control: { type: "select" },
    },
  },
  args: {
    title: "Popover Title",
    content:
      "This is the popover content. It can contain any text or elements.",
    side: "bottom",
  },
};

export default meta;

type Story = StoryObj<PopoverArgs>;

// Room on every side of the trigger, so no side has to flip.
const frame = { padding: 240, display: "flex", justifyContent: "center" };

// The arrow sits on the edge facing the trigger, and follows `side`.
export const Primary: Story = {
  render: (args) => (
    <div style={frame}>
      <Popover.Root>
        <Popover.Trigger render={<Button intent="secondary" />}>
          Open popover
        </Popover.Trigger>
        <Popover.Popup side={args.side} style={{ width: 280 }}>
          <Popover.Header>
            <Popover.Title>{args.title}</Popover.Title>
            <Popover.Close />
          </Popover.Header>
          <Popover.Content>{args.content}</Popover.Content>
        </Popover.Popup>
      </Popover.Root>
    </div>
  ),
};

export const Top: Story = { ...Primary, args: { side: "top" } };
export const Left: Story = { ...Primary, args: { side: "left" } };
export const Right: Story = { ...Primary, args: { side: "right" } };

// The trigger sits at the bottom of the frame, so there's no room below it:
// the popover flips to the top and its arrow flips with it.
export const Flip: Story = {
  render: (args) => (
    <div
      style={{
        height: "90vh",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
      }}
    >
      <Popover.Root>
        <Popover.Trigger render={<Button intent="secondary" />}>
          Open popover
        </Popover.Trigger>
        <Popover.Popup side="bottom" style={{ width: 280, height: 160 }}>
          <Popover.Content>{args.content}</Popover.Content>
        </Popover.Popup>
      </Popover.Root>
    </div>
  ),
};

export const ContentOnly: Story = {
  render: () => (
    <div style={frame}>
      <Popover.Root>
        <Popover.Trigger render={<Button intent="secondary" />}>
          Open popover
        </Popover.Trigger>
        <Popover.Popup style={{ width: 240 }}>
          <Popover.Content>
            A minimal popover with just content, no header.
          </Popover.Content>
        </Popover.Popup>
      </Popover.Root>
    </div>
  ),
};
