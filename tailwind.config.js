/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          red: "hsl(0, 100%, 74%)",
          green: "hsl(154, 59%, 51%)",
        },
        accent: {
          blue: "hsl(248, 32%, 49%)",
        },
        neutral: {
          "dark-blue": "hsl(249, 10%, 26%) ",
          "grayish-blue": "hsl(246, 25%, 77%)",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        mobile: "url('/images/bg-intro-mobile.png')",
        desktop: "url('/images/bg-intro-desktop.png')",
      },
      maxWidth: {
        1100: "1100px",
        600: "600px",
      },
      boxShadow: {
        "my-shadow": "0px 8px 0px 0px rgba(0, 0, 0, 0.15)", // Custom box shadow definition
      },
    },
  },
  plugins: [],
}
// font-family: 'Poppins', sans-serif;
