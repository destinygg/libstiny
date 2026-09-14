import { cva } from "class-variance-authority";

export const drawerVariants = cva("drawer", {
  variants: {
    // Fixed to the left edge of the viewport, sliding in and out.
    offCanvas: { true: "drawer--off-canvas" },
    // The off-canvas resting position, applied while entering and exiting.
    closed: { true: "drawer--closed" },
  },
});

export const drawerItemVariants = cva("drawer__item", {
  variants: {
    active: { true: "drawer__item--active" },
  },
});
