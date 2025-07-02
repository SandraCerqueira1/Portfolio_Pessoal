export default {
  content: [
    './index.html',
    './App.vue',
    './components/**/*.{vue,js}',
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { filter: 'drop-shadow(0 0 15px rgba(138,43,226,0.6))' },
          '50%': { filter: 'drop-shadow(0 0 30px rgba(138,43,226,1))' },
        },
        pulseScale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        },
        typewriter: {
          '0%': { width: '0ch' },
          '100%': { width: '16ch' },
        },
        blinkCaret: {
          '0%, 100%': { borderColor: 'currentColor' },
          '50%': { borderColor: 'transparent' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        glowPulse: 'glowPulse 2.5s ease-in-out infinite',
        glowPulseGreen: 'glowPulseGreen 2.5s ease-in-out infinite',
        pulseScale: 'pulseScale 3s ease-in-out infinite',
        typewriter: 'typewriter 3s steps(16) forwards',
        blinkCaret: 'blinkCaret 0.75s step-end infinite',
      },
      dropShadow: {
        'glow-purple': '0 0 15px rgba(138,43,226,0.6)',
        'glow-green': '0 0 15px rgba(22,163,74,0.6)',
      },
      boxShadow: {
        'glow-soft-purple': '0 0 25px 10px rgba(138,43,226,0.25)',
      },
      colors: {
        'glass-bg': 'rgba(28,28,30,0.6)',
      },
    },
  },
  plugins: [],
}
