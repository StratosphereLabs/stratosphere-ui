import { DEFAULT_THEME, STORAGE_KEY, THEME_PICKER_LIST } from './constants';
import theme from './theme';
import '../src/index.css';

export const parameters = {
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
  themes: {
    default: window.localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME,
    onChange: theme => {
      if (theme) {
        window.localStorage.setItem('sb-stratosphere-ui-theme', theme.class);
      } else {
        window.localStorage.removeItem('sb-stratosphere-ui-theme');
      }
    },
    list: THEME_PICKER_LIST,
  },
};

export const tags = ['autodocs'];
