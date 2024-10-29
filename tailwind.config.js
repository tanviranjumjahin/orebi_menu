/** @type {import('tailwindcss').Config} */
export default {
  content: [
   "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // font family start 
      fontFamily: {
        
      },
      // font family End
      // container start 
      maxWidth: {
        'menuContainer': '1320px',
      },
      // container End 
      // color start  
      colors: {
        'headerBg': '#FFFFFF',
        'menuBg': '#767676',
        'menuHover': '#262626',
        // color end  
    },
    
    },
  },
  plugins: [],
}

