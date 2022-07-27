/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage:{
        'fondorv': "url('../public/ops_0003_Relleno-de-color-1.png')"
      }
    },
    fontFamily:{
      'ubuntu': ["Ubuntu", "sans-serif"],
    },
    screens:{
      'ssm': '320px',
      'sm': '640px',
      'xl': '1280px'
    }
  },
  plugins: [],
}
