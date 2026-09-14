import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "@destinygg/libstiny/react";

const meta = {
  title: "Radio",
  component: Radio,
  tags: ["autodocs"],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

// Radios sharing a `name` form one group: Tab reaches the checked radio and
// the arrow keys move the selection.
export const Group: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 24 }}>
      {["Day", "Week", "Month"].map((range) => (
        <label
          key={range}
          style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
        >
          <Radio name="range" value={range} defaultChecked={range === "Day"} />
          {range}
        </label>
      ))}
    </div>
  ),
};
