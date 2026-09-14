import type { Meta, StoryObj } from "@storybook/react";
import { Badge, Button, Card } from "@destinygg/libstiny/react";

const meta = {
  title: "Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    title: "Card Title",
    subtitle: "Card subtitle",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    prominent: false,
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <Card
      {...args}
      style={{ width: 340 }}
      badges={
        <>
          <Badge>Badge</Badge>
          <Badge intent="success">Badge</Badge>
          <Badge intent="danger">Badge</Badge>
        </>
      }
      actions={
        <>
          <Button intent="tertiary">Action</Button>
          <Button intent="secondary">Action</Button>
        </>
      }
    />
  ),
};

export const Prominent: Story = {
  ...Primary,
  args: { prominent: true },
};

// Slots are omitted entirely when empty rather than rendered hollow, so the
// `:empty` rules in card.scss never have to catch a stray whitespace node.
export const TitleOnly: Story = {
  render: (args) => <Card {...args} style={{ width: 340 }} />,
  args: { subtitle: undefined, description: undefined },
};
