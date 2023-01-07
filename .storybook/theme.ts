import { create, ThemeVars } from '@storybook/theming';

const baseTheme: ThemeVars = {
  base: 'dark',
  brandTitle: 'StratosphereUI',
  brandUrl: 'https://github.com/StratosphereLabs/stratosphere-ui',
  colorPrimary: '#3ABFF8',
  colorSecondary: '#6419E6',
  appBg: '#222630',
  appContentBg: '#191D24',
  appBorderColor: '#323945',
  textColor: '#A6ADBA',
  barTextColor: '#A6ADBA',
  barSelectedColor: '#C3D0EA',
  barBg: '#191D24',
};

export const docsTheme = {
  ...baseTheme,
  maxWidth: '100%',
};

export default create(baseTheme);
