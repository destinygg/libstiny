import { cva } from "class-variance-authority";

// `badge.scss` does `.badge { @extend .badge--primary }`, so a bare `.badge`
// already looks primary. Defaulting to primary keeps <Badge> identical to it.
export const badgeVariants = cva("badge", {
  variants: {
    intent: {
      primary: "badge--primary",
      success: "badge--success",
      danger: "badge--danger",
      neutral: "badge--neutral",
      accent: "badge--accent",
    },
  },
  defaultVariants: { intent: "primary" },
});
