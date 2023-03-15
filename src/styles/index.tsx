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
      text: "#181818",
    },

    fontSizes: {},
  },
});
