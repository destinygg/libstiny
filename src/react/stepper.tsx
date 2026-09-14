import * as React from "react";
import { stepperStepVariants } from "../variants/stepper";
import { cx } from "./utils/class-name";
import { DotIcon } from "./utils/icons";
import { useRenderElement, type RenderProp } from "./utils/render";

export type StepperStepStatus = "upcoming" | "active" | "completed";

/* -------------------------------------------------------------------- Root */

export interface StepperRootProps extends React.HTMLAttributes<HTMLDivElement> {
  render?: RenderProp;
}

/**
 * A list of steps. The list role is explicit because rendering an `<ol>` would
 * bring user-agent margins and padding that stepper.scss doesn't reset.
 */
export const StepperRoot = React.forwardRef<HTMLDivElement, StepperRootProps>(
  function StepperRoot({ className, render, ...rest }, ref) {
    return useRenderElement(
      render,
      "div",
      { role: "list", ...rest, className: cx("stepper", className) },
      ref,
    );
  },
);

/* -------------------------------------------------------------------- Step */

export interface StepperStepProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Colours the bar, dot and label. Defaults to `"upcoming"`. */
  status?: StepperStepStatus;
  /** The step's label. */
  children?: React.ReactNode;
  render?: RenderProp;
}

/**
 * Owns the step's internal skeleton (`__bar`, `__label-container`, `__dot`,
 * `__label`), because stepper.scss colours those from the modifier on this
 * element. The active step is marked `aria-current="step"`.
 */
export const StepperStep = React.forwardRef<HTMLDivElement, StepperStepProps>(
  function StepperStep({ status, className, children, render, ...rest }, ref) {
    return useRenderElement(
      render,
      "div",
      {
        role: "listitem",
        "aria-current": status === "active" ? "step" : undefined,
        ...rest,
        className: stepperStepVariants({ status, className }),
        children: (
          <>
            <div className="stepper__bar" />
            <div className="stepper__label-container">
              <div className="stepper__dot">
                <DotIcon />
              </div>
              <div className="stepper__label">{children}</div>
            </div>
          </>
        ),
      },
      ref,
    );
  },
);

export const Stepper = {
  Root: StepperRoot,
  Step: StepperStep,
};
