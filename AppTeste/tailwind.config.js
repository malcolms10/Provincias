/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx"],
  theme: {
    extend: {
        fontFamily: {
          title: 'Roboto_700Bold',
          body: 'Roboto_400Regular',
        },
        colors: {
          ndozy: '#cc092f'
        }
    },
  },
  plugins: [],
}

