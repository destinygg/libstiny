import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../docs/**/*.mdx", "../docs/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },

  // Stories import the *published* specifiers so the "Show code" panel is
  // copy-pasteable for consumers, but resolve to source for HMR and docgen.
  // The `/tabs` key must come first: a bare `/react` prefix would shadow it.
  async viteFinal(cfg) {
    cfg.resolve ??= {};
    cfg.resolve.alias = {
      ...cfg.resolve.alias,
      "@destinygg/libstiny/react/tabs": fileURLToPath(
        new URL("../src/react/tabs/index.tsx", import.meta.url),
      ),
      "@destinygg/libstiny/react": fileURLToPath(
        new URL("../src/react/index.ts", import.meta.url),
      ),
    };
    return cfg;
  },
};
export default config;
