import * as React from "react";
import { Dialog } from "@base-ui/react/dialog";
import { cx, resolve } from "./utils/class-name";
import { useRenderElement, type RenderProp } from "./utils/render";

/*
 * Built on Base UI's Dialog, which supplies the focus trap, initial and return
 * focus, Escape and outside-click dismissal, scroll lock, `role="dialog"` and
 * the `aria-labelledby`/`aria-describedby` wiring to Title and Subtitle.
 *
 * Root, Trigger and Close render no libstiny class, so they are Base UI's own
 * parts. Style a trigger or close button with `render`:
 *
 *   <Modal.Trigger render={<Button intent="secondary" />}>Open</Modal.Trigger>
 */

export const ModalRoot = Dialog.Root;
export type ModalRootProps = Dialog.Root.Props;

export const ModalTrigger = Dialog.Trigger;
export type ModalTriggerProps = Dialog.Trigger.Props;

export const ModalClose = Dialog.Close;
export type ModalCloseProps = Dialog.Close.Props;

/* ------------------------------------------------------------------- Popup */

export interface ModalPopupProps
  extends Dialog.Popup.Props,
    Pick<Dialog.Portal.Props, "container" | "keepMounted"> {}

/**
 * The modal window, with its portal, overlay and centring viewport included:
 *
 *   Portal > .modal-overlay + .modal-viewport > .modal
 *
 * `container` and `keepMounted` go to the portal; every other prop goes to the
 * `.modal` element.
 */
export const ModalPopup = React.forwardRef<HTMLDivElement, ModalPopupProps>(
  function ModalPopup({ container, keepMounted, className, ...rest }, ref) {
    return (
      <Dialog.Portal container={container} keepMounted={keepMounted}>
        <Dialog.Backdrop className="modal-overlay" />
        <Dialog.Viewport className="modal-viewport">
          <Dialog.Popup
            ref={ref}
            {...rest}
            className={(state) => cx("modal", resolve(className, state))}
          />
        </Dialog.Viewport>
      </Dialog.Portal>
    );
  },
);

/* ------------------------------------------------------------------ Header */

export interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  render?: RenderProp;
}

/** Stacks `Title` and `Subtitle`. */
export const ModalHeader = React.forwardRef<HTMLDivElement, ModalHeaderProps>(
  function ModalHeader({ className, render, ...rest }, ref) {
    return useRenderElement(
      render,
      "div",
      { ...rest, className: cx("modal__header", className) },
      ref,
    );
  },
);

/* ------------------------------------------------------------------- Title */

export type ModalTitleProps = Dialog.Title.Props;

/** An `<h2>` that names the dialog. */
export const ModalTitle = React.forwardRef<HTMLHeadingElement, ModalTitleProps>(
  function ModalTitle({ className, ...rest }, ref) {
    return (
      <Dialog.Title
        ref={ref}
        {...rest}
        className={(state) => cx("modal__title", resolve(className, state))}
      />
    );
  },
);

/* ---------------------------------------------------------------- Subtitle */

export type ModalSubtitleProps = Dialog.Description.Props;

/** A `<p>` that describes the dialog. */
export const ModalSubtitle = React.forwardRef<
  HTMLParagraphElement,
  ModalSubtitleProps
>(function ModalSubtitle({ className, ...rest }, ref) {
  return (
    <Dialog.Description
      ref={ref}
      {...rest}
      className={(state) => cx("modal__subtitle", resolve(className, state))}
    />
  );
});

/* ----------------------------------------------------------------- Actions */

export interface ModalActionsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  render?: RenderProp;
}

/** A right-aligned row of buttons. */
export const ModalActions = React.forwardRef<HTMLDivElement, ModalActionsProps>(
  function ModalActions({ className, render, ...rest }, ref) {
    return useRenderElement(
      render,
      "div",
      { ...rest, className: cx("modal__actions", className) },
      ref,
    );
  },
);

export const Modal = {
  Root: ModalRoot,
  Trigger: ModalTrigger,
  Popup: ModalPopup,
  Header: ModalHeader,
  Title: ModalTitle,
  Subtitle: ModalSubtitle,
  Actions: ModalActions,
  Close: ModalClose,
};
