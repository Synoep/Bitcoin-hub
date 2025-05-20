/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bitcoin': {
          50: '#FFF8E6',
          100: '#FFEFC3',
          200: '#FFE299',
          300: '#FFD570',
          400: '#FFC847',
          500: '#F7931A', // Bitcoin primary
          600: '#E67F00',
          700: '#CC6D00',
          800: '#A35600',
          900: '#7A4100',
        },
        'primary': {
          50: '#E6F0FF',
          100: '#CCE0FF',
          200: '#99C2FF',
          300: '#66A3FF',
          400: '#3385FF',
          500: '#0052FF', // Primary blue
          600: '#0047E6',
          700: '#003CCC',
          800: '#0031A3',
          900: '#00267A',
        },
        'secondary': {
          50: '#E6F9F7',
          100: '#C3F0EA',
          200: '#8CE3D8',
          300: '#5CD6C6',
          400: '#36CCB8',
          500: '#14B8A6', // Secondary teal
          600: '#0E8A7D',
          700: '#086E63',
          800: '#04544C',
          900: '#033834',
        },
        'accent': {
          50: '#FFF1E6',
          100: '#FFE0C3',
          200: '#FFC299',
          300: '#FFA370',
          400: '#FF8547',
          500: '#F97316', // Accent orange
          600: '#E65300',
          700: '#CC4A00',
          800: '#A33C00',
          900: '#7A2D00',
        },
        'success': {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
        },
        'warning': {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        'error': {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
        },
        'dark': {
          100: '#CFCFCF',
          200: '#A8A8A8',
          300: '#6E6E6E',
          400: '#3F3F3F',
          500: '#171717', // Dark background
          600: '#141414',
          700: '#0F0F0F',
          800: '#0A0A0A',
          900: '#050505',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.1)',
        'button': '0 2px 5px rgba(247, 147, 26, 0.2)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};