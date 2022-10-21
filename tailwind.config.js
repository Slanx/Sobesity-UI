/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: {
        dark: '#641E1F',
        darkest: '#461A1B',
        default: '#7B2224',
        light: '#AF4141',
      },
      secondary: {
        dark: '#666060',
        default: '#757171',
      },
      black: {
        dark: '#16171B',
        defalut: '#212226',
      },
      grey: '#505154',
      white: '#FFFFFF',
    },
    fontFamily: {
      oswald: 'Oswald, sans-serif',
      firaSans: 'Fira Sans, sans-serif',
      firaCode: 'Fira Code, monospace',
    },
    screens: {
      sm: { min: '414px' },
      md: { min: '768px' },
      lg: { min: '1024px' },
      xl: { min: '1280px' },
    },
    extend: {
      typography: (theme) => ({
        h1: {
          css: {
            fontSize: '1.5rem',
            lineHeight: '120.9%',
            letterSpacing: '0.05em',
            fontWeight: theme('fontWeight.medium'),
            fontFamily: theme('fontFamily.oswald'),
          },
        },
        h2: {
          css: {
            fontSize: '1.25rem',
            lineHeight: '120.9%',
            letterSpacing: '0.05em',
            fontWeight: theme('fontWeight.medium'),
            fontFamily: theme('fontFamily.oswald'),
          },
        },
        h3: {
          css: {
            fontSize: '0.875rem',
            lineHeight: '120.9%',
            letterSpacing: '0.05em',
            fontWeight: theme('fontWeight.medium'),
            fontFamily: theme('fontFamily.oswald'),
          },
        },
        'body-1': {
          css: {
            fontSize: '1rem',
            lineHeight: '142.9%',
            fontWeight: theme('fontWeight.light'),
            fontFamily: theme('fontFamily.firaSans'),
          },
        },
        'body-2': {
          css: {
            fontSize: '0.75rem',
            lineHeight: '120.9%',
            fontWeight: theme('fontWeight.light'),
            fontFamily: theme('fontFamily.firaSans'),
          },
        },
        'body-3': {
          css: {
            fontSize: '0.75rem',
            lineHeight: '120.9%',
            fontWeight: theme('fontWeight.normal'),
            fontFamily: theme('fontFamily.firaSans'),
          },
        },
        'body-4': {
          css: {
            fontSize: '0.875rem',
            lineHeight: '120.9%',
            fontWeight: theme('fontWeight.light'),
            fontFamily: theme('fontFamily.firaCode'),
          },
        },
        'button-1': {
          css: {
            fontSize: '0.875rem',
            lineHeight: '120.9%',
            letterSpacing: '0.05em',
            fontWeight: theme('fontWeight.normal'),
            fontFamily: theme('fontFamily.oswald'),
            textTransform: 'uppercase',
          },
        },
        'button-2': {
          css: {
            fontSize: '0.875rem',
            lineHeight: '120.9%',
            fontWeight: theme('fontWeight.light'),
            fontFamily: theme('fontFamily.firaSans'),
          },
        },
        'button-3': {
          css: {
            fontSize: '1.125rem',
            lineHeight: '120.9%',
            fontWeight: theme('fontWeight.light'),
            fontFamily: theme('fontFamily.firaSans'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
