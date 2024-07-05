import type { Meta, StoryObj } from "@storybook/react";

type ModalArgs = {
  title: string;
  subtitle: string;
};

const meta: Meta<ModalArgs> = {
  title: "Modal",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<ModalArgs>;

export const Primary: Story = {
  render: (args) => (
    <div className="modal">
      <div className="modal__header">
        <span className="modal__title">{args.title}</span>
        <span className="modal__subtitle">{args.subtitle}</span>
      </div>
      Content
      <div className="modal__actions">
        <button className="button button--tertiary">Action</button>
        <button className="button button--primary">Action</button>
      </div>
    </div>
  ),
  args: {
    title: "Modal Title",
    subtitle: "Modal subtitle",
  },
};
