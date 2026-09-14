import { cva } from "class-variance-authority";

// `.tabs` is the strip that lays tabs out, and carries the orientation modifier.
export const tabsVariants = cva("tabs", {
  variants: {
    vertical: { true: "tabs--vertical" },
  },
});

// `.tab` is a TOP-LEVEL block, not `.tabs__tab`. It must be a descendant of
// `.tabs--vertical` for the vertical underline rules to apply.
export const tabVariants = cva("tab", {
  variants: {
    active: { true: "tab--active" },
  },
});
