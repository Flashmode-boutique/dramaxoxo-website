/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0B0B0F",
          surface: "#12121A",
          card: "#181824",
          cardHover: "#202030",
          border: "#2A2A3E",
          borderLight: "#373752",
          red: "#E11D48",
          redHover: "#BE123C",
          redGlow: "rgba(225, 29, 72, 0.35)",
          gold: "#FFD700",
          goldMuted: "#F59E0B",
          textPrimary: "#FFFFFF",
          textSecondary: "#9CA3AF",
          textMuted: "#6B7280",
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        cinematic: ['Montserrat', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 20%, rgba(225, 29, 72, 0.18) 0%, rgba(11, 11, 15, 0) 70%)',
        'card-glow': 'linear-gradient(180deg, rgba(225, 29, 72, 0.05) 0%, rgba(24, 24, 36, 0.8) 100%)',
      },
      boxShadow: {
        'red-glow': '0 0 25px -5px rgba(225, 29, 72, 0.4)',
        'red-glow-lg': '0 0 45px -5px rgba(225, 29, 72, 0.5)',
        'card': '0 8px 24px -4px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
