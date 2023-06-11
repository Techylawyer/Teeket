/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,css}"],
  theme: {
    extend: {
      width: {
        logo1: "240px",
        button: "100px",
        google: "40%",
        googleS: "80%",
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
      fontSize: {
        fontLength: "20px",
      },
    },
  },
  plugins: [],
};
