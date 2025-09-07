import type { Meta, StoryObj } from "@storybook/react";
import { checkboxComponent } from "../components/checkbox";

type CheckboxArgs = {
  type: "default" | "switch";
  label: string;
};

const meta: Meta<CheckboxArgs> = {
  title: "Checkbox",
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: ["default", "switch"],
      control: {
        type: "select",
      },
    },
  },
};

export default meta;

type Story = StoryObj<CheckboxArgs>;

const TickIcon = () => (
  <svg
    className="checkbox__tick"
    width="10"
    height="8"
    viewBox="0 0 10 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 1L3.5 6.5L1 4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Primary: Story = {
  render: (args) => (
    <label className={checkboxComponent({ type: args.type })}>
      <span className="checkbox__toggle">
        <input type="checkbox" />
        <span className="checkbox__icon">
          {args.type === "default" ? <TickIcon /> : null}
        </span>
      </span>
      <span className="checkbox__label">{args.label}</span>
    </label>
  ),
  args: {
    type: "default",
    label: "Toggle me",
  },
};
