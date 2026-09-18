/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          deep: '#023020',
          dark: '#011a12',
          emerald: '#00a86b',
          mint: '#059669',
          softmint: '#ecfdf5',
          offwhite: '#F7FAF8',
          lime: '#84cc16',
          charcoal: '#0f172a',
          slate: '#334155',
          muted: '#64748b',
        },
        emerald: {
          deep: '#023020',
          forest: '#011a12',
          mid: '#00a86b',
          mint: '#00c87f',
        }
      },
      borderRadius: {
        '2xl': '18px',
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        'glow': '0 0 50px -10px rgba(0, 168, 107, 0.25)',
        'glow-deep': '0 0 60px -15px rgba(2, 48, 32, 0.35)',
        'card-soft': '0 10px 30px -5px rgba(2, 48, 32, 0.05)',
      }
    },
  },
  plugins: [],
}
