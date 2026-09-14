import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "@destinygg/libstiny/react";
import { ArrowLeft } from "./_icons";

const meta = {
  title: "Breadcrumb",
  component: Breadcrumb.Root,
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumb.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <Breadcrumb.Root>
      <Breadcrumb.Link href="#">
        <ArrowLeft />
        Back to Auction
      </Breadcrumb.Link>
      <Breadcrumb.Separator />
      <Breadcrumb.Current>Submit a Design</Breadcrumb.Current>
    </Breadcrumb.Root>
  ),
};

export const Nested: Story = {
  render: () => (
    <Breadcrumb.Root>
      <Breadcrumb.Link href="#">
        <ArrowLeft />
        Auction
      </Breadcrumb.Link>
      <Breadcrumb.Separator />
      <Breadcrumb.Link href="#">History</Breadcrumb.Link>
      <Breadcrumb.Separator />
      <Breadcrumb.Current>Design #42</Breadcrumb.Current>
    </Breadcrumb.Root>
  ),
};
