/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 1s ease-out forwards",
      },
      colors: {
        green: {
          100: "#09D3AC",
          200: "#E6F0EB",
          300: "#CCE1D7",
          500: "#475D5B",
          700: "#004643",
          900: "#00332C",
        },
        orange: "#F9BC60",
        blue: "#ADD8E6",
        yellow: "#FFF9C4",
        pink: "#FF69B4",
        white: "#FFFFFF",
        black: "#000000",
        paragraph: "#475d5b",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
