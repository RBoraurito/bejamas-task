const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: '#000000',
      darker: '#1D1D1D',
      gray: {
        100: '#E4E4E4',
        150: '#C2C2C2',
        200: '#B4B4B4',
        300: '#9B9B9B',
        400: '#656565',
      },
      white: '#FFFFFF'
    },
    extend: {
      fontFamily: {
        'sans': ['Archivo', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        cap: [
          '1rem',       // 16px
          '1.125rem'    // 18px
        ],
        parragraph: [
          '1.125rem',   // 18px
          '1.6875rem'   // 27px
        ],
        'parragraph-2': [
          '1.25rem',     // 20px
          '1.375rem'     // 22px
        ],
        lead: [
          '1.375rem',   // 22px
          '1.5rem'      // 24px
        ],
        h2: [
          '1.875rem',   // 30px
          '2rem'        // 32px
        ],
        h1: [
          '2rem',       // 32px
          '2.125rem'    // 34px
        ],
        display: [
          '2.125rem',    // 34px
          '2.25rem',     // 36px
        ]
  
      }
    }
  },
  plugins: [],
}
