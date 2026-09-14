import * as React from "react";
import { Popover as BasePopover } from "@base-ui/react/popover";
import { popoverVariants } from "../variants/popover";
import { cx, resolve } from "./utils/class-name";
import { XIcon } from "./utils/icons";
import { useRenderElement, type RenderProp } from "./utils/render";

/*
 * Built on Base UI's Popover, which supplies collision-aware positioning,
 * Escape and outside-click dismissal, focus management, and the
 * `aria-expanded`/`aria-controls` wiring on the trigger.
 *
 * Root and Trigger render no libstiny class, so they are Base UI's own parts.
 * Style the trigger with `render`, e.g. `render={<Button intent="secondary" />}`.
 */

export const PopoverRoot = BasePopover.Root;
export type PopoverRootProps = BasePopover.Root.Props;

export const PopoverTrigger = BasePopover.Trigger;
export type PopoverTriggerProps = BasePopover.Trigger.Props;

export type PopoverSide = "top" | "bottom" | "left" | "right";

type ResolvedSide = BasePopover.Popup.State["side"];

// Logical sides only occur when requested, which PopoverSide doesn't allow;
// map them anyway so the arrow is never left without a placement class.
function physicalSide(side: ResolvedSide): PopoverSide {
  if (side === "inline-start") return "left";
  if (side === "inline-end") return "right";
  return side;
}

/* ------------------------------------------------------------------- Popup */

export interface PopoverPopupProps
  extends BasePopover.Popup.Props,
    Pick<BasePopover.Positioner.Props, "align" | "sideOffset" | "alignOffset">,
    Pick<BasePopover.Portal.Props, "container" | "keepMounted"> {
  /** The preferred side of the trigger. Defaults to `"bottom"`. */
  side?: PopoverSide;
  /** Render the arrow pointing at the trigger. Defaults to `true`. */
  arrow?: boolean;
}

/**
 * The popover surface, with its portal, positioner and arrow included:
 *
 *   Portal > .popover-positioner > .popover.popover--{side} > .popover__arrow
 *
 * The `popover--{side}` modifier follows the side the popover actually renders
 * on, so when it flips away from a viewport edge the arrow flips with it.
 * `side`, `align`, `sideOffset` and `alignOffset` go to the positioner;
 * `container` and `keepMounted` to the portal; everything else to `.popover`.
 */
export const PopoverPopup = React.forwardRef<HTMLDivElement, PopoverPopupProps>(
  function PopoverPopup(
    {
      side = "bottom",
      align,
      sideOffset = 8,
      alignOffset,
      container,
      keepMounted,
      arrow = true,
      className,
      children,
      ...rest
    },
    ref,
  ) {
    return (
      <BasePopover.Portal container={container} keepMounted={keepMounted}>
        <BasePopover.Positioner
          className="popover-positioner"
          side={side}
          align={align}
          sideOffset={sideOffset}
          alignOffset={alignOffset}
        >
          <BasePopover.Popup
            ref={ref}
            {...rest}
            className={(state) =>
              popoverVariants({
                side: physicalSide(state.side),
                className: resolve(className, state),
              })
            }
          >
            {/* Inside the popup: popover.scss places the arrow with
                `.popover--{side} .popover__arrow`. */}
            {arrow && <BasePopover.Arrow className="popover__arrow" />}
            {children}
          </BasePopover.Popup>
        </BasePopover.Positioner>
      </BasePopover.Portal>
    );
  },
);

/* ------------------------------------------------------------------ Header */

export interface PopoverHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  render?: RenderProp;
}

/** Lays out `Title` and `Close` on one row. */
export const PopoverHeader = React.forwardRef<
  HTMLDivElement,
  PopoverHeaderProps
>(function PopoverHeader({ className, render, ...rest }, ref) {
  return useRenderElement(
    render,
    "div",
    { ...rest, className: cx("popover__header", className) },
    ref,
  );
});

/* ------------------------------------------------------------------- Title */

export type PopoverTitleProps = BasePopover.Title.Props;

/** An `<h2>` that names the popover. */
export const PopoverTitle = React.forwardRef<
  HTMLHeadingElement,
  PopoverTitleProps
>(function PopoverTitle({ className, ...rest }, ref) {
  return (
    <BasePopover.Title
      ref={ref}
      {...rest}
      className={(state) => cx("popover__title", resolve(className, state))}
    />
  );
});

/* ------------------------------------------------------------------- Close */

export type PopoverCloseProps = BasePopover.Close.Props;

/** A close button. Renders an × and is labelled "Close" unless given children. */
export const PopoverClose = React.forwardRef<
  HTMLButtonElement,
  PopoverCloseProps
>(function PopoverClose({ className, children, ...rest }, ref) {
  return (
    <BasePopover.Close
      ref={ref}
      aria-label={children == null ? "Close" : undefined}
      {...rest}
      className={(state) => cx("popover__close", resolve(className, state))}
    >
      {children ?? <XIcon />}
    </BasePopover.Close>
  );
});

/* ----------------------------------------------------------------- Content */

export interface PopoverContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  render?: RenderProp;
}

export const PopoverContent = React.forwardRef<
  HTMLDivElement,
  PopoverContentProps
>(function PopoverContent({ className, render, ...rest }, ref) {
  return useRenderElement(
    render,
    "div",
    { ...rest, className: cx("popover__content", className) },
    ref,
  );
});

export const Popover = {
  Root: PopoverRoot,
  Trigger: PopoverTrigger,
  Popup: PopoverPopup,
  Header: PopoverHeader,
  Title: PopoverTitle,
  Close: PopoverClose,
  Content: PopoverContent,
};
