import * as React from "react";
import { cx } from "./utils/class-name";
import { CheckIcon } from "./utils/icons";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  /** The label, rendered beside the box. Without one, pass `aria-label`. */
  children?: React.ReactNode;
}

/**
 * A native `<input type="checkbox">` inside libstiny's markup, so the browser
 * supplies the role, Space to toggle, label clicks and form submission, and
 * checkbox.scss's `input:checked + .checkbox__box` selectors apply as written.
 *
 * `className` and `style` go on the outer `<label>`. Every other prop, and the
 * ref, goes on the `<input>`.
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox({ className, style, children, ...rest }, ref) {
    return (
      <label className={cx("checkbox", className)} style={style}>
        <input {...rest} ref={ref} type="checkbox" />
        <span className="checkbox__box">
          <CheckIcon className="checkbox__tick" />
        </span>
        {children != null && (
          <span className="checkbox__label">{children}</span>
        )}
      </label>
    );
  },
);
