/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      typography: () => ({
        DEFAULT: {
          css: {
            blockquote: {
              quotes: 'none',
            },
          },
        },
      }),
    },
  },
};
