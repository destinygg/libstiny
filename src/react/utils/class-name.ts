import { cx } from "class-variance-authority";

/** Base UI's `className` accepts a string OR a function of component state. */
export type ClassNameProp<State> =
  | string
  | ((state: State) => string | undefined)
  | undefined;

/** Resolve a consumer className against state so it can be folded in after ours. */
export function resolve<State>(
  className: ClassNameProp<State>,
  state: State,
): string | undefined {
  return typeof className === "function" ? className(state) : className;
}

export { cx };
