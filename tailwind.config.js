/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        'container':'1600px'
      },
      colors:{
        hadding:'#262626',
        hadding2:'#767676',
        border:'#979797',
        'bg':'#F5F5F3',
        'bannar':'#D8D8D8',
        'ptag':'#6D6D6D',
        'clk':'#F3F3F3',
        'border2':'#F0F0F0',
        
        
      },
      backgroundImage: {
        'bgimg': "url('./assets/image.png')",
        
      },
    },
  },
  plugins: [],
}

