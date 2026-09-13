import * as React from "react";
import { cx } from "class-variance-authority";

export interface TableProps
  extends React.TableHTMLAttributes<HTMLTableElement> {
  /**
   * Props for the `.table-wrapper` div that supplies the border, radius and
   * background.
   */
  wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
}

/**
 * `table.scss` styles bare `th`/`td`/`thead tr` as descendants of
 * `.table-wrapper`, so there are deliberately no Row/Cell subcomponents and no
 * element may sit between the wrapper and the `<table>` — either would break
 * the selectors. Write native `<thead>/<tr>/<th>/<td>` as children.
 */
export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  function Table({ className, wrapperProps, children, ...rest }, ref) {
    return (
      <div
        {...wrapperProps}
        className={cx("table-wrapper", wrapperProps?.className)}
      >
        <table {...rest} ref={ref} className={className}>
          {children}
        </table>
      </div>
    );
  },
);
