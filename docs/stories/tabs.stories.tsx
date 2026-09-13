import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "@destinygg/libstiny/react/tabs";

const meta = {
  title: "Tabs",
  tags: ["autodocs"],
} satisfies Meta<Record<string, never>>;

export default meta;
type Story = StoryObj<typeof meta>;

// Unlike the old div+onClick markup, these are real tabs: arrow keys, Home/End,
// roving tabindex and role="tablist"/"tab"/"tabpanel" all come from Base UI,
// while the libstiny classes come from the state bridge in the wrapper.
export const Primary: Story = {
  render: () => (
    <Tabs.Root defaultValue="tab1">
      <Tabs.List>
        <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
        <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
        <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="tab1">First panel</Tabs.Panel>
      <Tabs.Panel value="tab2">Second panel</Tabs.Panel>
      <Tabs.Panel value="tab3">Third panel</Tabs.Panel>
    </Tabs.Root>
  ),
};

// `orientation` drives `.tabs--vertical` on the List, which is the ancestor the
// vertical underline rules in tabs.scss select against.
export const Vertical: Story = {
  render: () => (
    <Tabs.Root defaultValue="tab1" orientation="vertical">
      <Tabs.List style={{ width: 200 }}>
        <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
        <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
        <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value="tab1">First panel</Tabs.Panel>
      <Tabs.Panel value="tab2">Second panel</Tabs.Panel>
      <Tabs.Panel value="tab3">Third panel</Tabs.Panel>
    </Tabs.Root>
  ),
};
