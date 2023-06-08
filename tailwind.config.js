/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,css}"],
  theme: {
    extend: {
      width: {
        logo1: "240px",
        button: "200px",
        google:"40%",
      },
      fontFamily: {
        login: ["Manrope"],
      },
      margin: {
        loginM: "6rem",
        input: "30px",
      },
      height: {
        buttonH: "70px",
      },
    },
  },
  plugins: [],
};
