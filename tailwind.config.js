/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',           // المسار إلى ملف HTML
    './src/**/*.{js,ts,jsx,tsx}',  // المسار إلى جميع ملفات JS, TS, JSX, TSX في مجلد src
  ],
  theme: {
    extend: {
       
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.omar': {
          color: 'red',
        
        },
      }, ['responsive', 'hover']);
    },
    
  ],
}
