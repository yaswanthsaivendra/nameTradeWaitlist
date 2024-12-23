/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#42DBF0',
        secondary: '#000000',
        tertiary: '#1A1A1A',
      },
    },
  },
  plugins: [],
}

