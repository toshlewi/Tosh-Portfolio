/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      backgroundImage: {
        "hero-pattern": "url('/herobg.png')",
      },
      screens: {
        xs: "450px",
      },
      boxShadow: {
        ct: "0px 287px 364px -47px rgba(200, 213, 255, 0.15), 0px -63px 68px -8px rgba(137, 92, 246, 0.15)",
      },
    },
  },
  plugins: [],
};
