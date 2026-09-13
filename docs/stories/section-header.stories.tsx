import type { Meta, StoryObj } from "@storybook/react";
import { SectionHeader } from "@destinygg/libstiny/react";

const meta = {
  title: "SectionHeader",
  component: SectionHeader,
  tags: ["autodocs"],
  argTypes: { level: { control: "select", options: [1, 2, 3, 4, 5, 6] } },
  args: { children: "Section Header" },
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

// `level` only changes the heading tag, for document-outline correctness.
export const LevelThree: Story = { args: { level: 3 } };
