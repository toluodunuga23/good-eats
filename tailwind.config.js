/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#E95322",
        secondary: "#4169E1",
        light:{
          100: "#F5F5F5",
          200: "#E0E0E0",
          300: "#BDBDBD",
          400: "#9E9E9E",
          500: "#757575",
          600: "#616161",
          700: "#424242",
        },

        dark:{
          100: "#121212",
          200: "#1E1E1E",
          300: "#2A2A2A",
          400: "#363636",
          500: "#424242",
          600: "#4E4E4E",
          700: "#5A5A5A",
        },
        accent: "#89CFF0",
      },
      fontFamily: {
        sans: ["Poppins-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
}