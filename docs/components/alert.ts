import { cva } from "cva";

export const alertComponent = cva({
  base: "alert",
  variants: {
    variant: {
      primary: "alert--primary",
      danger: "alert--danger",
      neutral: "alert--neutral",
      success: "alert--success",
    },
  },
});
