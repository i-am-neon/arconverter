module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'arweave-primary': '#6bd3d5',
        'arweave-background': '#1c1c33'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}