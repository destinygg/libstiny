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
      <div className="modal-header">
        <span className="modal-title">{args.title}</span>
        <span className="modal-subtitle">{args.subtitle}</span>
      </div>
      Content
      <div className="modal-actions">
        <button className="button button--neutral-text">Action</button>
        <button className="button button--primary-solid">Action</button>
      </div>
    </div>
  ),
  args: {
    title: "Modal Title",
    subtitle: "Modal subtitle",
  },
};
