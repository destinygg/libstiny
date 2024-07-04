import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { cva } from "cva";

type TabsArgs = {};

const tab = cva({
  base: "tab",
  variants: {
    active: {
      true: "tab--active",
    },
  },
});

const meta: Meta<TabsArgs> = {
  title: "Tabs",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<TabsArgs>;

export const Primary: Story = {
  render: () => {
    const [checked, setChecked] = useState("option1");

    return (
      <div className="tabs">
        <div
          className={tab({ active: checked === "tab1" })}
          onClick={() => setChecked("tab1")}
        >
          Tab 1
        </div>
        <div
          className={tab({ active: checked === "tab2" })}
          onClick={() => setChecked("tab2")}
        >
          Tab 2
        </div>
        <div
          className={tab({ active: checked === "tab3" })}
          onClick={() => setChecked("tab3")}
        >
          Tab 3
        </div>
      </div>
    );
  },
  args: {},
};

export const Vertical: Story = {
  render: () => {
    const [checked, setChecked] = useState("option1");

    return (
      <div className="tabs tabs--vertical" style={{ width: 200 }}>
        <div
          className={tab({ active: checked === "tab1" })}
          onClick={() => setChecked("tab1")}
        >
          Tab 1
        </div>
        <div
          className={tab({ active: checked === "tab2" })}
          onClick={() => setChecked("tab2")}
        >
          Tab 2
        </div>
        <div
          className={tab({ active: checked === "tab3" })}
          onClick={() => setChecked("tab3")}
        >
          Tab 3
        </div>
      </div>
    );
  },
  args: {},
};
