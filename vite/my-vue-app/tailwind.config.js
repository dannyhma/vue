/** @type {import('tailwindcss').Config} */
import prettier from "prettier-plugin-tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
