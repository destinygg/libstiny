import * as React from "react";
import { cx } from "./utils/class-name";

export type RadioProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
>;

/**
 * A native `<input type="radio">`; radio.scss styles the input itself. Give
 * radios in a group the same `name`, and the browser moves between them with
 * the arrow keys. Wrap it in a `<label>` of your own, or use `Choicebox`.
 */
export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  function Radio({ className, ...rest }, ref) {
    return (
      <input
        {...rest}
        ref={ref}
        type="radio"
        className={cx("radio", className)}
      />
    );
  },
);
