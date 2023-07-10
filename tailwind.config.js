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
        primary: "#0f172a",
      },
      screens: {
        sm: '570px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};

