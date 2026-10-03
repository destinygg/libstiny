import type { Meta, StoryObj } from "@storybook/react";
import { buttonComponent } from "../components/button";

type ToolbarArgs = {};

const meta: Meta<ToolbarArgs> = {
  title: "Toolbar",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<ToolbarArgs>;

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

const Bold = () => (
  <Icon>
    <path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" />
  </Icon>
);

const Italic = () => (
  <Icon>
    <line x1="19" x2="10" y1="4" y2="4" />
    <line x1="14" x2="5" y1="20" y2="20" />
    <line x1="15" x2="9" y1="4" y2="20" />
  </Icon>
);

const Link = () => (
  <Icon>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </Icon>
);

const Code = () => (
  <Icon>
    <path d="m16 18 6-6-6-6" />
    <path d="m8 6-6 6 6 6" />
  </Icon>
);

type ToolbarButtonProps = {
  label: string;
  children: React.ReactNode;
  disabled?: boolean;
};

// An icon-only button in the bar: a small tertiary button, named for screen
// readers and as its tooltip, with the bar's own hover and disabled states.
const ToolbarButton = ({ label, children, disabled }: ToolbarButtonProps) => (
  <button
    type="button"
    className={`toolbar__button ${buttonComponent({
      intent: "tertiary",
      size: "small",
      iconOnly: true,
    })}`}
    title={label}
    aria-label={label}
    disabled={disabled}
  >
    {children}
  </button>
);

export const Default: Story = {
  render: () => (
    <div className="toolbar" role="toolbar" aria-label="Formatting">
      <ToolbarButton label="Bold">
        <Bold />
      </ToolbarButton>
      <ToolbarButton label="Italic">
        <Italic />
      </ToolbarButton>
      <ToolbarButton label="Code">
        <Code />
      </ToolbarButton>
    </div>
  ),
  args: {},
};

// A separator tells groups of controls apart without adding a Tab stop.
export const WithSeparator: Story = {
  render: () => (
    <div className="toolbar" role="toolbar" aria-label="Formatting">
      <ToolbarButton label="Bold">
        <Bold />
      </ToolbarButton>
      <ToolbarButton label="Italic">
        <Italic />
      </ToolbarButton>
      <span
        className="toolbar__separator"
        role="separator"
        aria-orientation="vertical"
      />
      <ToolbarButton label="Link">
        <Link />
      </ToolbarButton>
      <ToolbarButton label="Code">
        <Code />
      </ToolbarButton>
    </div>
  ),
  args: {},
};

// A control that cannot act right now stays in place, dimmed.
export const WithDisabledControl: Story = {
  render: () => (
    <div className="toolbar" role="toolbar" aria-label="Formatting">
      <ToolbarButton label="Bold">
        <Bold />
      </ToolbarButton>
      <ToolbarButton label="Italic" disabled>
        <Italic />
      </ToolbarButton>
      <span
        className="toolbar__separator"
        role="separator"
        aria-orientation="vertical"
      />
      <ToolbarButton label="Link" disabled>
        <Link />
      </ToolbarButton>
    </div>
  ),
  args: {},
};

// The bar wraps when it runs out of room, so a narrow column keeps every
// control reachable.
export const Wrapping: Story = {
  render: () => (
    <div style={{ width: "10rem" }}>
      <div className="toolbar" role="toolbar" aria-label="Formatting">
        <ToolbarButton label="Bold">
          <Bold />
        </ToolbarButton>
        <ToolbarButton label="Italic">
          <Italic />
        </ToolbarButton>
        <ToolbarButton label="Link">
          <Link />
        </ToolbarButton>
        <ToolbarButton label="Code">
          <Code />
        </ToolbarButton>
      </div>
    </div>
  ),
  args: {},
};
