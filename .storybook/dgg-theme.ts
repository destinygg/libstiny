import { create } from "@storybook/theming/create";

export default create({
  base: "dark",
  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: "monospace",

  brandTitle: "Libstiny",
  brandUrl: "https://destiny.gg",
  brandImage: "https://cdn.omniliberal.dev/3.12.0/img/destiny-logo.png",
  brandTarget: "_self",

  //
  colorPrimary: "#696e77",
  colorSecondary: "#0091ff",

  // UI
  appBg: "#111113",
  appContentBg: "#111113",
  appPreviewBg: "#111113",
  appBorderColor: "#363A3F",
  appBorderRadius: 12,

  // Text colors
  textColor: "#EDEEF0",
  textInverseColor: "#111113",

  // Toolbar default and active colors
  barTextColor: "#adb1b8",
  barSelectedColor: "#6bc1ff",
  barHoverColor: "#c2e5ff",
  barBg: "#18191B",

  // Form colors
  inputBg: "#18191B",
  inputBorder: "#43484E",
  inputTextColor: "#EDEEF0",
  inputBorderRadius: 10,
});
