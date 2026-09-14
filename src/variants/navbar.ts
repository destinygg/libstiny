import { cva } from "class-variance-authority";

export const navbarItemVariants = cva("navbar__item", {
  variants: {
    active: { true: "navbar__item--active" },
  },
});
