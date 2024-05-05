import { cva } from "cva";

export const inputComponent = cva({
  base: "input-wrapper",
  variants: {
    error: {
      true: "input--error",
    },
  },
});
