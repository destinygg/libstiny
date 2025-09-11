import type { Meta, StoryObj } from "@storybook/react";

type CheckboxArgs = {
  disabled: boolean;
  label: string;
};

const meta: Meta<CheckboxArgs> = {
  title: "Checkbox",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<CheckboxArgs>;

const TickIcon = () => (
  <svg
    className="checkbox__tick"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="4"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const Primary: Story = {
  render: (args) => (
    <label className="checkbox">
      <input type="checkbox" disabled={args.disabled} />
      <span className="checkbox__box">
        <TickIcon />
      </span>
      <span className="checkbox__label">{args.label}</span>
    </label>
  ),
  args: {
    disabled: false,
    label: "Toggle me",
  },
};
