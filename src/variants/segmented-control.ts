import { cva } from "class-variance-authority";

export const segmentedControlVariants = cva("segmented-control");

// `--accent` only has a visible effect when combined with `--active`; the SCSS
// targets the compound selector `&--active.segmented-control__tab--accent`.
export const segmentedControlTabVariants = cva("segmented-control__tab", {
  variants: {
    active: { true: "segmented-control__tab--active" },
    accent: { true: "segmented-control__tab--accent" },
  },
});
