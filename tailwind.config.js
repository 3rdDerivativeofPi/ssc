/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yipi: {
          orange: "#ff8201",
          orangeLight: "#f5a440",
          cream: "#f9f8f2",
          green: "#74c645",
          black: "#010101",
          orangeDark: "#d7720e",
          olive: "#29281c",
          navy: "#030107",
        },
      },
    },
  },
  plugins: [],
};
