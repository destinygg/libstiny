// Presentational components only. This entry must stay free of third-party
// imports: module resolution happens before tree-shaking, so a Base UI import
// here would break consumers who installed libstiny but not @base-ui/react,
// even if they only import <Button>. Base UI-backed components live in their
// own subpath entries, e.g. @destinygg/libstiny/react/tabs.

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
