import * as React from "react";
import { cardVariants } from "../variants/card";
import { useRenderElement, type RenderProp } from "./utils/render";

export interface CardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /** Stronger background, border and shadow; also recolours title/subtitle. */
  prominent?: boolean;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Body copy. `children` wins if both are supplied. */
  description?: React.ReactNode;
  /** Leading `.card__extra` row, typically `<Badge>`s. */
  badges?: React.ReactNode;
  /** Trailing right-aligned row, typically `<Button>`s. */
  actions?: React.ReactNode;
  render?: RenderProp;
}

/**
 * `card.scss` hides `.card__extra` and `.card__description` with `:empty`, but
 * JSX can emit a stray whitespace text node that defeats it. So the wrappers
 * are omitted outright when their slot is empty, with `:empty` as a backstop.
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(function Card(
  {
    prominent,
    title,
    subtitle,
    description,
    badges,
    actions,
    className,
    children,
    render,
    ...rest
  },
  ref,
) {
  const body = children ?? description;

  return useRenderElement(
    render,
    "div",
    {
      ...rest,
      className: cardVariants({ prominent, className }),
      children: (
        <>
          {badges != null && <div className="card__extra">{badges}</div>}
          {(title != null || subtitle != null) && (
            <div className="card__header">
              {title != null && <span className="card__title">{title}</span>}
              {subtitle != null && (
                <span className="card__subtitle">{subtitle}</span>
              )}
            </div>
          )}
          {body != null && <div className="card__description">{body}</div>}
          {actions != null && (
            <div className="card__extra card__extra--right">{actions}</div>
          )}
        </>
      ),
    },
    ref,
  );
});
