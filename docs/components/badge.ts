import { cva } from "cva";

export const badgeComponent = cva({
  base: "badge",
  variants: {
    variant: {
      primary: "badge--primary",
      danger: "badge--danger",
      neutral: "badge--neutral",
      success: "badge--success",
    },
  },
});
