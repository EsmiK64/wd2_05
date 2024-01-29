/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(35, 77%, 62%)",
        secondary: "hsl(5, 85%, 63%)",
        'off-white': "hsl(36, 100%, 99%)",
        'grayish-blue': "hsl(233, 8%, 79%)",
        'dark-grayish-blue': "hsl(236, 13%, 42%)",
        'dark-blue': "hsl(240, 100%, 5%)"
      },
      screens: {
        "xl": "1440px",
        "sm": "375px"
      }
    },
  },
  plugins: [],
}