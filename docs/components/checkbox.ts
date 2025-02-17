import { cva } from "cva";

export const checkboxComponent = cva({
  base: "checkbox",
  variants: {
    type: {
      default: "",
      switch: "checkbox--switch",
    },
  },
});
