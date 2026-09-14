import type { Meta, StoryObj } from "@storybook/react";
import { Icon, Menu } from "./_icons";
import { Badge, Button, Navbar } from "@destinygg/libstiny/react";

type NavbarArgs = {
  loggedIn: boolean;
};

type NavbarTitleArgs = {
  title: string;
  showTitle: boolean;
};

const meta: Meta<NavbarArgs> = {
  title: "Navbar",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<NavbarArgs>;
type TitleStory = StoryObj<NavbarTitleArgs>;

export const Primary: Story = {
  render: (args) => (
    <Navbar.Root>
      <Button intent="tertiary" iconOnly aria-label="Menu">
        <Menu />
      </Button>

      <Navbar.Logo src="/destiny-logo.png" alt="Destiny" />

      <Navbar.Items>
        <Navbar.Icon href="#" aria-label="YouTube">
          <Icon />
        </Navbar.Icon>
        <Navbar.Icon href="#" aria-label="Kick">
          <Icon />
        </Navbar.Icon>
        <Navbar.Icon href="#" aria-label="Reddit">
          <Icon />
        </Navbar.Icon>
        <Navbar.Icon href="#" aria-label="Discord">
          <Icon />
        </Navbar.Icon>
      </Navbar.Items>

      <Navbar.Items>
        <Navbar.Item href="#" active>
          Home
        </Navbar.Item>
        <Navbar.Item href="#">
          Big Screen <Badge intent="danger">Live</Badge>
        </Navbar.Item>
        <Navbar.Item href="#">Donate</Navbar.Item>
        <Navbar.Item href="#">Merch</Navbar.Item>
      </Navbar.Items>

      <Navbar.Actions>
        {args.loggedIn ? (
          <Navbar.User>Username</Navbar.User>
        ) : (
          <Button>Sign In</Button>
        )}
      </Navbar.Actions>
    </Navbar.Root>
  ),
  args: {
    loggedIn: true,
  },
};

export const WithTitle: TitleStory = {
  render: (args) => (
    <Navbar.Root>
      <Button intent="tertiary" iconOnly aria-label="Menu">
        <Menu />
      </Button>

      <Navbar.Logo src="/destiny-logo.png" alt="Destiny" />

      <Navbar.Title>
        <Icon />
        {args.showTitle && args.title}
      </Navbar.Title>

      <Navbar.Actions>
        <Navbar.User>Username</Navbar.User>
      </Navbar.Actions>
    </Navbar.Root>
  ),
  args: {
    title: "Title",
    showTitle: true,
  },
};
