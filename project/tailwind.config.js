/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        "Dana" : "Dana",
        "DanaMedium" : "Dana Medium",
        "DanaDemibold" : "Dana Demibold",
      },
      backgroundColor :{
        "natural-blue"  : "#CAE8FF",
        "natural-blue-nav"  : "#5EB5F8  ",
        "natural-black"  : "#1F2732",
      },
      colors  : {
        "natural-black"  : "#1F2732",
        "natural-gray"  : "#858585",
      },
      container  : {
        center : true,
        padding : {
        DEFAULT : "1rem",
        }
    }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
  }
  ],  

}

