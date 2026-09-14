import * as React from "react";
import { Tabs as BaseTabs } from "@base-ui/react/tabs";
import { cx, resolve } from "./utils/class-name";

/*
 * There are zero `data-*` selectors anywhere in lib/, so Base UI's own
 * `data-active` / `data-orientation` attributes (which it still emits) are
 * inert here. Component state is bridged onto libstiny's BEM modifier classes
 * via Base UI's function form of `className`.
 */

/* -------------------------------------------------------------------- Root */

export type TabsRootProps = BaseTabs.Root.Props;

/**
 * Root carries no libstiny class. `.tabs` is `display: flex` — it is the strip
 * that lays the tabs out, i.e. the *list*, not the list-plus-panels container.
 * Putting `.tabs` on Root would make the panels flex siblings of the list.
 */
export const TabsRoot = React.forwardRef<HTMLDivElement, TabsRootProps>(
  function TabsRoot(props, ref) {
    return <BaseTabs.Root ref={ref} {...props} />;
  },
);

/* -------------------------------------------------------------------- List */

export type TabsListProps = BaseTabs.List.Props;

export const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  function TabsList({ className, ...rest }, ref) {
    return (
      <BaseTabs.List
        ref={ref}
        {...rest}
        // `.tabs--vertical` must sit on an ANCESTOR of `.tab`, because
        // tabs.scss writes the underline rules as `.tabs--vertical &`. The List
        // is both that ancestor and the element needing `flex-direction:
        // column`, so it takes both classes. `orientation` reaches it because
        // `TabsListState extends TabsRootState`.
        className={(state) =>
          cx(
            "tabs",
            state.orientation === "vertical" && "tabs--vertical",
            resolve(className, state),
          )
        }
      />
    );
  },
);

/* --------------------------------------------------------------------- Tab */

export type TabsTabProps = BaseTabs.Tab.Props;

export const TabsTab = React.forwardRef<HTMLButtonElement, TabsTabProps>(
  function TabsTab({ className, ...rest }, ref) {
    return (
      <BaseTabs.Tab
        ref={ref}
        {...rest}
        // `.tab` is a TOP-LEVEL block, not `.tabs__tab`.
        className={(state) =>
          cx("tab", state.active && "tab--active", resolve(className, state))
        }
      />
    );
  },
);

/* ------------------------------------------------------------------- Panel */

export type TabsPanelProps = BaseTabs.Panel.Props;

/** No libstiny class: tabs.scss defines no panel styles. Pass your own. */
export const TabsPanel = React.forwardRef<HTMLDivElement, TabsPanelProps>(
  function TabsPanel(props, ref) {
    return <BaseTabs.Panel ref={ref} {...props} />;
  },
);

/**
 * `Tabs.Indicator` is deliberately not re-exported: libstiny has no
 * `.tabs__indicator`. The moving underline is `.tab--active::after`, which
 * TabsTab already drives — rendering an Indicator would double it up.
 */
export const Tabs = {
  Root: TabsRoot,
  List: TabsList,
  Tab: TabsTab,
  Panel: TabsPanel,
};
