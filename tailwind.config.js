/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        // Set "Poppins" as the default font family
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

