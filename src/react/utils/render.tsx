import * as React from "react";
import { useRender } from "@base-ui/react/use-render";

/** An element to render in place of a component's default tag. */
export type RenderProp = React.ReactElement<Record<string, unknown>>;

/**
 * Element substitution through a `render` prop, implemented with Base UI's own
 * `useRender` so it behaves identically to the `render` prop on Base UI-backed
 * components such as Tabs:
 *
 *   <Button render={<a href="/faq" />}>FAQ</Button>
 *   -> <a href="/faq" class="button button--primary">FAQ</a>
 *
 * The substituted element's own props win, except that:
 * - `className` strings are concatenated, so libstiny's BEM classes are kept;
 * - `style` objects are merged, with the element's values winning conflicts;
 * - event handlers are chained: the element's runs first, then the
 *   component's, unless the element's calls `event.preventBaseUIHandler()`;
 * - refs are merged into one memoized callback, so both receive the node and
 *   callback refs are not re-attached on every render.
 *
 * `useRender` is imported from the consumer's own `@base-ui/react`, which every
 * React consumer must install, so fixes to Base UI's render behaviour reach
 * these components without a libstiny release.
 */
export function useRenderElement<T extends Element>(
  render: RenderProp | undefined,
  defaultTagName: keyof React.JSX.IntrinsicElements,
  props: Record<string, unknown>,
  ref: React.Ref<T>,
): React.ReactElement {
  return useRender<Record<string, unknown>, T>({
    defaultTagName,
    render,
    props,
    ref,
  });
}
