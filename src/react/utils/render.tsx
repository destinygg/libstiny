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
 * Read a ref off an element without tripping React 19's "Accessing element.ref
 * is no longer supported" warning. React 19 moves `ref` into props; React 18
 * keeps it as a plain own property on the element, so reading the property
 * descriptor gets it on 18 without invoking React 19's warning getter.
 */
function readRef(element: React.ReactElement): React.Ref<unknown> | undefined {
  const props = element.props as { ref?: React.Ref<unknown> };
  if ("ref" in props) return props.ref;
  return Object.getOwnPropertyDescriptor(element, "ref")?.value as
    | React.Ref<unknown>
    | undefined;
}

/**
 * Element substitution, mirroring Base UI's `render` prop so both halves of the
 * library share one API:
 *
 *   <Button render={<a href="/faq" />}>FAQ</Button>
 *   -> <a href="/faq" class="button button--primary">FAQ</a>
 *
 * The substituted element's own props win, except `className`, which is
 * concatenated so libstiny's BEM classes are never dropped.
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
