// Every React component, presentational and Base UI-backed alike, is exported
// from this one entry. Consumers must install @base-ui/react alongside react
// and react-dom; it is declared as an OPTIONAL peer only so that stylesheet-only
// consumers, who never import this entry, are not made to install it.
//
// Importing one component does not bundle the others: tsup emits a file per
// component and package.json's `sideEffects` lets bundlers skip unused files.

export { Badge } from "./badge";
export type { BadgeIntent, BadgeProps } from "./badge";

export {
  Breadcrumb,
  BreadcrumbCurrent,
  BreadcrumbLink,
  BreadcrumbRoot,
  BreadcrumbSeparator,
} from "./breadcrumb";
export type {
  BreadcrumbCurrentProps,
  BreadcrumbLinkProps,
  BreadcrumbRootProps,
  BreadcrumbSeparatorProps,
} from "./breadcrumb";

export { Button } from "./button";
export type { ButtonIntent, ButtonProps, ButtonSize } from "./button";

export { Card } from "./card";
export type { CardProps } from "./card";

export { Checkbox } from "./checkbox";
export type { CheckboxProps } from "./checkbox";

export { Choicebox } from "./choicebox";
export type { ChoiceboxProps } from "./choicebox";

export { Input, Select, TextArea } from "./input";
export type {
  InputProps,
  InputValidationState,
  SelectProps,
  TextAreaProps,
} from "./input";

export {
  Navbar,
  NavbarActions,
  NavbarIcon,
  NavbarItem,
  NavbarItems,
  NavbarLogo,
  NavbarRoot,
  NavbarTitle,
  NavbarUser,
} from "./navbar";
export type {
  NavbarActionsProps,
  NavbarIconProps,
  NavbarItemProps,
  NavbarItemsProps,
  NavbarLogoProps,
  NavbarRootProps,
  NavbarTitleProps,
  NavbarUserProps,
} from "./navbar";

export { Notification } from "./notification";
export type {
  NotificationIntent,
  NotificationProps,
  NotificationType,
} from "./notification";

export { Radio } from "./radio";
export type { RadioProps } from "./radio";

export { SectionHeader } from "./section-header";
export type { SectionHeaderProps } from "./section-header";

export {
  SegmentedControl,
  SegmentedControlItem,
  SegmentedControlRoot,
} from "./segmented-control";
export type {
  SegmentedControlItemProps,
  SegmentedControlRootProps,
} from "./segmented-control";

export {
  SideNav,
  SideNavCategory,
  SideNavGroup,
  SideNavHeading,
  SideNavItem,
  SideNavPanel,
  SideNavRoot,
} from "./side-nav";
export type {
  SideNavCategoryProps,
  SideNavGroupProps,
  SideNavHeadingProps,
  SideNavItemProps,
  SideNavPanelProps,
  SideNavRootProps,
} from "./side-nav";

export { Stepper, StepperRoot, StepperStep } from "./stepper";
export type {
  StepperRootProps,
  StepperStepProps,
  StepperStepStatus,
} from "./stepper";

export { Switch } from "./switch";
export type { SwitchProps } from "./switch";

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
