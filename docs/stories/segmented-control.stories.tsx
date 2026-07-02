import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { cva } from "cva";

type SegmentedControlArgs = {};

const tab = cva({
  base: "segmented-control__tab",
  variants: {
    active: {
      true: "segmented-control__tab--active",
    },
    accent: {
      true: "segmented-control__tab--accent",
    },
  },
});

const meta: Meta<SegmentedControlArgs> = {
  title: "SegmentedControl",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<SegmentedControlArgs>;

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

const LayoutGrid = () => (
  <Icon>
    <rect width="7" height="7" x="3" y="3" rx="1" />
    <rect width="7" height="7" x="14" y="3" rx="1" />
    <rect width="7" height="7" x="14" y="14" rx="1" />
    <rect width="7" height="7" x="3" y="14" rx="1" />
  </Icon>
);

const Trophy = () => (
  <Icon>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </Icon>
);

const ImageIcon = () => (
  <Icon>
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
  </Icon>
);

const Coins = () => (
  <Icon>
    <circle cx="8" cy="8" r="6" />
    <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
    <path d="M7 6h1v4" />
    <path d="m16.71 13.88.7.71-2.82 2.82" />
  </Icon>
);

// A navigation filter where one option is the highlighted "accent" choice.
export const Primary: Story = {
  render: () => {
    const [selected, setSelected] = useState("all");

    return (
      <div className="segmented-control" role="group" aria-label="Filter designs">
        <button
          type="button"
          className={tab({ active: selected === "all" })}
          onClick={() => setSelected("all")}
        >
          <LayoutGrid />
          All
        </button>
        <button
          type="button"
          className={tab({ active: selected === "winners", accent: true })}
          onClick={() => setSelected("winners")}
        >
          <Trophy />
          Winners
        </button>
      </div>
    );
  },
  args: {},
};

// A plain two-way tab toggle with no accent option.
export const Tabs: Story = {
  render: () => {
    const [selected, setSelected] = useState("designs");

    return (
      <div className="segmented-control" role="group" aria-label="My Vestaboard">
        <button
          type="button"
          className={tab({ active: selected === "designs" })}
          onClick={() => setSelected("designs")}
        >
          <ImageIcon />
          Designs
        </button>
        <button
          type="button"
          className={tab({ active: selected === "contributions" })}
          onClick={() => setSelected("contributions")}
        >
          <Coins />
          Contributions
        </button>
      </div>
    );
  },
  args: {},
};
