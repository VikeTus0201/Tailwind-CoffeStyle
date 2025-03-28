/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla: ['Karla', 'sans-serif'],
      },
      colors:{
        'light-coffee': '#E8D6D0',
        'coffee':{
          50:'#E8D6D0',
          200:'#C89F94',
          400:'#A25F48',
          600:'#744838'
        }
        
      },
      keyframes:{
        slideDown:{
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      animation:{
        slideDown:'slideDown .4s ease-in-out',
        slideDown:'slideDown .4s ease-in-out'
      },
      backgroundImage:{
        'slider':'url("./image/slider.jpg")'
      }
    },
  },
  plugins: [],
}

