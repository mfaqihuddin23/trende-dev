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
        },
        trendeCol:{
          100 : '#C6C6C6',
          200 : '#FAFAFA',
          300 : '#5D89EE',
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
