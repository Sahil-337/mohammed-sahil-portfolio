/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Tight"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        ink: {
          900: '#0B1220',
          800: '#111827',
          700: '#1F2937',
          600: '#374151',
          500: '#4B5563',
          400: '#6B7280',
          300: '#9CA3AF',
          200: '#D1D5DB',
          100: '#E5E7EB',
        },
        paper: '#FAFAF7',
        accent: {
          DEFAULT: '#0B6E4F',
          soft: '#E8F0EC',
          glow: '#10B981',
        },
        night: {
          900: '#070A12',
          800: '#0B1020',
          700: '#11172A',
          600: '#1A2240',
          500: '#2A3556',
        },
      },
      maxWidth: {
        content: '78rem',
      },
      letterSpacing: {
        tightish: '-0.018em',
        tighter2: '-0.04em',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        'pulse-soft': 'pulseSoft 2.4s ease-in-out infinite',
        'reveal': 'reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'gradient-pan': 'gradientPan 6s ease infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        reveal: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        gradientPan: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
