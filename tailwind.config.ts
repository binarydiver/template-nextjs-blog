import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    './index.html',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  // Toggle dark-mode based on data-mode="dark"
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans KR', ...defaultTheme.fontFamily.sans],
        serif: ['Noto Serif KR', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [typography],
} as Config;
