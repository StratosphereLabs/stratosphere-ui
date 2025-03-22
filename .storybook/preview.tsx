import { withThemeByDataAttribute } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react';

import '../src/index.css';
import { THEMES } from './constants';
import theme from './theme';

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
      defaultTheme: 'dark',
      attributeName: 'data-theme',
    }),
    Story => (
      <div className="flex justify-center bg-base-100 p-[3em]">
        <Story />
      </div>
    ),
  ],
};

export default preview;
