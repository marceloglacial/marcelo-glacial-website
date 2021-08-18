module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        medium: '3.5rem',
        close: '4.5rem',
        large: '5.9rem',
      },
      letterSpacing: {
        medium: '-0.5rem',
        tightest: '-0.75rem',
        tight: '-0.1rem',
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
