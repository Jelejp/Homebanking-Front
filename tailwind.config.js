const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      spacing: {
        '60': '15rem',
        '38': '9.5rem',
        '72': '18rem',
        '27': '6.75rem',
        '47': '11.75rem',
        '33': '8.25rem',
        '31': '7.75rem',
        '54': '13.5rem',
        '64': '16rem',
        '40': '10rem',
      },
      fontSize: {
        '0.04rem': '0.01em',
      },
      transform: {
        'preserve-3d': 'preserve-3d',
      },
      transformOrigin: {
        'preserve-3d': 'preserve-3d',
      },
      perspective: {
        '1000': '1000px',
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      }
    },
  },
  plugins: [
    flowbite.plugin(),
    function ({ addUtilities }) {
      addUtilities({
        '.transform-style-preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.rotate-y-180': {
          'transform': 'rotateY(180deg)',
        },
        '.perspective-1000': {
          'perspective': '1000px',
        },
      });
    },

  ],
}