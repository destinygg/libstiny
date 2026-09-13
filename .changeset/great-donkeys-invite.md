---
"@destinygg/libstiny": minor
---

Add pre-styled React components, alongside the existing SCSS and tokens.

- New `@destinygg/libstiny/react` entry exporting `Button`, `Badge`, `Card`,
  `Notification`, `SectionHeader` and `Table`. Every component takes its native
  element's props, appends rather than replaces `className`, and accepts a
  `render` prop to substitute the rendered element. `render` is implemented
  with Base UI's `useRender`, bundled in, so it merges `className`, `style`,
  event handlers and refs exactly as the `render` prop on Base UI components
  does, without requiring `@base-ui/react` to be installed. Both entries are
  marked `"use client"`.
- New `@destinygg/libstiny/react/tabs` entry exporting `Tabs`, built on Base UI.
  It supplies keyboard navigation, roving tabindex and the
  `tablist`/`tab`/`tabpanel` roles that the previous markup had none of, and
  bridges component state onto libstiny's existing `.tab--active` /
  `.tabs--vertical` classes.
- `@base-ui/react` is an **optional** peer dependency, and Base UI-backed
  components live behind their own subpath, so consumers using only the
  presentational components never need to install it. Consumers using only the
  stylesheets are unaffected either way — `dependencies` remains empty.
- `.tab` now resets `border`, `appearance` and `text-decoration`, so it survives
  being rendered on a `<button>`. These are no-ops on the `<div>` and `<li>`
  markup existing consumers use.

The colour axis is now consistently named `intent`. Two fixes to the variant
maps: the `ghost` button intent is gone (`.button--ghost` exists nowhere in the
stylesheets), and `fullWidth` is added (`.button--full-width` existed but was
unreachable).

Note: the package still has no `exports` map, because adding one breaks the
`@use "~@destinygg/libstiny"` Sass import. The React entry therefore resolves in
bundlers (webpack, Vite, esbuild, Rollup) and under TypeScript
`moduleResolution: "bundler"` or `"node"`, but not in raw Node ESM or under
`"nodenext"`. See the README for the escape hatch.
