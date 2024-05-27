/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage :{
        'hero-pattern': "url('./images/cool-background.png')",
        'progress-gradient': 'conic-gradient(#fff 0% 80%, #222 80% 100% )'
      },
      colors: {
        'bgColor1': '#1C1C1C',
        'bgColor2': '#0F0F0F',
        'Yellow': '#EBFF00',
        'Green': '#7ACB6D',
        'profile-bg': '#ECE6EC',
        'profile-txt': '#BDFF00',
        'profile-stroke': '#80FF00',
        'input-stroke': '#C7BABA',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],

      },
      gridTemplateColumns : {
        'auto-13-fr': 'repeat(auto-fill, minmax(13rem, 1fr))',
        'auto-20-fr': 'repeat(auto-fill, minmax(20rem, 1fr))',
      },
    },
  },
  plugins: [],
}