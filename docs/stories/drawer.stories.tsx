import type { Meta, StoryObj } from "@storybook/react";
import { Icon, Menu } from "./_icons";
import { Button, Drawer, Navbar } from "@destinygg/libstiny/react";

const meta = {
  title: "Drawer",
  component: Drawer.Panel,
  tags: ["autodocs"],
} satisfies Meta<typeof Drawer.Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

const categories = (
  <Drawer.CategoryGroup>
    <Drawer.Category title="Community">
      <Drawer.Item href="#" active>
        YouTube
      </Drawer.Item>
      <Drawer.Item href="#">Kick</Drawer.Item>
      <Drawer.Item href="#">Reddit</Drawer.Item>
      <Drawer.Item href="#">Discord</Drawer.Item>
    </Drawer.Category>

    <Drawer.Category title="Podcasts">
      <Drawer.Item href="#">Bridges</Drawer.Item>
      <Drawer.Item href="#">Anything Else?</Drawer.Item>
    </Drawer.Category>
  </Drawer.CategoryGroup>
);

const footer = (
  <Drawer.Footer>
    {["YouTube", "Kick", "Reddit", "Discord"].map((name) => (
      <Button key={name} intent="tertiary" iconOnly aria-label={name}>
        <Icon />
      </Button>
    ))}
  </Drawer.Footer>
);

// The drawer inline in the page, e.g. as a persistent sidebar.
export const Primary: Story = {
  render: () => (
    <Drawer.Panel style={{ width: 340, height: 900 }}>
      <div>
        <Drawer.Logo src="/destiny-logo.png" alt="Destiny" />
      </div>
      <Button fullWidth>Subscribe</Button>
      {categories}
      {footer}
    </Drawer.Panel>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Drawer.Panel style={{ width: 340, height: 900 }}>
      <div>
        <Drawer.Logo src="/destiny-logo.png" alt="Destiny" />
      </div>

      <Drawer.CategoryGroup>
        <Drawer.Category title="Cool Emotes">
          <Drawer.Item href="#" active>
            YEE
          </Drawer.Item>
          <Drawer.Item href="#">nathanYee</Drawer.Item>
          <Drawer.Item href="#">YEEHAW</Drawer.Item>
        </Drawer.Category>

        <Drawer.Category title="Lame Emotes">
          <Drawer.Item href="#">PEPE</Drawer.Item>
          <Drawer.Item href="#">nathanPepe</Drawer.Item>
          <Drawer.Item href="#">PARDNER</Drawer.Item>
        </Drawer.Category>
      </Drawer.CategoryGroup>

      <Drawer.ActionFooter>
        <Button intent="secondary">
          <Icon />
          Exit Dashboard
        </Button>
      </Drawer.ActionFooter>
    </Drawer.Panel>
  ),
};

// Off-canvas: the navbar's menu button opens the drawer from the left edge.
// Escape, a click on the overlay, the close button or swiping left dismisses it.
export const OffCanvas: Story = {
  render: () => (
    <Drawer.Root>
      <Navbar.Root>
        <Drawer.Trigger
          render={<Button intent="tertiary" iconOnly aria-label="Menu" />}
        >
          <Menu />
        </Drawer.Trigger>
        <Navbar.Logo src="/destiny-logo.png" alt="Destiny" />
      </Navbar.Root>

      <Drawer.Popup aria-label="Navigation">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Drawer.Logo src="/destiny-logo.png" alt="Destiny" />
          <Drawer.Close
            render={<Button intent="tertiary" iconOnly aria-label="Close" />}
          >
            <Menu />
          </Drawer.Close>
        </div>
        <Button fullWidth>Subscribe</Button>
        {categories}
        {footer}
      </Drawer.Popup>
    </Drawer.Root>
  ),
};
