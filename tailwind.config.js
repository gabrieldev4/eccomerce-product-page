/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   extend:{
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'primary': 'hsl(26, 100%, 55%)',
      'very-dark-blue': 'hsl(220, 13%, 13%)',
      'dark-grayish-blue': 'hsl(219, 9%, 45%)',
      'grayish-blue': 'hsl(220, 14%, 75%)',
      'light-grayish-blue': 'hsl(223, 64%, 98%)',
      'white': 'hsl(0, 0%, 100%)',
      'black': 'hsl(0, 0%, 0%)',
      'pale-orange': 'hsl(25, 100%, 94%)',
      extends:[]
    },
                        
    spacing:{
      '108': '27rem',
      '128': '32rem',
      '130': '34rem',
    }
   }
  },
  plugins: [],
}

