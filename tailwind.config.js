/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        bgColorBox: "rgba(117, 116, 116, 0.05)",
        bgColorIcon: "rgba(47, 47, 47, 1)",
        // Sử dụng biến --primary đã định nghĩa
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
