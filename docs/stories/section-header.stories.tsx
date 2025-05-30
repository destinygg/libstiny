import type { Meta, StoryObj } from "@storybook/react";

type SectionHeaderArgs = {
  text: string;
};

const meta: Meta<SectionHeaderArgs> = {
  title: "Section Header",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<SectionHeaderArgs>;

export const Primary: Story = {
  render: (args) => (
    <div className="section-header">
      <div className="section-header__content">
        <h2 className="section-header__heading">{args.text}</h2>
        <div className="section-header__divider"></div>
      </div>
    </div>
  ),
  args: {
    text: "Section Header",
  },
};
