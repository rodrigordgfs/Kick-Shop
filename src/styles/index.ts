import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      primary: "#FF6650",
      white: "#FFFFFF",
      "zinc-100": "#f4f4f5",
      "zinc-200": "#e4e4e7",
      "zinc-900": "#18181b",
    },

    fontSizes: {},
  },
});
