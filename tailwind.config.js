/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "eagle-lake": ["Eagle Lake", "serif"],
        inter: ["Inter", "sans-serif"],
        lit: ["Literata", "sans-serif"],
        dot: ["DotGothic16", "sans-serif"],
        dosis: ["Dosis", "sans-serif"],
      },
    },
  },
  plugins: [],
};
