/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily:{
      abc:["Poppins", "sans-serif"]
    }
  },
  daisyui: {
    themes: [
      {
        automarttheme: {
          primary: "#F5FFF9",
          secondary: "#105628",
          accent: "#00AB3B",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
     
    ],
  },
  plugins: [require("daisyui")],
}

