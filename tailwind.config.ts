import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#0D0D1A', 700: '#1a1a2e', 500: '#2a2a44' },
        violet: { DEFAULT: '#6C3CE1', 50: '#f3eefd', 300: '#a78bea', 700: '#4f25b8' },
        indigo: { DEFAULT: '#4A5CFF', 50: '#eef0ff', 300: '#8b97ff' },
        cyan: { DEFAULT: '#00D4FF', 50: '#e6faff', 300: '#7fe4ff' },
        ink: {
          900: '#0D0D1A',
          700: '#3a3a52',
          500: '#6b6478',
          300: '#c9c4d4',
          200: '#e4e0ea',
          100: '#f5f3f7',
          50: '#fafafb',
        },
        coral: '#ff7560',
        gold: '#e8a93a',
        success: '#21a038',
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Unbounded', 'Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 8px 24px rgba(13,13,26,0.08)',
        cardHover: '0 16px 48px rgba(108,60,225,0.18)',
        glow: '0 0 32px rgba(108,60,225,0.35)',
        glowCyan: '0 0 32px rgba(0,212,255,0.35)',
      },
      borderRadius: {
        sm: '6px',
        DEFAULT: '10px',
        md: '14px',
        lg: '20px',
        xl: '28px',
        '2xl': '36px',
      },
    },
  },
} satisfies Config
