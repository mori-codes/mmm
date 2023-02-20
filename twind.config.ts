import { Options } from "$fresh/plugins/twind.ts"

export default {
  selfURL: import.meta.url,
  theme: {
    colors: {
      black: "#343434",
      white: "#fff",
      green: "#69AE68",
      yellow: "#DCB03F",
      grey: "#E7E7E7",
    },
    textColor: {
      black: "#121212",
      white: "#fff",
      grey: "#B7B7B7",
    },
    fontFamily: {
      sans: ["Lato", "sans-serif"],
    },
  },
} as Options
