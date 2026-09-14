import { defineConfig } from "tsup";

export default defineConfig({
  // One output file per component. Every component is its own entry point and
  // `splitting` moves code shared between entries into chunks, so a consumer's
  // bundler can skip the whole file for any component they don't import. That
  // works only because package.json's `sideEffects` declares our JavaScript
  // side-effect-free: without it, importing just <Button> ships every component
  // and Tabs' Base UI code (measured: ~2.5 kB vs ~11.5 kB gzipped).
  //
  // A glob rather than a list: a component missing from the entries would be
  // inlined into react/index.js, which every consumer loads, silently defeating
  // tree-shaking. Every component, Base UI-backed or not, is src/react/<name>.tsx.
  entry: ["src/react/index.ts", "src/react/*.tsx"],
  splitting: true,
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
  minify: false,
  clean: true,
  // react, react-dom and @base-ui/react must all come from the consumer's single
  // copy: Base UI components share React context across their parts, and the
  // `render` prop uses the consumer's useRender. Never bundle them. tsup already
  // leaves peers external; listing them makes that explicit.
  external: [
    "react",
    "react-dom",
    /^react\//,
    /^react-dom\//,
    /^@base-ui\/react/,
  ],
  noExternal: [
    // class-variance-authority (Apache-2.0) and its clsx dep (MIT) are ~1.5 kB
    // combined. Bundling them keeps `dependencies` empty, so the 194 Sass-only
    // stylesheets in the website install nothing new.
    "class-variance-authority",
    "clsx",
  ],
  // Components use Base UI hooks (useRender's merged ref is client-only) and
  // the Tabs wrapper passes a `className` function, which cannot cross the RSC
  // boundary. esbuild strips module-level directives when bundling, so every
  // output file gets the directive back.
  banner: { js: '"use client";' },
  esbuildOptions(options) {
    // Keep shared chunks apart from the per-component files. They are
    // implementation detail, not something to import.
    options.chunkNames = "_chunks/[name]-[hash]";
  },
});
