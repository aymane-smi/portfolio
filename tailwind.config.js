/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dejavu: ["dejavu"],
      }
    },
    screens: {
      "xs": {"min": "200px", "max": "575px"},
      "sm": {"min": "576px", "max": "700px"},
      "md": {"min": "701px", "max": "1000px"},
      "lg": {"min": "1001px"},
    }
  },
  plugins: [],
}
