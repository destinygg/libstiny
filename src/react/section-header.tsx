import * as React from "react";
import { cx } from "class-variance-authority";

export interface SectionHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Heading text. */
  children: React.ReactNode;
  /** Heading level, for document outline correctness. Defaults to 2. */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const SectionHeader = React.forwardRef<
  HTMLDivElement,
  SectionHeaderProps
>(function SectionHeader({ children, level = 2, className, ...rest }, ref) {
  const Heading = `h${level}` as const;

  return (
    <div {...rest} ref={ref} className={cx("section-header", className)}>
      <div className="section-header__content">
        <Heading className="section-header__heading">{children}</Heading>
        <div className="section-header__divider" />
      </div>
    </div>
  );
});
