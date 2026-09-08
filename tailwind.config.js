/**
 * Los colores semánticos apuntan a las variables definidas en
 * src/assets/main.css. Cada utilidad (bg-surface, text-fg-muted…)
 * cambia sola con el tema: no hace falta escribir `dark:` para el color.
 */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{vue,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: {
          DEFAULT: 'var(--bg)',
          subtle: 'var(--bg-subtle)',
        },
        surface: {
          DEFAULT: 'var(--surface)',
          2: 'var(--surface-2)',
          hover: 'var(--surface-hover)',
        },
        hair: {
          DEFAULT: 'var(--border)',
          strong: 'var(--border-strong)',
        },
        fg: {
          DEFAULT: 'var(--fg)',
          muted: 'var(--fg-muted)',
          subtle: 'var(--fg-subtle)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          text: 'var(--accent-text)',
          solid: 'var(--accent-solid)',
          on: 'var(--accent-on)',
        },
        violet2: {
          DEFAULT: 'var(--accent-2)',
          text: 'var(--accent-2-text)',
        },
        ok: {
          DEFAULT: 'var(--ok)',
          text: 'var(--ok-text)',
        },
        warn: {
          text: 'var(--warn-text)',
        },
        // Escala cruda del acento — sólo para decoración (glows, gradientes).
        // Para texto usar siempre `text-accent-text`.
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
      fontSize: {
        'fluid-xs': 'var(--step--1)',
        'fluid-sm': 'var(--step-0)',
        'fluid-base': 'var(--step-1)',
        'fluid-lg': 'var(--step-2)',
        'fluid-xl': 'var(--step-3)',
        'fluid-2xl': 'var(--step-4)',
        'fluid-3xl': 'var(--step-5)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        accent: 'var(--shadow-accent)',
      },
      // Escala de z-index explícita: 10 contenido, 20 sticky,
      // 30 flotantes, 40 overlay, 50 navbar, 100 skip-link.
      zIndex: {
        base: '10',
        sticky: '20',
        float: '30',
        overlay: '40',
        nav: '50',
        top: '100',
      },
    },
  },
  plugins: [],
}
