import { cva } from "class-variance-authority";

export const inputVariants = cva("input", {
  variants: {
    validationState: {
      default: "",
      error: "input--error",
      success: "input--success",
    },
  },
  defaultVariants: { validationState: "default" },
});
