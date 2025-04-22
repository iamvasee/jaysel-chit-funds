/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-hanken-grotesk)', 'sans-serif'],
      },
      colors: {
        primary: '#FF4E59',
        secondary: '#4014C6',
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(-50%, -48%)' },
          '50%': { transform: 'translate(-50%, -52%)' },
        },
        floatDelayed: {
          '0%, 100%': { transform: 'translate(-50%, -52%)' },
          '50%': { transform: 'translate(-50%, -48%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'floatDelayed 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} 