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
        primary: "#14213D",
        secondary: "#FCA311",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
