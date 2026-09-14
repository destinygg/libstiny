import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { SegmentedControl } from "@destinygg/libstiny/react";
import { Coins, ImageIcon, LayoutGrid, Trophy } from "./_icons";

const meta = {
  title: "SegmentedControl",
  component: SegmentedControl.Root,
  tags: ["autodocs"],
} satisfies Meta<typeof SegmentedControl.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

// A filter where one option is the highlighted "accent" choice. Arrow keys move
// between options; clicking the selected option again leaves it selected.
export const Primary: Story = {
  render: () => {
    const [selected, setSelected] = useState("all");

    return (
      <SegmentedControl.Root
        aria-label="Filter designs"
        value={selected}
        onValueChange={setSelected}
      >
        <SegmentedControl.Item value="all">
          <LayoutGrid />
          All
        </SegmentedControl.Item>
        <SegmentedControl.Item value="winners" accent>
          <Trophy />
          Winners
        </SegmentedControl.Item>
      </SegmentedControl.Root>
    );
  },
};

// Uncontrolled: `defaultValue` picks the initial option.
export const Tabs: Story = {
  render: () => (
    <SegmentedControl.Root aria-label="My Vestaboard" defaultValue="designs">
      <SegmentedControl.Item value="designs">
        <ImageIcon />
        Designs
      </SegmentedControl.Item>
      <SegmentedControl.Item value="contributions">
        <Coins />
        Contributions
      </SegmentedControl.Item>
    </SegmentedControl.Root>
  ),
};
