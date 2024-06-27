import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

type ChoiceboxArgs = {};

const meta: Meta<ChoiceboxArgs> = {
  title: "Choicebox",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<ChoiceboxArgs>;

export const Primary: Story = {
  render: () => {
    const [checked, setChecked] = useState("option1");

    return (
      <div style={{ display: "flex", gap: 24 }}>
        <label className="choicebox" style={{ width: 300 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span className="choicebox__title">Option 1</span>
            <span className="choicebox__subtitle">This is option 1</span>
          </div>

          <input
            type="radio"
            className="radio"
            value="option1"
            checked={checked === "option1"}
            onChange={(e) => setChecked(e.target.value)}
          />
        </label>
        <label className="choicebox" style={{ width: 300 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span className="choicebox__title">Option 1</span>
            <span className="choicebox__subtitle">This is option 1</span>
          </div>

          <input
            type="radio"
            className="radio"
            value="option2"
            checked={checked === "option2"}
            onChange={(e) => setChecked(e.target.value)}
          />
        </label>
      </div>
    );
  },
  args: {},
};
