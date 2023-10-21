/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      esm: "405px",
      sm: "480px",
      es: "605px",
      md: "768px",
      emd: "900px",
      lg: "976px",
      xl: "1300px",
    },
    extend: {
      colors: {
        black: "black",
        light: "white",
        smoke: "rgb(245, 245, 245)",
        dark: "#1c1c1c",
        gray: "rgb(86, 86, 86)",
        grey: "#acacac",
        trans: "rgba(25, 25, 25, 0.522)",
        blue: "#3371f2",
      },
    },
  },
  plugins: [],
};
