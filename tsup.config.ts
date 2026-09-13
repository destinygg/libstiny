import { defineConfig, type Options } from "tsup";

const shared = {
  format: ["esm"],
  platform: "browser",
  target: "es2020",
  // The physical output path is load-bearing. With no `exports` map, bundlers
  // resolve `@destinygg/libstiny/react` by directory-index lookup at
  // <root>/react/index.js.
  outDir: "react",
  tsconfig: "tsconfig.build.json",
  dts: true,
  sourcemap: true,
  splitting: false,
  minify: false,
  // Array configs build concurrently, so `clean` here would race between them.
  // build:react removes react/ up front instead.
  clean: false,
  // react / react-dom are OPTIONAL peers and must be shared with the consumer's
  // copy. Never bundle.
  external: ["react", "react-dom", /^react\//, /^react-dom\//],
} satisfies Options;

// class-variance-authority (Apache-2.0) and its clsx dep (MIT) are ~1.5 kB
// combined. Bundling them keeps `dependencies` empty, so the 194 Sass-only
// stylesheets in the website install nothing new.
const variantHelpers = ["class-variance-authority", "clsx"];

export default defineConfig([
  {
    ...shared,
    entry: { index: "src/react/index.ts" },
    // The `render` prop is implemented with Base UI's public `useRender`, so it
    // behaves exactly like the `render` prop on Base UI components. It is
    // BUNDLED here (~4.4 kB min, ~1.9 kB gzip, no React context), because this
    // entry must work for consumers who never installed @base-ui/react.
    // Listing it in noExternal overrides tsup's default of externalising peers.
    noExternal: [
      ...variantHelpers,
      /^@base-ui\/react\/use-render/,
      /^@base-ui\/utils/,
    ],
    // useRender's merged-ref hook is marked "use client" by Base UI, and
    // esbuild strips module-level directives when bundling, so re-apply it.
    banner: { js: '"use client";' },
  },
  {
    ...shared,
    entry: { "tabs/index": "src/react/tabs/index.tsx" },
    // Base UI components share React context across their parts, so they must
    // use the consumer's single copy of @base-ui/react. Never bundle here.
    external: [...shared.external, /^@base-ui\/react/],
    noExternal: variantHelpers,
    // This wrapper passes a `className` FUNCTION to Base UI, and functions
    // cannot cross the RSC boundary, so the module must be a client module.
    // esbuild strips top-of-file directives when bundling, hence a banner.
    banner: { js: '"use client";' },
  },
]);
