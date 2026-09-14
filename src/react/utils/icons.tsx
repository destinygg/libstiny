import * as React from "react";

/*
 * Glyphs that are part of a component's design rather than content the
 * consumer supplies. All are decorative (`aria-hidden`). The lucide glyphs carry
 * the `lucide` class, so libstiny's `icon-size` mixin sizes them wherever the
 * surrounding block applies one, the same as lucide-react's own output.
 */

type IconProps = React.SVGProps<SVGSVGElement>;

// Drawn on lucide's 24-unit grid, rendered at libstiny's $icon-default (20px).
// Blocks that include the icon-size mixin resize them to their own scale.
const lucide = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

/** lucide `check`, drawn heavier to read at checkbox size. */
export function CheckIcon({ className, ...props }: IconProps) {
  return (
    <svg
      {...lucide}
      strokeWidth={4}
      className={className ? `lucide ${className}` : "lucide"}
      {...props}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

/** lucide `chevron-up`. */
export function ChevronUpIcon({ className, ...props }: IconProps) {
  return (
    <svg
      {...lucide}
      className={className ? `lucide ${className}` : "lucide"}
      {...props}
    >
      <path d="m18 15-6-6-6 6" />
    </svg>
  );
}

/** lucide `x`. */
export function XIcon({ className, ...props }: IconProps) {
  return (
    <svg
      {...lucide}
      className={className ? `lucide ${className}` : "lucide"}
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

/** The stepper's step marker, from the libstiny design file. */
export function DotIcon({ className, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
      className={className}
      {...props}
    >
      <path
        d="M10.0833 10.9167C10.5436 10.9167 10.9167 10.5436 10.9167 10.0833C10.9167 9.6231 10.5436 9.25 10.0833 9.25C9.6231 9.25 9.25 9.6231 9.25 10.0833C9.25 10.5436 9.6231 10.9167 10.0833 10.9167Z"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
