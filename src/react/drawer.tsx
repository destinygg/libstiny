import * as React from "react";
import { Drawer as BaseDrawer } from "@base-ui/react/drawer";
import { drawerItemVariants, drawerVariants } from "../variants/drawer";
import { cx, resolve } from "./utils/class-name";
import { useRenderElement, type RenderProp } from "./utils/render";

/*
 * Two ways to use the drawer:
 *
 * - Off-canvas: `Root`, `Trigger`, `Popup` and `Close` are built on Base UI's
 *   Drawer, which supplies the focus trap, Escape and outside-click dismissal,
 *   scroll lock and swipe-to-dismiss. `Popup` renders the `.drawer` panel fixed
 *   to the left edge of the viewport.
 * - Inline: `Panel` renders the same `.drawer` in the page flow, for a
 *   persistent sidebar.
 *
 * Fill either with `Logo`, `CategoryGroup`, `Category`, `Item`, `Footer` and
 * `ActionFooter`.
 */

/* -------------------------------------------------------------------- Root */

export type DrawerRootProps = BaseDrawer.Root.Props;

/**
 * Base UI's Drawer root, defaulting `swipeDirection` to `"left"`: the drawer
 * enters from the left edge, so swiping left dismisses it.
 */
export function DrawerRoot({
  swipeDirection = "left",
  ...rest
}: DrawerRootProps) {
  return <BaseDrawer.Root swipeDirection={swipeDirection} {...rest} />;
}

export const DrawerTrigger = BaseDrawer.Trigger;
export type DrawerTriggerProps = BaseDrawer.Trigger.Props;

export const DrawerClose = BaseDrawer.Close;
export type DrawerCloseProps = BaseDrawer.Close.Props;

/* ------------------------------------------------------------------- Popup */

export interface DrawerPopupProps
  extends BaseDrawer.Popup.Props,
    Pick<BaseDrawer.Portal.Props, "container" | "keepMounted"> {}

/**
 * The off-canvas panel, with its portal, overlay and viewport included:
 *
 *   Portal > .modal-overlay + .drawer-viewport > .drawer.drawer--off-canvas
 *
 * Give it an `aria-label`, since a drawer usually has no visible title.
 * `container` and `keepMounted` go to the portal; everything else to `.drawer`.
 */
export const DrawerPopup = React.forwardRef<HTMLDivElement, DrawerPopupProps>(
  function DrawerPopup({ container, keepMounted, className, ...rest }, ref) {
    return (
      <BaseDrawer.Portal container={container} keepMounted={keepMounted}>
        <BaseDrawer.Backdrop className="modal-overlay" />
        {/* Base UI tracks swipes and touch scroll locking on the viewport. */}
        <BaseDrawer.Viewport className="drawer-viewport">
          <BaseDrawer.Popup
            ref={ref}
            {...rest}
            className={(state) =>
              drawerVariants({
                offCanvas: true,
                // Base UI holds `starting` for the first frame after opening
                // and `ending` until the exit transition finishes, so the
                // panel slides between off-screen and its resting position.
                closed:
                  state.transitionStatus === "starting" ||
                  state.transitionStatus === "ending",
                className: resolve(className, state),
              })
            }
          />
        </BaseDrawer.Viewport>
      </BaseDrawer.Portal>
    );
  },
);

/* ------------------------------------------------------------------- Panel */

export interface DrawerPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  render?: RenderProp;
}

/** The drawer rendered inline, in the page flow. */
export const DrawerPanel = React.forwardRef<HTMLDivElement, DrawerPanelProps>(
  function DrawerPanel({ className, render, ...rest }, ref) {
    return useRenderElement(
      render,
      "div",
      { ...rest, className: drawerVariants({ className }) },
      ref,
    );
  },
);

/* -------------------------------------------------------------------- Logo */

export interface DrawerLogoProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  render?: RenderProp;
}

export const DrawerLogo = React.forwardRef<HTMLImageElement, DrawerLogoProps>(
  function DrawerLogo({ className, render, ...rest }, ref) {
    return useRenderElement(
      render,
      "img",
      { ...rest, className: cx("drawer__logo", className) },
      ref,
    );
  },
);

/* ----------------------------------------------------------- CategoryGroup */

export interface DrawerCategoryGroupProps
  extends React.HTMLAttributes<HTMLDivElement> {
  render?: RenderProp;
}

/** Holds the `Category`s, and scrolls when they overflow the drawer. */
export const DrawerCategoryGroup = React.forwardRef<
  HTMLDivElement,
  DrawerCategoryGroupProps
>(function DrawerCategoryGroup({ className, render, ...rest }, ref) {
  return useRenderElement(
    render,
    "div",
    { ...rest, className: cx("drawer__category-group", className) },
    ref,
  );
});

/* ---------------------------------------------------------------- Category */

export interface DrawerCategoryProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /** The uppercase heading above the category's items. */
  title?: React.ReactNode;
  render?: RenderProp;
}

export const DrawerCategory = React.forwardRef<
  HTMLDivElement,
  DrawerCategoryProps
>(function DrawerCategory(
  { title, className, children, render, ...rest },
  ref,
) {
  return useRenderElement(
    render,
    "div",
    {
      ...rest,
      className: cx("drawer__category", className),
      children: (
        <>
          {title != null && (
            <span className="drawer__category-title">{title}</span>
          )}
          {children}
        </>
      ),
    },
    ref,
  );
});

/* -------------------------------------------------------------------- Item */

export interface DrawerItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** The current page. Also sets `aria-current="page"`. */
  active?: boolean;
  /**
   * Render a router link or a button instead, e.g.
   * `render={<Link to="/" />}` or `render={<button type="button" />}`.
   */
  render?: RenderProp;
}

export const DrawerItem = React.forwardRef<HTMLAnchorElement, DrawerItemProps>(
  function DrawerItem({ active, className, render, ...rest }, ref) {
    return useRenderElement(
      render,
      "a",
      {
        "aria-current": active ? "page" : undefined,
        ...rest,
        className: drawerItemVariants({ active, className }),
      },
      ref,
    );
  },
);

/* ------------------------------------------------------------------ Footer */

export interface DrawerFooterProps
  extends React.HTMLAttributes<HTMLDivElement> {
  render?: RenderProp;
}

/** A centred row, typically icon buttons. */
export const DrawerFooter = React.forwardRef<HTMLDivElement, DrawerFooterProps>(
  function DrawerFooter({ className, render, ...rest }, ref) {
    return useRenderElement(
      render,
      "div",
      { ...rest, className: cx("drawer__footer", className) },
      ref,
    );
  },
);

/* ------------------------------------------------------------ ActionFooter */

export interface DrawerActionFooterProps
  extends React.HTMLAttributes<HTMLDivElement> {
  render?: RenderProp;
}

/** A bordered footer holding a primary action, e.g. "Exit Dashboard". */
export const DrawerActionFooter = React.forwardRef<
  HTMLDivElement,
  DrawerActionFooterProps
>(function DrawerActionFooter({ className, render, ...rest }, ref) {
  return useRenderElement(
    render,
    "div",
    { ...rest, className: cx("drawer__action-footer", className) },
    ref,
  );
});

export const Drawer = {
  Root: DrawerRoot,
  Trigger: DrawerTrigger,
  Popup: DrawerPopup,
  Close: DrawerClose,
  Panel: DrawerPanel,
  Logo: DrawerLogo,
  CategoryGroup: DrawerCategoryGroup,
  Category: DrawerCategory,
  Item: DrawerItem,
  Footer: DrawerFooter,
  ActionFooter: DrawerActionFooter,
};
