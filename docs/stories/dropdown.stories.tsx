import type { Meta, StoryObj } from "@storybook/react";
import { Button, Dropdown, Navbar } from "@destinygg/libstiny/react";

const meta = {
  title: "Dropdown",
  component: Dropdown.Popup,
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown.Popup>;

export default meta;
type Story = StoryObj<typeof meta>;

// Arrow keys and typeahead move the highlight. Items close the menu when
// chosen; link items leave it open.
export const Primary: Story = {
  render: () => (
    <Dropdown.Root>
      <Dropdown.Trigger render={<Button intent="secondary" />}>
        Account
      </Dropdown.Trigger>
      <Dropdown.Popup style={{ width: 280 }}>
        <Dropdown.LinkItem href="#">Account Settings</Dropdown.LinkItem>
        <Dropdown.LinkItem href="#">Subscriptions</Dropdown.LinkItem>
        <Dropdown.LinkItem href="#">Connections</Dropdown.LinkItem>
        <Dropdown.LinkItem href="#">Messages</Dropdown.LinkItem>
        <Dropdown.LinkItem href="#">Authentication</Dropdown.LinkItem>
        <Dropdown.LinkItem href="#">Developer</Dropdown.LinkItem>
        <Dropdown.LinkItem href="#">Advanced</Dropdown.LinkItem>
        <Dropdown.Separator />
        <Dropdown.Item>Log Out</Dropdown.Item>
      </Dropdown.Popup>
    </Dropdown.Root>
  ),
};

// The navbar's user button as the trigger.
export const FromNavbar: Story = {
  render: () => (
    <Navbar.Root>
      <Navbar.Actions>
        <Dropdown.Root>
          <Dropdown.Trigger render={<Navbar.User />}>Username</Dropdown.Trigger>
          <Dropdown.Popup style={{ width: 240 }}>
            <Dropdown.LinkItem href="#">Profile</Dropdown.LinkItem>
            <Dropdown.Separator />
            <Dropdown.Item>Log Out</Dropdown.Item>
          </Dropdown.Popup>
        </Dropdown.Root>
      </Navbar.Actions>
    </Navbar.Root>
  ),
};
