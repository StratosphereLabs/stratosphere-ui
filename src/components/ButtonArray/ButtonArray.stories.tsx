import { Story, Meta } from '@storybook/react';
import { ButtonArray, ButtonArrayProps } from './ButtonArray';
import { EyeIcon, InfoIcon, WarningIcon } from '../Icons';

export default {
  title: 'ButtonArray',
  component: ButtonArray,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta;

export const Default: Story<ButtonArrayProps> = args => (
  <ButtonArray {...args} />
);

Default.args = {
  buttonOptions: [
    {
      color: 'accent',
      key: 'view',
      icon: EyeIcon,
      menuText: 'View',
      onClick: () => null,
      size: 'xs',
    },
    {
      color: 'info',
      key: 'info',
      icon: InfoIcon,
      menuText: 'Info',
      onClick: () => null,
      size: 'xs',
    },
    {
      color: 'warning',
      key: 'warning',
      icon: WarningIcon,
      menuText: 'Warning',
      onClick: () => null,
      size: 'xs',
    },
  ],
};

export const WithTooltips: Story<ButtonArrayProps> = args => (
  <ButtonArray {...args} />
);

WithTooltips.args = {
  buttonOptions: [
    {
      color: 'accent',
      key: 'view',
      icon: EyeIcon,
      menuText: 'View',
      onClick: () => null,
      size: 'xs',
    },
    {
      color: 'info',
      key: 'info',
      icon: InfoIcon,
      menuText: 'Info',
      onClick: () => null,
      size: 'xs',
    },
    {
      color: 'warning',
      key: 'warning',
      icon: WarningIcon,
      menuText: 'Warning',
      onClick: () => null,
      size: 'xs',
    },
  ],
  withTooltips: true,
};

export const Collapsable: Story<ButtonArrayProps> = args => (
  <ButtonArray {...args} />
);

Collapsable.args = {
  buttonOptions: [
    {
      color: 'accent',
      key: 'view',
      icon: EyeIcon,
      menuText: 'View',
      onClick: () => null,
      size: 'xs',
    },
    {
      color: 'info',
      key: 'info',
      icon: InfoIcon,
      menuText: 'Info',
      onClick: () => null,
      size: 'xs',
    },
    {
      color: 'warning',
      key: 'warning',
      icon: WarningIcon,
      menuText: 'Warning',
      onClick: () => null,
      size: 'xs',
    },
  ],
  className: 'pb-[120px]',
  collapseAt: 'xl',
  withTooltips: true,
};
