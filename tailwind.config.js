/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
           "a-blue-2E3191": "#2E3191",
           "a-blue-0F2A43": "#0F2A43",
           "a-blue-005BC0": "#005BC0",
           "a-blue-0874D9": "#0874D9",
           "a-blue-E5F1FB": "#E5F1FB",
           "a-blue-DBEBF7": "#DBEBF7",
           "a-blue-ecf8ff": "#ecf8ff",

           "a-black-212121": "#212121",

           "a-gray-343443": "#343443",
           "a-gray-787878": "#787878",
           "a-gray-F8F8F8": "#F8F8F8",
           "a-gray-64748b": "#64748b",
           "a-gray-8b8d94": "#8b8d94"

      },

    },
  },
  plugins: [],
}

