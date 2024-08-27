/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins", ...defaultTheme.fontFamily.sans],
        "montserrat": ["Montserrat", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: "#B88E2F",
        pink: "#F6D8C6",
        gray: "#9F9F9F",
        "light-gray": "#D9D9D9",
        bege: "#FFF3E3",
        backgroundColor: "#FCF8F3",
        "light-pink": "#FAF3EA",
        "lighter-gray": "#898989",
        component: "#F4F5F7",
        discount: "#E97171",
        new: "#2EC1AC",
        filter: "#F9F1E7",
      },
      backgroundImage: {
        "thumb": "url('/thumb.png')",
        "home": "url('/herohome.png')",
        "back": "url('/fundo.png')"
      },
    },
  },
  plugins: [],
};
