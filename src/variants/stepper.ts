import { cva } from "class-variance-authority";

// stepper.scss colours the bar, dot and label from a modifier on the step, so
// status lives on `.stepper__step` rather than on each child.
export const stepperStepVariants = cva("stepper__step", {
  variants: {
    status: {
      upcoming: "",
      active: "stepper__step--active",
      completed: "stepper__step--completed",
    },
  },
  defaultVariants: { status: "upcoming" },
});
