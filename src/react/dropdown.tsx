import * as React from "react";
import { Menu } from "@base-ui/react/menu";
import { dropdownItemVariants } from "../variants/dropdown";
import { cx, resolve } from "./utils/class-name";

/*
 * Built on Base UI's Menu, which supplies `role="menu"`, arrow-key and
 * typeahead navigation, Escape and outside-click dismissal, and focus return
 * to the trigger.
 *
 * Clicking an `Item` closes the menu; clicking a `LinkItem` doesn't, because
 * following the link navigates away. Either can be changed with `closeOnClick`.
 *
 * Root and Trigger render no libstiny class, so they are Base UI's own parts.
 * Style the trigger with `render`, e.g. `render={<Navbar.User />}`.
 */

export const DropdownRoot = Menu.Root;
export type DropdownRootProps = Menu.Root.Props;

export const DropdownTrigger = Menu.Trigger;
export type DropdownTriggerProps = Menu.Trigger.Props;

/* ------------------------------------------------------------------- Popup */

export interface DropdownPopupProps
  extends Menu.Popup.Props,
    Pick<
      Menu.Positioner.Props,
      "side" | "align" | "sideOffset" | "alignOffset"
    >,
    Pick<Menu.Portal.Props, "container" | "keepMounted"> {}

/**
 * The menu surface, with its portal and positioner included:
 *
 *   Portal > .dropdown-positioner > .dropdown
 *
 * Opens below the trigger, aligned to its end edge, and flips when there isn't
 * room. `side`, `align`, `sideOffset` and `alignOffset` go to the positioner;
 * `container` and `keepMounted` to the portal; everything else to `.dropdown`.
 */
export const DropdownPopup = React.forwardRef<
  HTMLDivElement,
  DropdownPopupProps
>(function DropdownPopup(
  {
    side = "bottom",
    align = "end",
    sideOffset = 8,
    alignOffset,
    container,
    keepMounted,
    className,
    ...rest
  },
  ref,
) {
  return (
    <Menu.Portal container={container} keepMounted={keepMounted}>
      <Menu.Positioner
        className="dropdown-positioner"
        side={side}
        align={align}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
      >
        <Menu.Popup
          ref={ref}
          {...rest}
          className={(state) => cx("dropdown", resolve(className, state))}
        />
      </Menu.Positioner>
    </Menu.Portal>
  );
});

/* -------------------------------------------------------------------- Item */

export type DropdownItemProps = Menu.Item.Props;

/** An action. Closes the menu when clicked, unless `closeOnClick={false}`. */
export const DropdownItem = React.forwardRef<HTMLDivElement, DropdownItemProps>(
  function DropdownItem({ className, ...rest }, ref) {
    return (
      <Menu.Item
        ref={ref}
        {...rest}
        className={(state) =>
          dropdownItemVariants({
            highlighted: state.highlighted,
            className: resolve(className, state),
          })
        }
      />
    );
  },
);

/* ---------------------------------------------------------------- LinkItem */

export type DropdownLinkItemProps = Menu.LinkItem.Props;

/**
 * A link, rendered as `<a role="menuitem">`. Leaves the menu open when clicked
 * unless `closeOnClick` is set, which a client-side router link usually wants.
 */
export const DropdownLinkItem = React.forwardRef<
  HTMLAnchorElement,
  DropdownLinkItemProps
>(function DropdownLinkItem({ className, ...rest }, ref) {
  return (
    <Menu.LinkItem
      ref={ref}
      {...rest}
      className={(state) =>
        dropdownItemVariants({
          highlighted: state.highlighted,
          className: resolve(className, state),
        })
      }
    />
  );
});

/* --------------------------------------------------------------- Separator */

export type DropdownSeparatorProps = Menu.Separator.Props;

/** Rendered as an `<hr>`, the element dropdown.scss styles. */
export const DropdownSeparator = React.forwardRef<
  HTMLDivElement,
  DropdownSeparatorProps
>(function DropdownSeparator(props, ref) {
  return <Menu.Separator ref={ref} render={<hr />} {...props} />;
});

export const Dropdown = {
  Root: DropdownRoot,
  Trigger: DropdownTrigger,
  Popup: DropdownPopup,
  Item: DropdownItem,
  LinkItem: DropdownLinkItem,
  Separator: DropdownSeparator,
};
