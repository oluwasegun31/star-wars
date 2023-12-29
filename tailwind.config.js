/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        loaderWidth: "18px",
        loaderWidthSm: "10px",
      },
      colors: {
        primary: "#710e09",
      },
    },
  },
  plugins: [],
};
