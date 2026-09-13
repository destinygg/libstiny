import { cva } from "class-variance-authority";

export const buttonVariants = cva("button", {
  variants: {
    intent: {
      primary: "button--primary",
      secondary: "button--secondary",
      tertiary: "button--tertiary",
      danger: "button--danger",
    },
    size: {
      default: "",
      small: "button--small",
      large: "button--large",
    },
    iconOnly: { true: "button--icon-only" },
    fullWidth: { true: "button--full-width" },
  },
  defaultVariants: { intent: "primary", size: "default" },
});
