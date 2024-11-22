import type { Meta, StoryObj } from "@storybook/react";

type StepperArgs = {};

const meta: Meta<StepperArgs> = {
  title: "Stepper",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<StepperArgs>;

const DotIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.0833 10.9167C10.5436 10.9167 10.9167 10.5436 10.9167 10.0833C10.9167 9.6231 10.5436 9.25 10.0833 9.25C9.6231 9.25 9.25 9.6231 9.25 10.0833C9.25 10.5436 9.6231 10.9167 10.0833 10.9167Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const BasicUsage: Story = {
  render: () => (
    <div className="stepper">
      <div className="stepper__step stepper__step--completed">
        <div className="stepper__bar" />
        <div className="stepper__label-container">
          <div className="stepper__dot">
            <DotIcon />
          </div>
          <div className="stepper__label">Step 1</div>
        </div>
      </div>
      <div className="stepper__step stepper__step--active">
        <div className="stepper__bar" />
        <div className="stepper__label-container">
          <div className="stepper__dot">
            <DotIcon />
          </div>
          <div className="stepper__label">Step 2</div>
        </div>
      </div>
      <div className="stepper__step">
        <div className="stepper__bar" />
        <div className="stepper__label-container">
          <div className="stepper__dot">
            <DotIcon />
          </div>
          <div className="stepper__label">Step 3</div>
        </div>
      </div>
      <div className="stepper__step">
        <div className="stepper__bar" />
        <div className="stepper__label-container">
          <div className="stepper__dot">
            <DotIcon />
          </div>
          <div className="stepper__label">Step 4</div>
        </div>
      </div>
    </div>
  ),
};
