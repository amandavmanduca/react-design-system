/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    colors: {
      'primary-text-color': '#FAFAFA',
      'secundary-text-color': '#7c7c8a',
      'primary-color': '#202024',
      'dark-background-color': '#121214',
      'secundary-color': '#adadcd',
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
