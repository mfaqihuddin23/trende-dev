/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".assets/**/*.{html,js}", "*.html"],
  theme: {
    extend: {
      container : {
        center : true,
      },
      colors: {
        trendeGrade:{
          100 : '#8C41D8',
          200 : '#4107BD',
          300 : '#29BCFF',
          400 : '#0AA3E9',
          500 : '#27D130',
          600 : '#2A7D23',
          700 : '#FFD873',
          800 : '#FFA800',
          900 : '#BD7D07'
        },
        trendeCol:{
          100 : '#C6C6C6',
          200 : '#FAFAFA',
          300 : '#5D89EE',
          400 : '#E9E9E9',
          500 : '#191919',
          600 : '#D8A341',
          700 : '#0B0D17',
          800 : '#D9DBE1',
        }
      },
      fontFamily:{
        'Inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
