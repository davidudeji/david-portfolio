/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#000000',
        border: '#262626',
        accent: '#22c55e',
      },
    },
  },
  plugins: [],
};
