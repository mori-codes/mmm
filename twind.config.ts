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
      green: "#69AE68",
      yellow: "#DCB03F",
      transparent: "transparent"
    },
    fontFamily: {
      sans: ["Lato", "sans-serif"],
    },
    extend: {
      keyframes: {
        "slide-down": {
          "0%": {
            transform: "translateY(-100%)",
            "animation-fill-mode": "forwards",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "slide-down": "slide-down 0.5s ease-in forwards",
      },
      backgroundImage: {
        banner: "linear-gradient(45deg, rgba(220,176,63,1) 0%, rgba(105,174,104,1) 100%)",
        toca: "linear-gradient(150deg, rgba(220,176,63,1) 0%, rgba(126,95,14,1) 100%)",
        alvilux: "linear-gradient(150deg, rgba(105,174,104,1) 0%, rgba(4,122,2,1) 100%)",
      },
    },
  },
} as Options
