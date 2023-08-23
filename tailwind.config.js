/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primary: {
          100: "#d0d3d8",
          200: "#a1a6b1",
          300: "#727a8b",
          400: "#434d64",
          500: "#14213d",
          600: "#101a31",
          700: "#0c1425",
          800: "#080d18",
          900: "#04070c",
        },
        secondary: {
          100: "#feedcf",
          200: "#fedaa0",
          300: "#fdc870",
          400: "#fdb541",
          500: "#fca311",
          600: "#ca820e",
          700: "#97620a",
          800: "#654107",
          900: "#322103",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
