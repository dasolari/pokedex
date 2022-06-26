module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1150px',
      '2xl': '1496px',
    },
    fontFamily: {
      sans: ['Changa', 'sans-serif'],
      serif: ['Changa', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'main-background': "url('https://res.cloudinary.com/cloudiegosm/image/upload/v1656271238/background_qganrr.png')",
        'gray-to-sky': "linear-gradient(to bottom, #38bdf8 50% , #9ca3af 50%)",
        'yellow-to-yellow': "linear-gradient(to bottom, #facc15 50% , #a16207 50%)",
        'red-to-sky': "linear-gradient(to bottom, #0369a1 50% , #f87171 50%)",
        'green-to-gray': "linear-gradient(to bottom, #22c55e 60% , #737373 40%)",
      },
      animation: {
        'bounce-once': 'single-bounce 0.2s 1',
      },
      keyframes: {
        'single-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2%)' },
        },
      },
    },
  },
  plugins: [],
}
