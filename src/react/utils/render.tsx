import * as React from "react";

/** An element to render in place of a component's default tag. */
export type RenderProp = React.ReactElement<Record<string, unknown>>;

function mergeRefs<T>(
  ...refs: Array<React.Ref<T> | undefined | null>
): React.RefCallback<T> {
  return (node) => {
    for (const ref of refs) {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<T | null>).current = node;
      }
    }
  };
}

/**
 * Read a ref off an element without invoking either React version's warning
 * getter. In development, React 18 installs one on `props.ref` (the real ref
 * lives on `element.ref`), and React 19 installs one on `element.ref` (the real
 * ref lives on `props.ref`). Reading property descriptors never runs a getter,
 * so only a genuine data property is ever returned.
 *
 * Checking `"ref" in props` is not enough: React 18's getter makes that true,
 * and reading through it returns `undefined` and logs a warning.
 */
function readRef(element: React.ReactElement): React.Ref<unknown> | undefined {
  const fromProps = Object.getOwnPropertyDescriptor(element.props, "ref");
  if (fromProps && "value" in fromProps) {
    // React 19
    return fromProps.value as React.Ref<unknown> | undefined;
  }
  // React 18
  return Object.getOwnPropertyDescriptor(element, "ref")?.value as
    | React.Ref<unknown>
    | undefined;
}

/**
 * Element substitution through a `render` prop, the same prop Base UI uses, so
 * both halves of the library share one API:
 *
 *   <Button render={<a href="/faq" />}>FAQ</Button>
 *   -> <a href="/faq" class="button button--primary">FAQ</a>
 *
 * The substituted element's own props win, with two exceptions: `className` is
 * concatenated so libstiny's BEM classes are never dropped, and `ref` is merged
 * so both the component's ref and the element's own ref receive the node.
 *
 * Unlike Base UI's `mergeProps`, event handlers and `style` are NOT merged: the
 * substituted element's values replace the component's.
 */
export function renderElement<T>(
  render: RenderProp | undefined,
  defaultTag: React.ElementType,
  props: Record<string, unknown> & { className?: string },
  ref: React.Ref<T>,
): React.ReactElement {
  if (!render) {
    return React.createElement(defaultTag, { ...props, ref } as never);
  }

  const childProps = render.props as Record<string, unknown> & {
    className?: string;
  };

  return React.cloneElement(render, {
    ...props,
    ...childProps,
    className: [props.className, childProps.className]
      .filter(Boolean)
      .join(" "),
    ref: mergeRefs(ref as React.Ref<unknown>, readRef(render)),
  } as never);
}
