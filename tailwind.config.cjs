const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  darkMode: "class",

  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      transparent: "transparent",
      indigo: {
        100: "#9277ff",
        200: "#7c5dfa",
      },
      red: {
        100: "#ff9797",
        200: "#ec5757",
      },
      "light-blue": {
        100: "#f8f8fb",
        200: "#dfe3fa",
        300: "#888eb0",
        400: "#7e88c3",
      },
      "dark-blue": {
        100: "#252945",
        200: "#1e2139",
        300: "#141625",
        400: "#0c0e16",
      },
      green: "#33D69F",
      orange: "#FF8F00",
      gray: "#373B53",
    },
    fontFamily: {
      spartan: ["Spartan", "sans-serif"],
    },
  },

  plugins: [require("@tailwindcss/forms")],
};

module.exports = config;
