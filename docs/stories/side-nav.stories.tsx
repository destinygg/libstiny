import type { Meta, StoryObj } from "@storybook/react";
import { SideNav } from "@destinygg/libstiny/react";
import { Icon } from "./_icons";

const meta = {
  title: "SideNav",
  component: SideNav.Root,
  tags: ["autodocs"],
} satisfies Meta<typeof SideNav.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <SideNav.Root style={{ width: "12rem", height: 545 }}>
      <SideNav.Group>
        {[
          "Overview",
          "Subscriptions",
          "Connections",
          "Messages",
          "Developer",
          "Advanced",
        ].map((name) => (
          <SideNav.Item key={name} href="#" active={name === "Overview"}>
            <Icon />
            {name}
          </SideNav.Item>
        ))}
      </SideNav.Group>
      <div
        className="side-nav__art"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <img
          src="/gemzar-do-not-pull.png"
          alt=""
          style={{ width: 180, height: 180 }}
        />
      </div>
    </SideNav.Root>
  ),
};

const categories = {
  Vegetables: ["Carrots", "Broccoli", "Lettuce", "Tomatoes", "Cucumbers"],
  Fruits: ["Apples", "Bananas", "Cherries", "Strawberries", "Watermelon"],
  Bread: ["Sourdough", "Rye", "Wheat", "Pumpernickel"],
};

// Each heading is a real button: Tab to it, then Enter or Space collapses the
// category. Collapse state lives in Base UI's Collapsible, not in the story.
export const Categorized: Story = {
  render: () => (
    <div style={{ height: "60rem" }}>
      <SideNav.Root style={{ width: "14rem" }}>
        {Object.entries(categories).map(([category, items]) => (
          <SideNav.Category key={category} defaultOpen={category !== "Bread"}>
            <SideNav.Heading icon={<Icon />}>{category}</SideNav.Heading>
            <SideNav.Panel>
              {items.map((item) => (
                <SideNav.Item key={item} href="#">
                  {item}
                </SideNav.Item>
              ))}
            </SideNav.Panel>
          </SideNav.Category>
        ))}
      </SideNav.Root>
    </div>
  ),
};
