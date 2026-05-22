/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        surface: '#060a12',
        panel: 'rgba(15, 23, 42, 0.72)',
        glow: '#7c3aed',
      },
      boxShadow: {
        glow: '0 24px 90px rgba(103, 232, 249, 0.2)',
        panel: '0 24px 80px rgba(0, 0, 0, 0.36)',
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at 20% 20%, rgba(99,102,241,0.12), transparent 24%), radial-gradient(circle at 80% 15%, rgba(168,85,247,0.08), transparent 20%), radial-gradient(circle at 50% 80%, rgba(14, 165, 233, 0.08), transparent 18%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glowPulse: 'glowPulse 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
