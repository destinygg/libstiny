import { cva } from "class-variance-authority";

// The side the popover sits on relative to its trigger. popover.scss places
// `.popover__arrow` on the opposite edge, pointing back at the trigger.
export const popoverVariants = cva("popover", {
  variants: {
    side: {
      top: "popover--top",
      bottom: "popover--bottom",
      left: "popover--left",
      right: "popover--right",
    },
  },
});
