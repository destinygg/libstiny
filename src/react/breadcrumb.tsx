import * as React from "react";
import { cx } from "./utils/class-name";
import { useRenderElement, type RenderProp } from "./utils/render";

/* -------------------------------------------------------------------- Root */

export interface BreadcrumbRootProps extends React.HTMLAttributes<HTMLElement> {
  render?: RenderProp;
}

/** A `<nav>` landmark, labelled "Breadcrumb" unless you pass `aria-label`. */
export const BreadcrumbRoot = React.forwardRef<
  HTMLElement,
  BreadcrumbRootProps
>(function BreadcrumbRoot({ className, render, ...rest }, ref) {
  return useRenderElement(
    render,
    "nav",
    {
      "aria-label": "Breadcrumb",
      ...rest,
      className: cx("breadcrumb", className),
    },
    ref,
  );
});

/* -------------------------------------------------------------------- Link */

export interface BreadcrumbLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Render a router link instead, e.g. `render={<Link to="/auction" />}`. */
  render?: RenderProp;
}

/**
 * An ancestor page. A leading `<svg class="lucide">` child, such as a back
 * arrow, is sized to the text by breadcrumb.scss.
 */
export const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  BreadcrumbLinkProps
>(function BreadcrumbLink({ className, render, ...rest }, ref) {
  return useRenderElement(
    render,
    "a",
    { ...rest, className: cx("breadcrumb__link", className) },
    ref,
  );
});

/* --------------------------------------------------------------- Separator */

export interface BreadcrumbSeparatorProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "children"> {
  render?: RenderProp;
}

/** The dot between crumbs. Decorative, so it is hidden from assistive tech. */
export const BreadcrumbSeparator = React.forwardRef<
  HTMLSpanElement,
  BreadcrumbSeparatorProps
>(function BreadcrumbSeparator({ className, render, ...rest }, ref) {
  return useRenderElement(
    render,
    "span",
    {
      "aria-hidden": true,
      ...rest,
      className: cx("breadcrumb__separator", className),
    },
    ref,
  );
});

/* ----------------------------------------------------------------- Current */

export interface BreadcrumbCurrentProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  render?: RenderProp;
}

/** The current page. Not a link; marked `aria-current="page"`. */
export const BreadcrumbCurrent = React.forwardRef<
  HTMLSpanElement,
  BreadcrumbCurrentProps
>(function BreadcrumbCurrent({ className, render, ...rest }, ref) {
  return useRenderElement(
    render,
    "span",
    {
      "aria-current": "page",
      ...rest,
      className: cx("breadcrumb__current", className),
    },
    ref,
  );
});

export const Breadcrumb = {
  Root: BreadcrumbRoot,
  Link: BreadcrumbLink,
  Separator: BreadcrumbSeparator,
  Current: BreadcrumbCurrent,
};
