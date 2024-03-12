/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'rich-black-fogra-29': 'var(--rich-black-fogra-29)',
        'champagne-pink-20': 'var(--champagne-pink-20)',
        'independence-30': 'var(--independence-30)',
        'gray-x-11-gray': 'var(--gray-x-11-gray)',
        'champagne-pink': 'var(--champagne-pink)',
        'spanish-gray': 'var(--spanish-gray)',
        'sonic-silver': 'var(--sonic-silver)',
        'deep-saffron': 'var(--deep-saffron)',
        'dark-orange': 'var(--dark-orange)',
        'desert-sand': 'var(--desert-sand)',
        'isabelline': 'var(--isabelline)',
        'gainsboro': 'var(--gainsboro)',
        'tangerine': 'var(--tangerine)',
        'cinnabar': 'var(--cinnabar)',
        'black-95': 'var(--black-95)',
        'cultured': 'var(--cultured)',
        'white': 'var(--white)',
        'black': 'var(--black)',
        'onyx': 'var(--onyx)',
      },
      fontFamily: {
        'shadows-into-light': ['Shadows Into Light', 'cursive'],
        'roboto': ['Roboto', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
      },
      fontSize: {
        '1': '3.2rem',
        '2': '2.2rem',
        '3': '1.8rem',
        '4': '1.4rem',
        '5': '1.2rem',
      },
      fontWeight: {
        '500': '500',
        '600': '600',
        '700': '700',
      },
      spacing: {
        'section': '60px',
      },
      boxShadow: {
        '1': '0 1px 4px hsla(0, 0%, 0%, 0.2)',
        '2': '0 1px 2px hsla(0, 0%, 0%, 0.2)',
      },
      transitionDuration: {
        '1': '0.25s',
        '2': '0.5s',
      },
    },
  },
  plugins: [],
};
