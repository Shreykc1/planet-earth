/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'circular-web': ['Circular-Web', 'sans-serif'],
          'general': ['General', 'sans-serif'],
          'robert-medium': ['Robert-Medium', 'sans-serif'],
          'robert-regular': ['Robert-Regular', 'sans-serif'],
          'neue-thin': ['Neue-Thin', 'sans-serif'],
          'neue-roman': ['Neue-Roman', 'sans-serif'],
          'neue-medium': ['Neue-Medium', 'sans-serif'],
          'neue-bold': ['Neue-Bold', 'sans-serif'],
          'zentry': ['Zentry', 'sans-serif'],
        },
        colors: {
          blue: {
            50: '#dfdff0',
            75: '#dfdff2',
            100: '#f0f2fa',
            200: '#010101',
            300: '#4fb7dd',
          },
          green: {
            50: '#00c936',
            100: '#22a345',
            200: '#12a339',
            300: '#039c2c'
          }
        }
      },
    },
    plugins: [],
  }
