import { cva } from "cva";

export const notificationComponent = cva({
  base: "notification",
  variants: {
    variant: {
      primary: "notification--primary",
      danger: "notification--danger",
      neutral: "notification--neutral",
      success: "notification--success",
    },
    type: {
      toast: "notification--toast",
      alert: "notification--alert",
    },
  },
});
