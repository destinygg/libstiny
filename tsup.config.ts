import { defineConfig } from "tsup";

export default defineConfig({
  // One output file per component. Every component is its own entry point and
  // `splitting` moves code shared between entries into chunks, so a consumer's
  // bundler can skip the whole file for any component they don't import. That
  // works only because package.json's `sideEffects` declares our JavaScript
  // side-effect-free: without it, importing just <Button> ships every component
  // and Tabs' Base UI code (measured: ~2.5 kB vs ~11.5 kB gzipped).
  //
  // Globs rather than a list: a component missing from the entries would be
  // inlined into react/index.js, which every consumer loads, silently defeating
  // tree-shaking. Presentational components are src/react/*.tsx; Base UI-backed
  // ones are src/react/<name>/index.tsx and become @destinygg/libstiny/react/<name>.
  entry: ["src/react/index.ts", "src/react/*.tsx", "src/react/*/index.tsx"],
  splitting: true,
  format: ["esm"],
  platform: "browser",
  target: "es2020",
  // The physical output path is load-bearing. With no `exports` map, bundlers
  // resolve `@destinygg/libstiny/react` by directory-index lookup at
  // <root>/react/index.js, and `/react/tabs` at <root>/react/tabs/index.js.
  outDir: "react",
  tsconfig: "tsconfig.build.json",
  dts: true,
  sourcemap: true,
  minify: false,
  clean: true,
  // react / react-dom are OPTIONAL peers and must be shared with the consumer's
  // copy. Never bundle. @base-ui/react is also a peer, so tsup leaves it
  // external by default; Base UI components share React context across their
  // parts and must use the consumer's single copy.
  external: ["react", "react-dom", /^react\//, /^react-dom\//],
  noExternal: [
    // class-variance-authority (Apache-2.0) and its clsx dep (MIT) are ~1.5 kB
    // combined. Bundling them keeps `dependencies` empty, so the 194 Sass-only
    // stylesheets in the website install nothing new.
    "class-variance-authority",
    "clsx",
    // The `render` prop is implemented with Base UI's public `useRender` so it
    // behaves exactly like the `render` prop on Base UI components. It is
    // bundled (~1.9 kB gzip, no React context) because presentational
    // components must work for consumers who never installed @base-ui/react.
    // Listing it here overrides tsup's default of externalising peers.
    /^@base-ui\/react\/use-render/,
    /^@base-ui\/utils/,
  ],
  // useRender's merged-ref hook is marked "use client" by Base UI, the Tabs
  // wrapper passes a `className` function across the RSC boundary, and esbuild
  // strips module-level directives when bundling, so every output file gets it.
  banner: { js: '"use client";' },
  esbuildOptions(options) {
    // Keep shared chunks apart from the per-component files. They are
    // implementation detail, not something to import.
    options.chunkNames = "_chunks/[name]-[hash]";
  },
});
