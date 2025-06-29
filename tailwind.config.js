// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        md: '0 4px 8px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
        xl: '0 12px 24px var(--tw-shadow-color)',
        '2xl': '0 16px 32px var(--tw-shadow-color)',
      },
      textShadowColor: {
        sky: '#38bdf8', // sky-300
        black: '#000',
        white: '#fff',
        gray: '#9ca3af',
      },
      animation: {
        "spin-slow": "spin-slow 20s linear infinite",
      },
      keyframes: {
        "spin-slow": {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        }
      },
    },
  },
  plugins: [],
}
