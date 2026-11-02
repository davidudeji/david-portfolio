/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}', './src/data/**/*.{ts,tsx}'],
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
