import { cva } from "class-variance-authority";

export const cardVariants = cva("card", {
  variants: {
    prominent: { true: "card--prominent" },
  },
});
