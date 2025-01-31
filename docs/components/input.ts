import { cva } from "cva";

export const inputComponent = cva({
  base: "input",
  variants: {
    validationState: {
      default: "",
      error: "input--error",
      success: "input--success",
    },
  },
});
