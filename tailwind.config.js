// tailwind.config.mjs
export default {
  darkMode: ['class'], // 👈 forzamos modo clase
  content: ['./index.html', './src/**/*.{vue,ts,tsx}'],
  theme: {
    container: { center: true, padding: '1rem', screens: { '2xl': '1280px' } },
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Cal Sans', 'Inter', 'ui-sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#0ea5e9',
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
      },
      boxShadow: { soft: '0 10px 30px rgba(0,0,0,.06)' },
    },
  },
  plugins: [],
}
