/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,css}"],
  theme: {
    extend: {
      width: {
        logo1: "240px",
        button: "0pxpx",

      },
      fontFamily: {
        login: ["Manrope"],
      },
      margin:{
        loginM:"6rem",
      }

    },
  },
  plugins: [],
};
