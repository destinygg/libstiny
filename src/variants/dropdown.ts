import { cva } from "class-variance-authority";

// `--highlighted` mirrors `:hover` for the item that has keyboard focus.
export const dropdownItemVariants = cva("dropdown__item", {
  variants: {
    highlighted: { true: "dropdown__item--highlighted" },
  },
});
