import * as React from "react";
import { cx } from "./utils/class-name";

export interface ChoiceboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "title"> {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Extra content below the title and subtitle. */
  children?: React.ReactNode;
}

/**
 * A large selectable card around a native radio. choicebox.scss highlights the
 * card with `:has(input[type="radio"]:checked)`, so selection styling needs no
 * state from React. Give choiceboxes in a group the same `name`.
 *
 * `className` and `style` go on the outer `<label>`. Every other prop, and the
 * ref, goes on the `<input>`.
 */
export const Choicebox = React.forwardRef<HTMLInputElement, ChoiceboxProps>(
  function Choicebox(
    { title, subtitle, className, style, children, ...rest },
    ref,
  ) {
    return (
      <label className={cx("choicebox", className)} style={style}>
        {(title != null || subtitle != null || children != null) && (
          // A span, not a div: <label> only permits phrasing content.
          <span className="choicebox__content">
            {title != null && <span className="choicebox__title">{title}</span>}
            {subtitle != null && (
              <span className="choicebox__subtitle">{subtitle}</span>
            )}
            {children}
          </span>
        )}
        <input {...rest} ref={ref} type="radio" className="radio" />
      </label>
    );
  },
);
