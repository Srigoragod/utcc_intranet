/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
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
        "a-gray-8b8d94": "#8b8d94",
        "a-gray-efeff4": "#efeff4",
        "a-gray-DEE0F5": "#DEE0F5",

        //  Faclty Color
        "a-ca-0A408A": "#0A408A",
        "a-es-53B5E8": "#53B5E8",
        "a-en-8D1C34": "#8D1C34",
        "a-hm-ED1923": "#ED1923",
        "a-gs-FF6801": "#FF6801",
        "a-ba-FFCA0A": "#FFCA0A",
        "a-ism-FFC80A": "#FFC80A",
        "a-ts-FCAF21": "#FCAF21",
        "a-ce-CB8E16": "#CB8E16",
        "a-tcism-d19a3b": "#d19a3b",
        "a-ac-702C90": "#702C90",
        "a-hsu-3D237F": "#3D237F",
        "a-ec-EF59A0": "#EF59A0",
        "a-st-007947": "#007947",
        "a-dad-53B5E8": "#009291",
        "a-cce-CBD0E3": "#CBD0E3",
        "a-lw-818386": "#818386",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#005BC0",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
