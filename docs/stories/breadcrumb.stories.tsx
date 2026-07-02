import type { Meta, StoryObj } from "@storybook/react";

type BreadcrumbArgs = {};

const meta: Meta<BreadcrumbArgs> = {
  title: "Breadcrumb",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<BreadcrumbArgs>;

const ArrowLeft = () => (
  <svg
    className="lucide"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

export const Primary: Story = {
  render: () => (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <a className="breadcrumb__link" href="#">
        <ArrowLeft />
        Back to Auction
      </a>
      <span className="breadcrumb__separator" aria-hidden="true"></span>
      <span className="breadcrumb__current" aria-current="page">
        Submit a Design
      </span>
    </nav>
  ),
  args: {},
};

export const Nested: Story = {
  render: () => (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <a className="breadcrumb__link" href="#">
        <ArrowLeft />
        Auction
      </a>
      <span className="breadcrumb__separator" aria-hidden="true"></span>
      <a className="breadcrumb__link" href="#">
        History
      </a>
      <span className="breadcrumb__separator" aria-hidden="true"></span>
      <span className="breadcrumb__current" aria-current="page">
        Design #42
      </span>
    </nav>
  ),
  args: {},
};
