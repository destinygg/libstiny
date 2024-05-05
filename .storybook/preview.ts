import type { Preview } from "@storybook/html";
import dggTheme from './dgg-theme';
import '../src/styles/main.scss';

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
