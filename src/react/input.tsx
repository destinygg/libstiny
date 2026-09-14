import * as React from "react";
import { inputVariants } from "../variants/input";
import { cx } from "./utils/class-name";

/*
 * Input, Select and TextArea render native controls inside the same frame:
 *
 *   div.input
 *     label.input__label
 *     div.input__area
 *       div.input__prefix
 *       div.input__container   icon + <input> | <select> | <textarea>
 *       div.input__suffix
 *     span.input__help-text
 *
 * `className` and `style` go on the outer `.input`, the element you lay out.
 * Every other prop, and the ref, goes on the native control, so `name`,
 * `value`, `onChange` and form-library refs work unchanged.
 */

export type InputValidationState = "error" | "success";

interface FieldProps {
  /** Rendered as a `<label>` wired to the control. */
  label?: React.ReactNode;
  /** Supporting text below the control, wired up with `aria-describedby`. */
  helpText?: React.ReactNode;
  /** A segment before the control, e.g. `"https://"`. */
  prefix?: React.ReactNode;
  /** A segment after the control, e.g. `"USD"`. */
  suffix?: React.ReactNode;
  /** An icon inside the control area, before the control. */
  icon?: React.ReactNode;
  /** Colours the border and help text. `"error"` also sets `aria-invalid`. */
  validationState?: InputValidationState;
}

// `prefix` collides with the RDFa attribute in React's HTMLAttributes.
type ControlAttributes<A> = Omit<A, keyof FieldProps>;

interface ControlBase {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  "aria-describedby"?: string;
  "aria-invalid"?: React.AriaAttributes["aria-invalid"];
}

/**
 * Splits a component's props into the frame's and the native control's, and
 * wires the label and help text to the control by id.
 */
function useField<P extends FieldProps & ControlBase>({
  label,
  helpText,
  prefix,
  suffix,
  icon,
  validationState,
  className,
  style,
  ...control
}: P) {
  const generated = React.useId();
  const controlId = control.id ?? `${generated}control`;
  const helpTextId = `${generated}help`;

  return {
    frame: {
      label,
      helpText,
      prefix,
      suffix,
      icon,
      validationState,
      className,
      style,
      controlId,
      helpTextId,
    },
    control: {
      ...control,
      id: controlId,
      "aria-describedby":
        cx(control["aria-describedby"], helpText != null && helpTextId) ||
        undefined,
      "aria-invalid":
        control["aria-invalid"] ??
        (validationState === "error" ? true : undefined),
    },
  };
}

interface FrameProps
  extends FieldProps,
    Pick<ControlBase, "className" | "style"> {
  controlId: string;
  helpTextId: string;
  children: React.ReactNode;
}

function Frame({
  controlId,
  helpTextId,
  label,
  helpText,
  prefix,
  suffix,
  icon,
  validationState,
  className,
  style,
  children,
}: FrameProps) {
  return (
    <div
      className={inputVariants({ validationState, className })}
      style={style}
    >
      {label != null && (
        <label className="input__label" htmlFor={controlId}>
          {label}
        </label>
      )}
      <div className="input__area">
        {prefix != null && <div className="input__prefix">{prefix}</div>}
        <div className="input__container">
          {icon}
          {children}
        </div>
        {suffix != null && <div className="input__suffix">{suffix}</div>}
      </div>
      {helpText != null && (
        <span id={helpTextId} className="input__help-text">
          {helpText}
        </span>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------- Input */

export interface InputProps
  extends ControlAttributes<React.InputHTMLAttributes<HTMLInputElement>>,
    FieldProps {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input(props, ref) {
    const { frame, control } = useField(props);
    return (
      <Frame {...frame}>
        <input {...control} ref={ref} />
      </Frame>
    );
  },
);

/* ------------------------------------------------------------------ Select */

export interface SelectProps
  extends ControlAttributes<React.SelectHTMLAttributes<HTMLSelectElement>>,
    FieldProps {
  /** `<option>` and `<optgroup>` elements. */
  children?: React.ReactNode;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  function Select(props, ref) {
    const { frame, control } = useField(props);
    return (
      <Frame {...frame}>
        <select {...control} ref={ref} />
      </Frame>
    );
  },
);

/* ---------------------------------------------------------------- TextArea */

export interface TextAreaProps
  extends ControlAttributes<React.TextareaHTMLAttributes<HTMLTextAreaElement>>,
    FieldProps {}

/** input.scss drops the fixed control height when the area holds a textarea. */
export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea(props, ref) {
    const { frame, control } = useField(props);
    return (
      <Frame {...frame}>
        <textarea {...control} ref={ref} />
      </Frame>
    );
  },
);
