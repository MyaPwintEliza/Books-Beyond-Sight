/** @type {import('tailwindcss').Config} */
import daisyui from "./node_modules/daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Libre Franklin", "sans - serif"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    darkTheme: "light",
  },
};
