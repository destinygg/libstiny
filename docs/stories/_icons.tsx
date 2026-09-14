// Shared story icons. The leading underscore keeps this file out of the
// `*.stories.tsx` glob so Storybook does not try to load it as a story.
//
// Note the `lucide` class: libstiny's `icon-size` mixin sizes any `.lucide`
// descendant of a `.button`, `.tab` etc. lucide-react's real output carries it
// by default, so these stand-ins should too.

type IconProps = { className?: string };

const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 20 20",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  xmlns: "http://www.w3.org/2000/svg",
} as const;

export const Icon = ({ className = "lucide" }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M18.3337 3.33319C18.3337 3.33319 17.7503 5.08319 16.667 6.16652C18.0003 14.4999 8.83366 20.5832 1.66699 15.8332C3.50033 15.9165 5.33366 15.3332 6.66699 14.1665C2.50033 12.9165 0.416992 7.99986 2.50033 4.16652C4.33366 6.33319 7.16699 7.58319 10.0003 7.49986C9.25033 3.99986 13.3337 1.99986 15.8337 4.33319C16.7503 4.33319 18.3337 3.33319 18.3337 3.33319Z" />
  </svg>
);

export const Menu = ({ className = "lucide" }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M2.5 5h15M2.5 10h15M2.5 15h15" />
  </svg>
);

export const ChevronUp = ({ className = "lucide" }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M15 12.5 10 7.5 5 12.5" />
  </svg>
);

export const ArrowLeft = ({ className = "lucide" }: IconProps) => (
  <svg {...base} viewBox="0 0 24 24" className={className}>
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);
