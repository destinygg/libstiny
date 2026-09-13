import * as React from "react";
import { notificationVariants } from "../variants/notification";
import { renderElement, type RenderProp } from "./utils/render";

export type NotificationIntent = "primary" | "success" | "danger" | "neutral";
/** `alert` is the large inline form; `toast` is the compact floating form. */
export type NotificationType = "alert" | "toast";

export interface NotificationProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  /** Colour axis. Combines freely with `type`. Defaults to `"neutral"`. */
  intent?: NotificationIntent;
  /** Size axis. Combines freely with `intent`. Defaults to `"alert"`. */
  type?: NotificationType;
  /** Bold heading. Its type scale is driven by `type`. */
  title?: React.ReactNode;
  /** Supporting copy. */
  message?: React.ReactNode;
  /** Trailing slot, a sibling of `.notification__content`. */
  action?: React.ReactNode;
  render?: RenderProp;
}

export const Notification = React.forwardRef<HTMLDivElement, NotificationProps>(
  function Notification(
    {
      intent,
      type,
      title,
      message,
      action,
      className,
      children,
      role,
      render,
      ...rest
    },
    ref,
  ) {
    // notification.scss scopes the type scale as
    // `.notification--alert .notification__content .notification__title`, so the
    // title/body pair must live inside `.notification__content`. Owning that
    // wrapper is the point of this component.
    const content =
      title != null || message != null || children != null ? (
        <div className="notification__content">
          {title != null && (
            <span className="notification__title">{title}</span>
          )}
          {message != null && (
            <span className="notification__body">{message}</span>
          )}
          {children}
        </div>
      ) : null;

    return renderElement(
      render,
      "div",
      {
        ...rest,
        // Danger interrupts; everything else announces politely.
        role: role ?? (intent === "danger" ? "alert" : "status"),
        className: notificationVariants({ intent, type, className }),
        children: (
          <>
            {content}
            {action}
          </>
        ),
      },
      ref,
    );
  },
);
