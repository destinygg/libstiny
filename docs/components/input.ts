import { cva } from "cva";

export const inputComponent = cva({
  base: "input",
  variants: {
    error: {
      true: "input--error",
    },
  },
});
