import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        civic: {
          ink: '#17313A',
          pine: '#0F4F47',
          teal: '#287D7B',
          gold: '#C4943C',
          mist: '#EEF5F2',
          sky: '#E8F1F6',
          paper: '#FBFCFA'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'serif']
      },
      boxShadow: {
        soft: '0 18px 45px rgba(23, 49, 58, 0.10)'
      }
    }
  },
  plugins: [typography]
};
