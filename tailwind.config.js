/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-blue': '#bee3f8',
        'dark-blue': '#3182ce',
        'background-light': '#f7fafc',
        'background-dark': '#1a202c',
      },
    },
  },
  plugins: [],
};
