/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1474f5'
        },
        success: {
          DEFAULT: '#3e8c21'
        },
        danger: {
          DEFAULT: '#f0443d'
        }
      },
      fontSize: {
        'size-base': '1.875rem'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"]
      },
      boxShadow: {
        "custom-card-shadow": '0px 4px 10px 0px rgba(6, 12, 27, 0.15)'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}