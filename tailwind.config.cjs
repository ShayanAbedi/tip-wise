/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
module.exports = {
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme('fontSize.4xl'), fontSize: 900 },
        h2: { fontSize: theme('fontSize.3xl'), fontWeight: 600 },
        h3: { fontSize: theme('fontSize.lg'), fontSize: 400 },
      });
    }),
    require('tailwindcss-neumorphism'),
  ],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primaryCyan: 'hsl(172, 67%, 45%)',
      veryDarkCyan: 'hsl(183, 100%, 15%)',
      darkGaryishCyan: 'hsl(184, 14%, 56%)',
      lightGrayishCyan: 'hsl(185, 41%, 84%)',
      veryLightGrayishCyan: 'hsl(189, 41%, 97%)',
      white: 'hsl(0, 0%, 100%)',
    },
  },
};
