// Presentational components only. The built entry must not IMPORT anything a
// consumer would have to install beyond React: module resolution happens before
// tree-shaking, so an external Base UI import here would break consumers who
// installed libstiny but not @base-ui/react, even if they only use <Button>.
// The small pieces this entry does need (CVA, Base UI's useRender) are bundled
// in; Base UI-backed components live in subpath entries such as
// @destinygg/libstiny/react/tabs, where they share the consumer's Base UI.

export { Badge } from "./badge";
export type { BadgeIntent, BadgeProps } from "./badge";

export { Button } from "./button";
export type { ButtonIntent, ButtonProps, ButtonSize } from "./button";

export { Card } from "./card";
export type { CardProps } from "./card";

export { Notification } from "./notification";
export type {
  NotificationIntent,
  NotificationProps,
  NotificationType,
} from "./notification";

export { SectionHeader } from "./section-header";
export type { SectionHeaderProps } from "./section-header";

export { Table } from "./table";
export type { TableProps } from "./table";

export type { RenderProp } from "./utils/render";
