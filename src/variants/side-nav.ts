import { cva } from "class-variance-authority";

export const sideNavItemVariants = cva("side-nav__item", {
  variants: {
    active: { true: "side-nav__item--active" },
  },
});

// Note the polarity: side-nav.scss has a `--collapsed` modifier, not `--open`,
// and hides `.side-nav__category-content` beneath it.
export const sideNavCategoryVariants = cva("side-nav__category", {
  variants: {
    collapsed: { true: "side-nav__category--collapsed" },
  },
});
