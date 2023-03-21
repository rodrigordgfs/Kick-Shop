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
      "zinc-300": "#d4d4d8",
      "zinc-400": "#9ca3af",
      "zinc-500": "#6b7280",
      "zinc-600": "#4b5563",
      "zinc-700": "#374151",
      "zinc-800": "#1f2937",
      "zinc-900": "#18181b",
    },

    fontSizes: {},
  },
  media: {
    mobile: "(max-width: 426px)",
    tablet: "(max-width: 880px)",
    desktop: "(min-width: 881px)",
  },
});
