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
  // react / react-dom / @base-ui/react are all OPTIONAL peers. Never bundle.
  external: [
    "react",
    "react-dom",
    /^react\//,
    /^react-dom\//,
    /^@base-ui\/react/,
  ],
  // class-variance-authority (Apache-2.0) and its clsx dep (MIT) are ~1.5 kB
  // combined. Bundling them keeps `dependencies` empty, so the 194 Sass-only
  // stylesheets in the website install nothing new.
  noExternal: ["class-variance-authority", "clsx"],
} satisfies Options;

export default defineConfig([
  {
    ...shared,
    entry: { index: "src/react/index.ts" },
  },
  {
    ...shared,
    entry: { "tabs/index": "src/react/tabs/index.tsx" },
    // This wrapper passes a `className` FUNCTION to Base UI, and functions
    // cannot cross the RSC boundary, so the module must be a client module.
    // esbuild strips top-of-file directives when bundling, hence a banner.
    banner: { js: '"use client";' },
  },
]);
