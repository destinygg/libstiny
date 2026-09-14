import * as React from "react";
import { Collapsible } from "@base-ui/react/collapsible";
import {
  sideNavCategoryVariants,
  sideNavItemVariants,
} from "../variants/side-nav";
import { cx, resolve } from "./utils/class-name";
import { ChevronUpIcon } from "./utils/icons";
import { useRenderElement, type RenderProp } from "./utils/render";

/* -------------------------------------------------------------------- Root */

export interface SideNavRootProps extends React.HTMLAttributes<HTMLElement> {
  render?: RenderProp;
}

export const SideNavRoot = React.forwardRef<HTMLElement, SideNavRootProps>(
  function SideNavRoot({ className, render, ...rest }, ref) {
    return useRenderElement(
      render,
      "nav",
      { ...rest, className: cx("side-nav", className) },
      ref,
    );
  },
);

/* ------------------------------------------------------------------- Group */

export interface SideNavGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {
  render?: RenderProp;
}

/** A vertical stack of `Item`s. */
export const SideNavGroup = React.forwardRef<HTMLDivElement, SideNavGroupProps>(
  function SideNavGroup({ className, render, ...rest }, ref) {
    return useRenderElement(
      render,
      "div",
      { ...rest, className: cx("side-nav__group", className) },
      ref,
    );
  },
);

/* -------------------------------------------------------------------- Item */

export interface SideNavItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** The current page. Also sets `aria-current="page"`. */
  active?: boolean;
  /** Render a router link instead, e.g. `render={<Link to="/admin" />}`. */
  render?: RenderProp;
}

export const SideNavItem = React.forwardRef<
  HTMLAnchorElement,
  SideNavItemProps
>(function SideNavItem({ active, className, render, ...rest }, ref) {
  return useRenderElement(
    render,
    "a",
    {
      "aria-current": active ? "page" : undefined,
      ...rest,
      className: sideNavItemVariants({ active, className }),
    },
    ref,
  );
});

/* ---------------------------------------------------------------- Category */

export type SideNavCategoryProps = Collapsible.Root.Props;

/**
 * A collapsible section, built on Base UI's Collapsible. Open by default, like
 * the Twig component; pass `defaultOpen={false}` or control it with
 * `open`/`onOpenChange`.
 */
export const SideNavCategory = React.forwardRef<
  HTMLDivElement,
  SideNavCategoryProps
>(function SideNavCategory({ defaultOpen = true, className, ...rest }, ref) {
  return (
    <Collapsible.Root
      ref={ref}
      defaultOpen={defaultOpen}
      {...rest}
      className={(state) =>
        sideNavCategoryVariants({
          collapsed: !state.open,
          className: resolve(className, state),
        })
      }
    />
  );
});

/* ----------------------------------------------------------------- Heading */

export interface SideNavHeadingProps extends Collapsible.Trigger.Props {
  /** An icon before the heading text. */
  icon?: React.ReactNode;
}

/**
 * The category's toggle: a `<button>` with `aria-expanded`, so it is reachable
 * with Tab and toggles with Enter or Space. The chevron is built in and turns
 * with the `--collapsed` modifier.
 */
export const SideNavHeading = React.forwardRef<
  HTMLButtonElement,
  SideNavHeadingProps
>(function SideNavHeading({ icon, className, children, ...rest }, ref) {
  return (
    <Collapsible.Trigger
      ref={ref}
      {...rest}
      className={(state) => cx("side-nav__heading", resolve(className, state))}
    >
      {icon}
      <span className="side-nav__heading-text">{children}</span>
      <ChevronUpIcon className="side-nav__heading-chevron" />
    </Collapsible.Trigger>
  );
});

/* ------------------------------------------------------------------- Panel */

export type SideNavPanelProps = Collapsible.Panel.Props;

/**
 * The category's items. Supplies the indent line and the inner
 * `.side-nav__group`, so children are just `Item`s. Base UI unmounts the panel
 * while the category is collapsed; pass `keepMounted` to keep it in the DOM.
 */
export const SideNavPanel = React.forwardRef<HTMLDivElement, SideNavPanelProps>(
  function SideNavPanel({ className, children, ...rest }, ref) {
    return (
      <Collapsible.Panel
        ref={ref}
        {...rest}
        className={(state) =>
          cx("side-nav__category-content", resolve(className, state))
        }
      >
        <div className="side-nav__category-indent" />
        <div className="side-nav__group">{children}</div>
      </Collapsible.Panel>
    );
  },
);

export const SideNav = {
  Root: SideNavRoot,
  Group: SideNavGroup,
  Item: SideNavItem,
  Category: SideNavCategory,
  Heading: SideNavHeading,
  Panel: SideNavPanel,
};
