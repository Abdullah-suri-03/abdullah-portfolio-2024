module.exports = {
    theme: {
      extend: {
        fontFamily: {
          'plus-jak': "'Plus Jakarta Sans', sans-serif",
        },
        colors: {
          primary: 'var(--primary)',
          secondary: 'var(--secondary)',
          tertiary: 'var(--tertiary)',
          quat: 'var(--quat)',
          parchment: 'var(--parchment)',
        },
        container: {
          center: true,
          padding: '1rem',
          screens: {
            sm: '600px',
            md: '728px',
            lg: '984px',
            xl: '1240px',
            '2xl': '1320px',
          },
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  };
  