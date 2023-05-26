// tailwind.config.js

module.exports = {
  content: [
    "./src/screen/**/*.{js,ts,jsx,tsx}",
    ".src/components/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      extend: {
        fontFamily: {
          poppins: ["Poppins"],
        },
      },
    },
    plugins: [],
  }