/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    screens: {
      sm: "600px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    maxWidth: {
      sm: "580px",
      md: "720px",
      lg: "960px",
      xl: "1140px",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    fontSize: {
      sm: "0.833rem",
      base: "1rem",
      xl: "1.2rem",
      "2xl": "1.44rem",
      "3xl": "1.728rem",
      "4xl": "2.074rem",
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
