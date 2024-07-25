/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/v1/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "960px",
      "xl": "1200px",
    },
    extend: {
      fontFamily: {
        inter: ['Inter'],
        merriweather: ['Merriweather'],
      },
      colors: {
        cyan: "#003d75",
        accent: {
          DEFAULT: " #00ffff",
          hover: " #00ffff"
        },
      },
      plugins: [],
    },
  },
}

