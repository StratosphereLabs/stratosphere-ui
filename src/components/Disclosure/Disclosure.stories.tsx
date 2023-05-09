import { Story, Meta } from '@storybook/react';
import { Disclosure, DisclosureProps } from './Disclosure';

export default {
  title: 'Disclosure',
  component: Disclosure,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta;

export const Default: Story<DisclosureProps> = args => <Disclosure {...args} />;

Default.args = {
  buttonProps: {
    color: 'ghost',
    children: 'Disclosure Label',
  },
  children: <div className="flex-1 text-center">Disclosure Content</div>,
  className: 'w-64',
};

export const Rounded: Story<DisclosureProps> = args => <Disclosure {...args} />;

Rounded.args = {
  buttonProps: {
    color: 'ghost',
    children: 'Disclosure Label',
  },
  children: <div className="flex-1 text-center">Disclosure Content</div>,
  className: 'w-64',
  rounded: true,
};

export const Large: Story<DisclosureProps> = args => <Disclosure {...args} />;

Large.args = {
  buttonProps: {
    color: 'ghost',
    children: 'Disclosure Label',
    size: 'lg',
  },
  children: <div className="flex-1 text-center">Disclosure Content</div>,
  className: 'w-64',
  rounded: true,
};
