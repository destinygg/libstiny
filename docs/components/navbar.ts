import { cva } from "cva";

export const navItemComponent = cva({
  base: "nav-item",
  variants: {
    active: {
      true: "nav-item--active",
    },
  },
});
