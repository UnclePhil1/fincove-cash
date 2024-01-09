/** @type {import('tailwindcss').Config} */
import { withUt } from "uploadthing/tw";

export default withUt({
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          rowdies: ['Rowdies', 'sans-serif'],
          poppins: ['Poppins', 'sans-serif'],
        },
        colors: {
          "primary": "#421638",
          "light": "#FFB3ED",
          "background": "#F6EEFF",
          "primarydark": "#5B2682",
          "darkgray": "#9D9D9D",
        }
      },
    },
    plugins: [],

});
