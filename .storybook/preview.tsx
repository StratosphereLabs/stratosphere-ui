import { withThemeByDataAttribute } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';
import { THEMES } from './constants';
import theme from './theme';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme,
      options: {
        layout: 'fullscreen',
      },
    },
    layout: 'fullscreen',
    previewTabs: {
      'storybook/docs/panel': { hidden: true },
    },
  },
  tags: ['autodocs'],
  decorators: [
    withThemeByDataAttribute({
      themes: THEMES,
      defaultTheme: 'light',
      attributeName: 'data-theme',
    }),
    Story => (
      <div className="p-[3em] bg-base-100">
        <Story />
      </div>
    ),
  ],
};

export default preview;
