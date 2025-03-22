import { Meta, StoryObj } from '@storybook/react';

import { EyeIcon, InfoIcon, WarningIcon } from '../Icons';
import { ButtonArray } from './ButtonArray';

const meta: Meta<typeof ButtonArray> = {
  title: 'ButtonArray',
  component: ButtonArray,
};

export default meta;

type Story = StoryObj<typeof ButtonArray>;

export const Primary: Story = {
  args: {
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
  },
};

export const WithTooltips: Story = {
  args: {
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
  },
};

export const Collapsable: Story = {
  args: {
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
  },
};
