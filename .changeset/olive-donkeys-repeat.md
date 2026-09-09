---
"@destinygg/libstiny": minor
---

Prepare the package for shipping React components.

- Ship the compiled CSS. `dist/libstiny.css` was previously built but excluded
  from the published tarball, so there was no way to consume this library
  without Sass. It is now built by `prepack` and published, and can be imported
  directly via `@destinygg/libstiny/dist/libstiny.css`.
- Build the distributed stylesheet from `lib/index.scss` rather than
  `lib/_docs.scss`. The docs entry sets `html, body` background and text colors,
  which should not be forced onto consumers.
- Declare `sass` and `style` entry fields so bundlers pick the right entry point
  explicitly rather than falling back to `main`.
- Move `react` and `react-dom` to optional peer dependencies. They were listed
  as runtime dependencies, which made every consumer install React and risked a
  duplicate React instance for consumers that already had their own.
- Drop the unused `normalize.css` dependency, and move `sass`, `prettier`,
  `cva`, and `@changesets/cli` to dev dependencies.
- Restrict the published tarball to `lib` and `dist`. It previously shipped the
  Storybook docs and 180 kB of images, which took the package from 196 kB to
  23 kB.

No `exports` map is added. Under sass-loader, an `exports` field makes
`@use '~@destinygg/libstiny'` unresolvable, and the website imports the package
in exactly that form. Adding `exports` needs to wait until consumers have
migrated off the deprecated `~` prefix.
