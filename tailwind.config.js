/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik-Regular", "sans-serif"],
        "rubik-bold": ["Rubik-Bold", "sans-serif"],
        "rubik-extrabold": ["Rubik-ExtraBold", "sans-serif"],
        "rubik-medium": ["Rubik-Medium", "sans-serif"],
        "rubik-semiBold": ["Rubik-SemiBold", "sans-serif"],
        "rubik-light": ["Rubik-Light", "sans-serif"],
      }
    },
    colors: {
      "primary": {
        100: "#0061FF0A",
        200: "#0061FF1A",
        300: "#0061FF",
      },
      accent: {
        100: "#FBFBFD",
      },
      black: {
        DEFAULT: "#000000",
        100: "#8C8E98",
        200: "#666876",
        300: "#191D31",
      },
      danger: {
        DEFAULT: "#F75555",
      },
      white: {
        DEFAULT: "#FFFFFF",
        100: "#F7F7F7",
        200: "#F0F0F0",
        300: "#E5E5E5",
      },
      gray: {
        DEFAULT: "#8C8E98",
        100: "#F7F7F7",
        200: "#F0F0F0",
        300: "#E5E5E5",
        400: "#666876",
        500: "#191D31",
      },
    }
  },
  plugins: [],
}