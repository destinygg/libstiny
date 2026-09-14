// Every React component, presentational and Base UI-backed alike, is exported
// from this one entry. Consumers must install @base-ui/react alongside react
// and react-dom; it is declared as an OPTIONAL peer only so that stylesheet-only
// consumers, who never import this entry, are not made to install it.
//
// Importing one component does not bundle the others: tsup emits a file per
// component and package.json's `sideEffects` lets bundlers skip unused files.

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

export { Tabs, TabsList, TabsPanel, TabsRoot, TabsTab } from "./tabs";
export type {
  TabsListProps,
  TabsPanelProps,
  TabsRootProps,
  TabsTabProps,
} from "./tabs";

export type { RenderProp } from "./utils/render";
