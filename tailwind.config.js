/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        bgcval: "#FF6969",
        txcval: "#C70039",
        bgc: "#F1EFEF",
        bgce: "#F9DEC9",
        txc: "#001524",
        botc: "#176B87",
        logo: "#5EC3BF",
      },
      fontSize: {
        parrafo: "0.8rem",
        etiqueta: "1.2rem",
        titulo: "2rem",
      },
      fontFamily: {
        custom: ["CustomFont", "sans"],
      },
    },
  },
  plugins: [],
};
