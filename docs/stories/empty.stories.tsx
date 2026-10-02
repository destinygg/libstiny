import type { Meta, StoryObj } from "@storybook/react";
import { buttonComponent } from "../components/button";

type EmptyArgs = {};

const meta: Meta<EmptyArgs> = {
  title: "Empty",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<EmptyArgs>;

type IconProps = { children: React.ReactNode };

const Icon = ({ children }: IconProps) => (
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
    {children}
  </svg>
);

const CircleSlash = () => (
  <Icon>
    <circle cx="12" cy="12" r="10" />
    <path d="m4.9 4.9 14.2 14.2" />
  </Icon>
);

const SearchX = () => (
  <Icon>
    <path d="m13.5 8.5-5 5" />
    <path d="m8.5 8.5 5 5" />
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </Icon>
);

export const Primary: Story = {
  render: () => (
    <div className="empty">
      <span className="empty__icon">
        <CircleSlash />
      </span>
      <div className="empty__title">Nothing here yet</div>
    </div>
  ),
  args: {},
};

export const WithDescription: Story = {
  render: () => (
    <div className="empty">
      <span className="empty__icon">
        <SearchX />
      </span>
      <div className="empty__title">No results</div>
      <div className="empty__description">
        Nothing matched your search. Try another term, or clear your filters.
      </div>
    </div>
  ),
  args: {},
};

export const WithAction: Story = {
  render: () => (
    <div className="empty">
      <span className="empty__icon">
        <CircleSlash />
      </span>
      <div className="empty__title">No items yet</div>
      <div className="empty__description">
        Items show up here as soon as the first one is added.
      </div>
      <button
        className={`empty__action ${buttonComponent({ intent: "primary" })}`}
      >
        Add an item
      </button>
    </div>
  ),
  args: {},
};

// --fill takes the slack in a flex parent, so a pane with nothing in it
// centres its empty state instead of hugging the top.
export const Fill: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "20rem",
        border: "1px dashed #4b4b4b",
      }}
    >
      <div className="empty empty--fill">
        <span className="empty__icon">
          <CircleSlash />
        </span>
        <div className="empty__title">Nothing to show</div>
      </div>
    </div>
  ),
  args: {},
};
