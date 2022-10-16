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
      transparent: 'transparent',
      black: '#000',
      white: '#FFF',

      text: {
        primary: '#FAFAFA',
        secundary: '#7c7c8a'
      },

      primary: '#202024',
      secundary: '#adadcd',

      background: {
        dark: '#121214'
      }
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
