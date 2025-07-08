/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#e6f1ff',
          100: '#cce3ff',
          200: '#99c7ff',
          300: '#66abff',
          400: '#338fff',
          500: '#3a86ff',
          600: '#0062ff',
          700: '#0057e6',
          800: '#0046b8',
          900: '#003894',
        },
        secondary: {
          50: '#f5edfd',
          100: '#ead8fc',
          200: '#d4b2f9',
          300: '#bf8bf6',
          400: '#a964f3',
          500: '#8338ec',
          600: '#7616ea',
          700: '#6213c4',
          800: '#4e0f9d',
          900: '#3f0c7d',
        },
        accent: {
          50: '#ffe5f0',
          100: '#ffcce1',
          200: '#ff99c3',
          300: '#ff66a5',
          400: '#ff3387',
          500: '#ff006e',
          600: '#e60063',
          700: '#cc0058',
          800: '#a30047',
          900: '#800037',
        },
        dark: {
          100: '#d5d5d5',
          200: '#aaaaaa',
          300: '#808080',
          400: '#555555',
          500: '#2b2b2b',
          600: '#252525',
          700: '#1f1f1f',
          800: '#191919',
          900: '#121212',
        },
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}