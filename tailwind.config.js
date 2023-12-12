/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': "#f7faf9",
        "lite-primary": "#E716E9",
        "lite-secondary": "#E9E716",
        "lite-base": "#16E9E7",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      backgroundImage: {
        'login-bg-img': "url('assets/images/loginImage.png')",
      },
    },
  },
  plugins: [],
}

