import * as React from "react";
import { Toggle } from "@base-ui/react/toggle";
import { ToggleGroup } from "@base-ui/react/toggle-group";
import {
  segmentedControlTabVariants,
  segmentedControlVariants,
} from "../variants/segmented-control";
import { resolve } from "./utils/class-name";

/* -------------------------------------------------------------------- Root */

export interface SegmentedControlRootProps
  extends Omit<
    ToggleGroup.Props,
    "value" | "defaultValue" | "onValueChange" | "multiple"
  > {
  /** The selected item's `value`. */
  value?: string;
  defaultValue?: string;
  onValueChange?: (
    value: string,
    eventDetails: ToggleGroup.ChangeEventDetails,
  ) => void;
}

/**
 * A single-select group built on Base UI's ToggleGroup: arrow keys move focus
 * between items, and each item reports `aria-pressed`. Label the group with
 * `aria-label`.
 *
 * Unlike a bare ToggleGroup, one item always stays selected. ToggleGroup
 * deselects when the pressed item is clicked again; that change is ignored
 * here. The value is a string rather than ToggleGroup's array.
 */
export const SegmentedControlRoot = React.forwardRef<
  HTMLDivElement,
  SegmentedControlRootProps
>(function SegmentedControlRoot(
  { value, defaultValue, onValueChange, className, ...rest },
  ref,
) {
  const [uncontrolled, setUncontrolled] = React.useState(defaultValue);
  const selected = value !== undefined ? value : uncontrolled;

  return (
    <ToggleGroup
      ref={ref}
      {...rest}
      // Always controlled internally, so an ignored deselection can't leave
      // ToggleGroup's own state out of step with ours.
      value={selected === undefined ? [] : [selected]}
      onValueChange={(next, eventDetails) => {
        const [nextValue] = next;
        if (nextValue === undefined) return;
        if (value === undefined) setUncontrolled(nextValue);
        onValueChange?.(nextValue, eventDetails);
      }}
      className={(state) =>
        segmentedControlVariants({ className: resolve(className, state) })
      }
    />
  );
});

/* -------------------------------------------------------------------- Item */

export interface SegmentedControlItemProps
  extends Omit<
    Toggle.Props,
    "value" | "pressed" | "defaultPressed" | "onPressedChange"
  > {
  /** Identifies the item within the group. */
  value: string;
  /** Use the brand accent while selected, e.g. for a "Winners" filter. */
  accent?: boolean;
}

export const SegmentedControlItem = React.forwardRef<
  HTMLButtonElement,
  SegmentedControlItemProps
>(function SegmentedControlItem({ accent, className, ...rest }, ref) {
  return (
    <Toggle
      ref={ref}
      {...rest}
      className={(state) =>
        segmentedControlTabVariants({
          active: state.pressed,
          accent,
          className: resolve(className, state),
        })
      }
    />
  );
});

export const SegmentedControl = {
  Root: SegmentedControlRoot,
  Item: SegmentedControlItem,
};
