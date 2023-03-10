/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "grape": "#94618E",
        "eggplant": "#49274A",
        "sand": "#F4DECB",
        "shell": "#F8EEE7",
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
}
