module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#121212',
        secondary: '#181818',
        tertiary: '#222222',
        quaternary: '#282828',

        greenTop: '#9bca6d',
        greenBottom: '#9fd256',
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}