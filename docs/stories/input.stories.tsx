import type { Meta, StoryObj } from "@storybook/react";
import { inputComponent } from "../components/input";

type ValidationState = "default" | "error" | "success";

type InputArgs = {
  label: string;
  helpText: string;
  validationState: ValidationState;
  disabled: boolean;
};

const meta: Meta<InputArgs> = {
  title: "Input",
  tags: ["autodocs"],
  argTypes: {
    validationState: {
      options: ["default", "error", "success"],
      control: {
        type: "select",
      },
    },
  },
};

export default meta;

type Story = StoryObj<InputArgs>;

export const TextInput: Story = {
  render: (args) => (
    <div
      className={inputComponent({ validationState: args.validationState })}
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
    validationState: "default",
  },
};

export const Select: Story = {
  render: (args) => (
    <div
      className={inputComponent({ validationState: args.validationState })}
      style={{ width: 400 }}
    >
      <label>{args.label}</label>
      <div className="input__area">
        <div className="input__prefix">https://</div>

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
    validationState: "default",
  },
};

export const TextArea: Story = {
  render: (args) => (
    <div
      className={inputComponent({ validationState: args.validationState })}
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
    validationState: "default",
  },
};
