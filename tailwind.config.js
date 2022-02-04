module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],
  fontFamily: {
    sans: ["Poppins", "sans-serif"],
  },
  theme: {
    extend: {
      colors: {
        "black-haze": {
          50: "#ffffff",
          100: "#fefeff",
          200: "#fdfefe",
          300: "#fcfdfd",
          400: "#f9fbfc",
          500: "#f7f9fa",
          600: "#dee0e1",
          700: "#b9bbbc",
          800: "#949596",
          900: "#797a7b",
        },
        emerald: {
          50: "#f4fcf8",
          100: "#e9f9f0",
          200: "#c7f0da",
          300: "#a5e7c3",
          400: "#62d696",
          500: "#1EC469",
          600: "#1bb05f",
          700: "#17934f",
          800: "#12763f",
          900: "#0f6033",
        },
        lochmara: {
          50: "#f2f9fd",
          100: "#e6f3fa",
          200: "#c0e0f3",
          300: "#99cdec",
          400: "#4da8de",
          500: "#0183D0",
          600: "#0176bb",
          700: "#01629c",
          800: "#014f7d",
          900: "#004066",
        },
      },
    },
  },
  plugins: [],
};
