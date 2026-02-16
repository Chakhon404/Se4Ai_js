/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'kku-gold': '#ff6600',      // สีทอง มข.
        'kku-maroon': '#ff5900',    // สีแดงเลือดหมู มข.
      },
    },
  },
  plugins: [],
}