import * as React from "react";
import { cx } from "./utils/class-name";

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  /** The label, rendered beside the toggle. Without one, pass `aria-label`. */
  children?: React.ReactNode;
}

/**
 * A native `<input type="checkbox" role="switch">`, so assistive tech announces
 * on/off, and switch.scss's `input:checked + .switch__slider` selectors apply
 * as written.
 *
 * `className` and `style` go on the outer `<label>`. Every other prop, and the
 * ref, goes on the `<input>`.
 */
export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  function Switch({ className, style, children, ...rest }, ref) {
    return (
      <label className={cx("switch", className)} style={style}>
        <span className="switch__toggle">
          <input role="switch" {...rest} ref={ref} type="checkbox" />
          <span className="switch__slider" />
        </span>
        {children != null && <span className="switch__label">{children}</span>}
      </label>
    );
  },
);
