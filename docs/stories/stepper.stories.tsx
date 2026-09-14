import type { Meta, StoryObj } from "@storybook/react";
import { Stepper } from "@destinygg/libstiny/react";

const meta = {
  title: "Stepper",
  component: Stepper.Step,
  tags: ["autodocs"],
  argTypes: {
    status: {
      options: ["upcoming", "active", "completed"],
      control: { type: "select" },
    },
  },
} satisfies Meta<typeof Stepper.Step>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicUsage: Story = {
  render: () => (
    <Stepper.Root aria-label="Checkout progress">
      <Stepper.Step status="completed">Step 1</Stepper.Step>
      <Stepper.Step status="active">Step 2</Stepper.Step>
      <Stepper.Step>Step 3</Stepper.Step>
      <Stepper.Step>Step 4</Stepper.Step>
    </Stepper.Root>
  ),
};
