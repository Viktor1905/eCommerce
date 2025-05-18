/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        olive: '#3e3d38',
        jungle: '#2aa989',
        goldenrod: '#daa629',
        coral: '#e17978',
        khaki: '#c0b79c',
        'light-gray': '#e3e3e3',
        'jungle-green': '#216e58',
        'olive-trans': '#3e3d38a4',
        'dark-jungle': '#124e3f',
        'forest-green': '#225649',
      },
      screens: {
        xs: '600px',
        md2: '800px',
      },
    },
  },
  plugins: [],
};
