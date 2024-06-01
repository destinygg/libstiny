import type { Meta, StoryObj } from "@storybook/react";
import { inputComponent } from "../components/input";

type InputArgs = {
  label: string;
  helpText: string;
  error: boolean;
  disabled: boolean;
};

const meta: Meta<InputArgs> = {
  title: "Input",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<InputArgs>;

export const TextInput: Story = {
  render: (args) => (
    <div
      className={inputComponent({ error: args.error })}
      style={{ width: 400 }}
    >
      <label>{args.label}</label>
      <div className="input__area">
        <div className="input__prefix">https://</div>

        <div className="input__container">
          <input placeholder="Placeholder text..." disabled={args.disabled} />
        </div>
      </div>
      <span className="input__help-text">{args.helpText}</span>
    </div>
  ),
  args: {
    label: "Input Label",
    helpText: "This is some help text",
    disabled: false,
    error: false,
  },
};

export const Select: Story = {
  render: (args) => (
    <div
      className={inputComponent({ error: args.error })}
      style={{ width: 400 }}
    >
      <label>{args.label}</label>
      <div className="input__area">
        <div className="input__area__prefix">https://</div>

        <div className="input__container">
          <select disabled={args.disabled}>
            <option value=""></option>
            <option value="1">Value 1</option>
            <option value="2">Value 2</option>
            <option value="3">Value 3</option>
          </select>
        </div>
      </div>
      <span className="input__help-text">{args.helpText}</span>
    </div>
  ),
  args: {
    label: "Input Label",
    helpText: "This is some help text",
    disabled: false,
    error: false,
  },
};

export const TextArea: Story = {
  render: (args) => (
    <div
      className={inputComponent({ error: args.error })}
      style={{ width: 400 }}
    >
      <label>{args.label}</label>
      <div className="input__area">
        <div className="input__container">
          <textarea
            placeholder="Placeholder text..."
            disabled={args.disabled}
            rows={5}
          />
        </div>
      </div>
      <span className="input__help-text">{args.helpText}</span>
    </div>
  ),
  args: {
    label: "Input Label",
    helpText: "This is some help text",
    disabled: false,
    error: false,
  },
};
