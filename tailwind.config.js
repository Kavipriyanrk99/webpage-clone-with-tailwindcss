/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme'); /* tailwind should be linked with npm through --- npm link tailwindcss */

module.exports = {
  content: ['./build/*.html', './build/js/*.js'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['"Tiempos Fine"', ...defaultTheme.fontFamily.serif],
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'tekhelet' : '#4b2aad',
        'davygray' : '#5c5856',
        'cinereous': '#ac9b94',
        'isabelline': '#f5efeb',
        'timberwolf': '#dfd8d3',
        'russianviolet': '#201445',
        'tropicalindigo': '#9484c6',
        'grape': '#5233b0',
        'persianindigo': '#351e7a',
        'lavanderweb': '#d7d2e8',
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
        'rotate-arrow': {
          '0%' : { 
            transform: 'rotate(0deg)', 
          },
          '33%' : { 
            transform: 'rotate(60deg)',  
          },
          '66%' : { 
            transform: 'rotate(120deg)',  
          },
          '100%' : { 
            transform: 'rotate(180deg)',  
          },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.1s ease-in forwards',
        'rotate-arrow': 'rotate-arrow 0.3s linear forwards',
      }
    },
  },
  plugins: [],
}