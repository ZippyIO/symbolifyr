/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false,
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-red': {
          DEFAULT: 'var(--light-red)',
          foreground: 'var(--light-red-foreground)',
        },
        'light-pink': {
          DEFAULT: 'var(--light-pink)',
          foreground: 'var(--light-pink-foreground)',
        },
        'light-grape': {
          DEFAULT: 'var(--light-grape)',
          foreground: 'var(--light-grape-foreground)',
        },
        'light-violet': {
          DEFAULT: 'var(--light-violet)',
          foreground: 'var(--light-violet-foreground)',
        },
        'light-indigo': {
          DEFAULT: 'var(--light-indigo)',
          foreground: 'var(--light-indigo-foreground)',
        },
        'light-blue': {
          DEFAULT: 'var(--light-blue)',
          foreground: 'var(--light-blue-foreground)',
        },
        'light-cyan': {
          DEFAULT: 'var(--light-cyan)',
          foreground: 'var(--light-cyan-foreground)',
        },
        'light-teal': {
          DEFAULT: 'var(--light-teal)',
          foreground: 'var(--light-teal-foreground)',
        },
        'light-green': {
          DEFAULT: 'var(--light-green)',
          foreground: 'var(--light-green-foreground)',
        },
        'light-lime': {
          DEFAULT: 'var(--light-lime)',
          foreground: 'var(--light-lime-foreground)',
        },
        'light-yellow': {
          DEFAULT: 'var(--light-yellow)',
          foreground: 'var(--light-yellow-foreground)',
        },
        'light-orange': {
          DEFAULT: 'var(--light-orange)',
          foreground: 'var(--light-orange-foreground)',
        },
      },
    },
  },
  plugins: [],
};
