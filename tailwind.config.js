/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/**/*.{ts,tsx}'],
  theme: {
    colors: {
      font: '#FFFFFF',
      'font-disabled': '#555555',
      selection: '#111111',
      separator: '#090909',
      background: '#000000',
      safe: '#00FF00',
      warning: '#FFA500',
      danger: '#FF0000',
    },
  },
  plugins: [],
};
