import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Choicebox } from "@destinygg/libstiny/react";

const meta = {
  title: "Choicebox",
  component: Choicebox,
  tags: ["autodocs"],
} satisfies Meta<typeof Choicebox>;

export default meta;
type Story = StoryObj<typeof meta>;

// The selected card's highlight is pure CSS (`:has(input:checked)`); React only
// tracks which radio is checked.
export const Primary: Story = {
  render: () => {
    const [checked, setChecked] = useState("option1");

    return (
      <div style={{ display: "flex", gap: 24 }}>
        <Choicebox
          name="plan"
          value="option1"
          title="Option 1"
          subtitle="This is option 1"
          checked={checked === "option1"}
          onChange={(e) => setChecked(e.target.value)}
          style={{ width: 300 }}
        />
        <Choicebox
          name="plan"
          value="option2"
          title="Option 2"
          subtitle="This is option 2"
          checked={checked === "option2"}
          onChange={(e) => setChecked(e.target.value)}
          style={{ width: 300 }}
        />
      </div>
    );
  },
};
