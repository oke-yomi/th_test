/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#5f5e5e",
        "custom-darkgray": "#363636",
        "custom-green": "#6e9e76",
      },
      animation: {
        "ping-slow": "ping 1.5s linear infinite",
      },
    },
  },
  plugins: [],
};
