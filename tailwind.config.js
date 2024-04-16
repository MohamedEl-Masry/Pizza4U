
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    fontFamily:{
      sans : 'Roboto Mono , monospace'
    },
    extend: {
      height:{screen: '100dvh'}
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('flowbite/plugin'),
  ],
};

