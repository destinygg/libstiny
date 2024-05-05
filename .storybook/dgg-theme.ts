import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',
  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'Libstiny',
  brandUrl: 'https://destiny.gg',
  brandImage: 'https://cdn.destiny.gg/img/destiny-logo.png',
  brandTarget: '_self',

  //
  colorPrimary: '#696e77',
  colorSecondary: '#0091ff',

  // UI
  appBg: '#18181a',
  appContentBg: '#1b1b1f',
  appPreviewBg: '#18181a',
  appBorderColor: '#3c3f44',
  appBorderRadius: 12,

  // Text colors
  textColor: '#edeef0',
  textInverseColor: '#18181a',

  // Toolbar default and active colors
  barTextColor: '#adb1b8',
  barSelectedColor: '#6bc1ff',
  barHoverColor: '#c2e5ff',
  barBg: '#1b1b1f',

  // Form colors
  inputBg: '#1b1b1f',
  inputBorder: '#464b50',
  inputTextColor: '#edeef0',
  inputBorderRadius: 10,
});