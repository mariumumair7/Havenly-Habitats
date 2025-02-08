/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Include all JS/TS/JSX/TSX files
    './app/**/*.{js,ts,jsx,tsx}', // If using the `/app` directory
  ],
  theme: {
    extend: {
      screens: {
        sm: '390px', 
        md: '768px',
        lg: '1024px',
        'xl': '1440px', 

      },

      colors: {
        DarkPrimary: '#your-dark-primary-color', // Replace with your color code
        LightGrey: '#F9F9F9',
        DarkPrimary: '#2A254B',
        black: '#22202E',
      },
    },
  },
  plugins: [],
};
