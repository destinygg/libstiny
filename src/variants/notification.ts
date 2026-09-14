import { cva } from "class-variance-authority";

// Two independent axes that combine freely, e.g.
// `notification notification--danger notification--toast`.
export const notificationVariants = cva("notification", {
  variants: {
    intent: {
      primary: "notification--primary",
      success: "notification--success",
      danger: "notification--danger",
      neutral: "notification--neutral",
    },
    type: {
      alert: "notification--alert",
      toast: "notification--toast",
    },
  },
  defaultVariants: { intent: "neutral", type: "alert" },
});
