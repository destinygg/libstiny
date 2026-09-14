---
"@destinygg/libstiny": minor
---

Add pre-styled React components, alongside the existing SCSS and tokens.

- New `@destinygg/libstiny/react` entry exporting `Button`, `Badge`, `Card`,
  `Notification`, `SectionHeader`, `Table` and `Tabs`. Every component takes its
  native element's props, appends rather than replaces `className`, and accepts
  a `render` prop to substitute the rendered element. `render` is implemented
  with Base UI's `useRender`, so it merges `className`, `style`, event handlers
  and refs exactly as the `render` prop on Base UI components does.
- `Tabs` is built on Base UI. It supplies keyboard navigation, roving tabindex
  and the `tablist`/`tab`/`tabpanel` roles that the previous markup had none
  of, and bridges component state onto libstiny's existing `.tab--active` /
  `.tabs--vertical` classes.
- Using the React components requires installing `@base-ui/react` alongside
  `react` and `react-dom`. All three are declared as **optional** peer
  dependencies so that consumers using only the stylesheets are never asked to
  install them — `dependencies` remains empty.
- Each component is emitted as its own file, so importing one component does
  not bundle the others. Every file is marked `"use client"`.
- `.tab` now resets `border`, `appearance` and `text-decoration`, so it survives
  being rendered on a `<button>`. These are no-ops on the `<div>` and `<li>`
  markup existing consumers use.

The colour axis is now consistently named `intent`. Two fixes to the variant
maps: the `ghost` button intent is gone (`.button--ghost` exists nowhere in the
stylesheets), and `fullWidth` is added (`.button--full-width` existed but was
unreachable).

Note: the package still has no `exports` map, because adding one breaks the
`@use "~@destinygg/libstiny"` Sass import. `@destinygg/libstiny/react` therefore
resolves in Vite, esbuild, Rollup and webpack, and under TypeScript's `bundler`
resolution, but not in Node.js ESM without a bundler, in webpack strict-ESM files
(`.mjs`, or `.js` in a `"type": "module"` package), or under TypeScript 7's
`nodenext` resolution. Importing `@destinygg/libstiny/react/index.js` works in
all of them; see the README.
