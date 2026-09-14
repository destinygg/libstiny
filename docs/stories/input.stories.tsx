import type { Meta, StoryObj } from "@storybook/react";
import { Input, Select, TextArea } from "@destinygg/libstiny/react";

const meta = {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    validationState: {
      options: [undefined, "error", "success"],
      control: { type: "select" },
    },
  },
  args: {
    label: "Input Label",
    helpText: "This is some help text",
    disabled: false,
    validationState: undefined,
    style: { width: 400 },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// The label's `for` and the control's `aria-describedby` are wired up for you.
export const TextInput: Story = {
  args: {
    prefix: "https://",
    placeholder: "Placeholder text...",
  },
};

export const WithSuffix: Story = {
  args: {
    label: "Amount",
    helpText: "Minimum donation is $5",
    prefix: "$",
    suffix: "USD",
    inputMode: "decimal",
    placeholder: "0.00",
  },
};

// Select and TextArea take the same frame props as Input.
export const SelectInput: Story = {
  name: "Select",
  render: ({ label, helpText, prefix, validationState, disabled, style }) => (
    <Select
      {...{ label, helpText, prefix, validationState, disabled, style }}
      defaultValue=""
    >
      <option value=""></option>
      <option value="1">Value 1</option>
      <option value="2">Value 2</option>
      <option value="3">Value 3</option>
    </Select>
  ),
  args: { prefix: "https://" },
};

export const TextAreaInput: Story = {
  name: "TextArea",
  render: ({ label, helpText, validationState, disabled, style }) => (
    <TextArea
      {...{ label, helpText, validationState, disabled, style }}
      placeholder="Placeholder text..."
      rows={5}
    />
  ),
};
