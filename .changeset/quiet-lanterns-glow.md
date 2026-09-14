---
"@destinygg/libstiny": minor
---

Add React components for the rest of libstiny's blocks.

- **Presentational:** `Breadcrumb`, `Stepper` and `Navbar`, plus `Drawer.Panel`
  and its parts for an inline drawer.
- **Form controls:** `Input`, `Select`, `TextArea`, `Checkbox`, `Switch`, `Radio`
  and `Choicebox` render native form controls in the existing markup.
  `className` and `style` go on the outer wrapper; every other prop and the ref
  go on the control. `Input`, `Select` and `TextArea` wire up the label, help
  text and `aria-invalid`.
- **Built on Base UI:**

  - `SideNav`: categories collapse through a real `<button>`.
  - `SegmentedControl`: a single-select toggle group.
  - `Modal`: built on Dialog.
  - `Dropdown`: built on Menu.
  - `Popover`: its arrow follows the side it renders on.
  - `Drawer`: an off-canvas drawer with swipe-to-dismiss.

  Each overlay's `Popup` part includes its portal and backdrop, positioner or
  viewport.

Every component is also exported part by part (`ModalRoot`, `ModalPopup`, …),
alongside the namespace objects.

Stylesheet changes. Each is additive, or renders identically for existing
markup:

- New layout classes for the React overlays: `.modal-viewport`,
  `.drawer-viewport`, `.drawer--off-canvas` (with `.drawer--closed` and a new
  `$drawer-width` token), `.popover-positioner` and `.dropdown-positioner`.
- `.modal-overlay` is now `position: fixed` rather than `absolute`, so it covers
  the viewport on a scrolled page. The website doesn't use this class.
- Popover arrows are centred with a single `left`/`top` calculation instead of
  `50%` plus a negative margin. The rendered position is unchanged.
- New `.dropdown__item--highlighted`, which matches `:hover` for keyboard
  highlight, `.choicebox__content` and `.side-nav__heading-text`.
- Browser-default resets on `.navbar__user`, `.navbar__item`, `.navbar__icon`,
  `.side-nav__heading`, `.side-nav__item`, `.drawer__item`, `.dropdown__item`,
  `.dropdown hr`, `.modal__title`, `.modal__subtitle` and `.popover__title`,
  so the React components look right without a CSS reset. Under the website's
  Tailwind preflight these are no-ops.
