import type { Preview } from "@storybook/react";
import dggTheme from "./dgg-theme";
import "../lib/_docs.scss";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: dggTheme,
    },
  },
};

export default preview;
