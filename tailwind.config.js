module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          200: "#e7e7e7",
          300: "#e6e6e6",
          400: "#c7c7c7",
          "300_01": "#d6dee3",
          "400_01": "#b3b3b3",
        },
        blue_gray: { 100: "#cccccc", "100_01": "#d5dee3" },
        indigo: { 50: "#e3e8ee" },
        light_blue: { 900: "#1b6381", "900_7f": "#1b63817f" },
        black: { 900: "#000000", "900_99": "#00000099" },
        deep_orange: { 300: "#ea8357" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { montserrat: "Montserrat" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
