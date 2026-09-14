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

// For icons copied from lucide, which draws on a 24-unit grid.
const lucide24 = { ...base, viewBox: "0 0 24 24" } as const;

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
  <svg {...lucide24} className={className}>
    <path d="m12 19-7-7 7-7" />
    <path d="M19 12H5" />
  </svg>
);

export const LayoutGrid = ({ className = "lucide" }: IconProps) => (
  <svg {...lucide24} className={className}>
    <rect width="7" height="7" x="3" y="3" rx="1" />
    <rect width="7" height="7" x="14" y="3" rx="1" />
    <rect width="7" height="7" x="14" y="14" rx="1" />
    <rect width="7" height="7" x="3" y="14" rx="1" />
  </svg>
);

export const Trophy = ({ className = "lucide" }: IconProps) => (
  <svg {...lucide24} className={className}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

export const ImageIcon = ({ className = "lucide" }: IconProps) => (
  <svg {...lucide24} className={className}>
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
  </svg>
);

export const Coins = ({ className = "lucide" }: IconProps) => (
  <svg {...lucide24} className={className}>
    <circle cx="8" cy="8" r="6" />
    <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
    <path d="M7 6h1v4" />
    <path d="m16.71 13.88.7.71-2.82 2.82" />
  </svg>
);
