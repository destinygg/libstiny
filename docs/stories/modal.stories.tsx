import type { Meta, StoryObj } from "@storybook/react";
import { Button, Dropdown, Modal } from "@destinygg/libstiny/react";

type ModalArgs = {
  title: string;
  subtitle: string;
};

const meta: Meta<ModalArgs> = {
  title: "Modal",
  tags: ["autodocs"],
  args: {
    title: "Modal Title",
    subtitle: "Modal subtitle",
  },
};

export default meta;

type Story = StoryObj<ModalArgs>;

// Focus moves into the modal and returns to the trigger on close. Escape, a
// click outside the window and the Close button all dismiss it.
export const Primary: Story = {
  render: (args) => (
    <Modal.Root>
      <Modal.Trigger render={<Button intent="secondary" />}>
        Open modal
      </Modal.Trigger>
      <Modal.Popup>
        <Modal.Header>
          <Modal.Title>{args.title}</Modal.Title>
          <Modal.Subtitle>{args.subtitle}</Modal.Subtitle>
        </Modal.Header>
        Content
        <Modal.Actions>
          <Modal.Close render={<Button intent="tertiary" />}>
            Cancel
          </Modal.Close>
          <Modal.Close render={<Button />}>Confirm</Modal.Close>
        </Modal.Actions>
      </Modal.Popup>
    </Modal.Root>
  ),
};

// A modal taller than the viewport scrolls within the overlay rather than
// being clipped, and menus opened from inside it paint above it.
export const LongContent: Story = {
  render: (args) => (
    <Modal.Root>
      <Modal.Trigger render={<Button intent="secondary" />}>
        Open long modal
      </Modal.Trigger>
      <Modal.Popup>
        <Modal.Header>
          <Modal.Title>{args.title}</Modal.Title>
          <Modal.Subtitle>{args.subtitle}</Modal.Subtitle>
        </Modal.Header>
        {Array.from({ length: 40 }, (_, i) => (
          <p key={i}>Paragraph {i + 1}</p>
        ))}
        <Modal.Actions>
          <Dropdown.Root>
            <Dropdown.Trigger render={<Button intent="tertiary" />}>
              More
            </Dropdown.Trigger>
            <Dropdown.Popup side="top">
              <Dropdown.Item>Duplicate</Dropdown.Item>
              <Dropdown.Item>Archive</Dropdown.Item>
            </Dropdown.Popup>
          </Dropdown.Root>
          <Modal.Close render={<Button />}>Done</Modal.Close>
        </Modal.Actions>
      </Modal.Popup>
    </Modal.Root>
  ),
};
