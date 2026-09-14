import * as React from "react";
import { badgeVariants } from "../variants/badge";
import { useRenderElement, type RenderProp } from "./utils/render";

export type BadgeIntent =
  | "primary"
  | "success"
  | "danger"
  | "neutral"
  | "accent";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Colour. Defaults to `"primary"`, matching a bare `.badge`. */
  intent?: BadgeIntent;
  /** Render a different element. */
  render?: RenderProp;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  function Badge({ intent, className, render, ...rest }, ref) {
    return useRenderElement(
      render,
      "span",
      { ...rest, className: badgeVariants({ intent, className }) },
      ref,
    );
  },
);
