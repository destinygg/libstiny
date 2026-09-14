import * as React from "react";
import { buttonVariants } from "../variants/button";
import { useRenderElement, type RenderProp } from "./utils/render";

export type ButtonIntent = "primary" | "secondary" | "tertiary" | "danger";
export type ButtonSize = "default" | "small" | "large";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual weight. Defaults to `"primary"`. */
  intent?: ButtonIntent;
  /** Control height and typography. Defaults to `"default"`. */
  size?: ButtonSize;
  /** Square, padding-free button holding only an icon. Pair with `aria-label`. */
  iconOnly?: boolean;
  /** Stretch to the width of the parent. */
  fullWidth?: boolean;
  /** Render a different element, e.g. `render={<a href="/faq" />}`. */
  render?: RenderProp;
}

/**
 * Icons: any `<svg class="lucide">` inside is sized by button.scss's
 * `icon-size` mixin. lucide-react's default output already carries that class.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      intent,
      size,
      iconOnly,
      fullWidth,
      className,
      type = "button",
      render,
      ...rest
    },
    ref,
  ) {
    return useRenderElement(
      render,
      "button",
      {
        ...rest,
        // `type` is only meaningful on <button>; drop it when substituting an
        // <a>. A render element can still set its own.
        ...(render ? null : { type }),
        className: buttonVariants({
          intent,
          size,
          iconOnly,
          fullWidth,
          className,
        }),
      },
      ref,
    );
  },
);
