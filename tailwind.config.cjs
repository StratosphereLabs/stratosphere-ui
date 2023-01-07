module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './.storybook/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  safelist: [
    {
      pattern: /./,
    },
  ],
  daisyui: {
    themes: ['light', 'dark'],
  },
  plugins: [require('daisyui')],
};
