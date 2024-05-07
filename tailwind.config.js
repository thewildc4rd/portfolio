/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '300px',
        sm: '400px',
        md: '600px',
        xm: '750px',
        lg: '1140px',
        xl: '1300px',
        '2xl': '1500px',
      },
      colors: {
        'oxford-blue': '#171D2F',
        'space-cadet-dark': '#1F253D',
        'space-cadet-light': '#242C47',
        'space-cadet-light-trans': '#242c47b7',
        'marian-blue': '#324591',
        glaucous: '#677CCC',
        'rose-bonbon': '#EA4B93',
        'sky-magenta': '#D181BF',
        'naples-yellow': '#FEDF5F',
        emerald: '#23D18B',
        lavender: '#CCD4F1',
        'lavender-light': '#e5eafb',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontWeight: {
        thin: '100',
        hairline: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
    },
  },
  plugins: [],
};
