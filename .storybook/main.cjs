module.exports = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: ['@storybook/addon-actions', '@storybook/addon-docs', {
    name: '@storybook/addon-essentials',
    options: {
      backgrounds: false,
    },
  }, '@storybook/addon-interactions', '@storybook/addon-links', '@storybook/addon-postcss', '@storybook/addon-storysource', 'storybook-addon-themes', '@chromatic-com/storybook'],

  framework: {
    name: '@storybook/react-vite',
    options: {}
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};
