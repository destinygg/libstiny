import * as React from "react";
import { navbarItemVariants } from "../variants/navbar";
import { cx } from "./utils/class-name";
import { useRenderElement, type RenderProp } from "./utils/render";

/*
 * Every part is a thin element with one libstiny class. There is no menu or
 * drawer button part: compose one from the components that own that behaviour,
 * e.g. `<Drawer.Trigger render={<Button intent="tertiary" iconOnly />}>`.
 */

/* -------------------------------------------------------------------- Root */

export interface NavbarRootProps extends React.HTMLAttributes<HTMLElement> {
  render?: RenderProp;
}

export const NavbarRoot = React.forwardRef<HTMLElement, NavbarRootProps>(
  function NavbarRoot({ className, render, ...rest }, ref) {
    return useRenderElement(
      render,
      "nav",
      { ...rest, className: cx("navbar", className) },
      ref,
    );
  },
);

/* -------------------------------------------------------------------- Logo */

export interface NavbarLogoProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  render?: RenderProp;
}

export const NavbarLogo = React.forwardRef<HTMLImageElement, NavbarLogoProps>(
  function NavbarLogo({ className, render, ...rest }, ref) {
    return useRenderElement(
      render,
      "img",
      { ...rest, className: cx("navbar__logo", className) },
      ref,
    );
  },
);

/* ------------------------------------------------------------------- Items */

export interface NavbarItemsProps extends React.HTMLAttributes<HTMLDivElement> {
  render?: RenderProp;
}

/** A horizontal run of `Item`s or `Icon`s. */
export const NavbarItems = React.forwardRef<HTMLDivElement, NavbarItemsProps>(
  function NavbarItems({ className, render, ...rest }, ref) {
    return useRenderElement(
      render,
      "div",
      { ...rest, className: cx("navbar__items", className) },
      ref,
    );
  },
);

/* -------------------------------------------------------------------- Item */

export interface NavbarItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** The current page. Also sets `aria-current="page"`. */
  active?: boolean;
  /** Render a router link instead, e.g. `render={<Link to="/" />}`. */
  render?: RenderProp;
}

export const NavbarItem = React.forwardRef<HTMLAnchorElement, NavbarItemProps>(
  function NavbarItem({ active, className, render, ...rest }, ref) {
    return useRenderElement(
      render,
      "a",
      {
        "aria-current": active ? "page" : undefined,
        ...rest,
        className: navbarItemVariants({ active, className }),
      },
      ref,
    );
  },
);

/* -------------------------------------------------------------------- Icon */

export interface NavbarIconProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  render?: RenderProp;
}

/** A square icon-only link. Give it an `aria-label`. */
export const NavbarIcon = React.forwardRef<HTMLAnchorElement, NavbarIconProps>(
  function NavbarIcon({ className, render, ...rest }, ref) {
    return useRenderElement(
      render,
      "a",
      { ...rest, className: cx("navbar__icon", className) },
      ref,
    );
  },
);

/* ----------------------------------------------------------------- Actions */

export interface NavbarActionsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  render?: RenderProp;
}

/** Pushed to the far end of the bar. */
export const NavbarActions = React.forwardRef<
  HTMLDivElement,
  NavbarActionsProps
>(function NavbarActions({ className, render, ...rest }, ref) {
  return useRenderElement(
    render,
    "div",
    { ...rest, className: cx("navbar__actions", className) },
    ref,
  );
});

/* ------------------------------------------------------------------- Title */

export interface NavbarTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  render?: RenderProp;
}

/** A page title beside the logo, typically an icon followed by text. */
export const NavbarTitle = React.forwardRef<HTMLDivElement, NavbarTitleProps>(
  function NavbarTitle({ className, render, ...rest }, ref) {
    return useRenderElement(
      render,
      "div",
      { ...rest, className: cx("navbar__title", className) },
      ref,
    );
  },
);

/* -------------------------------------------------------------------- User */

export interface NavbarUserProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  render?: RenderProp;
}

/**
 * The signed-in user's button. To open an account menu from it, render it as
 * the trigger: `<Dropdown.Trigger render={<Navbar.User />}>`.
 */
export const NavbarUser = React.forwardRef<HTMLButtonElement, NavbarUserProps>(
  function NavbarUser({ className, type = "button", render, ...rest }, ref) {
    return useRenderElement(
      render,
      "button",
      {
        ...rest,
        ...(render ? null : { type }),
        className: cx("navbar__user", className),
      },
      ref,
    );
  },
);

export const Navbar = {
  Root: NavbarRoot,
  Logo: NavbarLogo,
  Items: NavbarItems,
  Item: NavbarItem,
  Icon: NavbarIcon,
  Actions: NavbarActions,
  Title: NavbarTitle,
  User: NavbarUser,
};
