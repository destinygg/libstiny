import { cva } from "cva";

export const buttonComponent = cva({
  base: "button",
  variants: {
    intent: {
      primary: "button--primary",
      secondary: "button--secondary",
      tertiary: "button--tertiary",
      ghost: "button--ghost",
      danger: "button--danger",
    },

    size: {
      default: "",
      large: "button--large",
      small: "button--small",
    },

    iconOnly: {
      true: "button--icon-only",
    },
  },
});
