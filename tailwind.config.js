/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme'); /* tailwind should be linked with npm through --- npm link tailwindcss */

module.exports = {
  content: ['./build/*.html', './build/js/.*js'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['"Tiempos Text Regular"', ...defaultTheme.fontFamily.serif],
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'tekhelet' : '#4b2aad',
        'davygray' : '#5c5856',
        'cinereous': '#ac9b94',
        'isabelline': '#f5efeb',
        'timberwolf': '#dfd8d3',
        'russianviolet': '#2E1A6F',
        'tropicalindigo': '#9484c6',
      },
      keyframes: {
        'open-menu': {
          '0%' : { 
            opacity: '0%', 
          },
          '33%' : { 
            opacity: '33%',  
          },
          '66%' : { 
            opacity: '66%',  
          },
          '100%' : { 
            opacity: '100%',  
          },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.1s ease-in forwards',
      }
    },
  },
  plugins: [],
}