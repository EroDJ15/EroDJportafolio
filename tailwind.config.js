// tailwind.config.js
module.exports = {
  darkMode: 'class',
  purge: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172b",
      },
      height: {
        height500: "500px",
        height648: "648px",
        height750: "750px",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["lato", "sans-serif"],
      },


    },
  },
  plugins: [],
};

