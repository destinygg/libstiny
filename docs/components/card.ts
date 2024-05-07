import { cva } from "cva";

export const cardComponent = cva({
  base: "card",
  variants: {
    prominent: {
      true: "card--prominent",
    },
  },
});
