/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,ts}"],
  theme: {
    extend: {
      container: { center: true, padding: "1rem" },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        display: ["Cal Sans", "Inter", "ui-sans-serif"],
      },
      colors: {
        brand: {
          DEFAULT: "#2563eb",
          600: "#2563eb",
          700: "#1d4ed8",
        },
      },
      boxShadow: {
        soft: "0 2px 14px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
