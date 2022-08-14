/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(-4px)' },
          '50%': { transform: 'translateY(0)' },
        },
         rewiggle: {
          '0%, 100%': { transform: 'translateY(3px)' },
          '50%': { transform: 'translateY(0)' },
        }
      }
    },
    
    colors:{
      "main":"#0F3D3E",
      "white":"#ffff"
    },
    fontFamily:{
      indie:['Indie Flower', "cursive"],
      silk:["Silkscreen", "cursive"],
      playfair:['Playfair Display', 'serif'],
      poppins:["Poppins", "sans-serif"],
      barlow:["Barlow Semi Condensed", "sans-serif"],
      raleway:["Raleway", "sans-serif"],
    },
    
  },

  animation: {
    wiggle: 'wiggle 6s ease-in-out infinite',
    rewiggle:'rewiggle 6s ease-in-out infinite'
  },
  

  plugins: [],
}
