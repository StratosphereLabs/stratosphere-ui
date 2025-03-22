import { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';
import { AvatarGroup } from './AvatarGroup';

const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
  component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: 'https://pbs.twimg.com/profile_images/1419725933649465344/XFTBtqmk_400x400.jpg',
  },
};

export const Rounded: Story = {
  args: {
    shapeClassName: 'rounded-full',
    src: 'https://pbs.twimg.com/profile_images/1419725933649465344/XFTBtqmk_400x400.jpg',
  },
};

export const Sizes: Story = {
  args: {
    shapeClassName: 'rounded',
    src: 'https://pbs.twimg.com/profile_images/1419725933649465344/XFTBtqmk_400x400.jpg',
  },
  render: args => (
    <div className="flex flex-row items-center gap-2">
      <Avatar {...args} size="xl" />
      <Avatar {...args} size="lg" />
      <Avatar {...args} size="md" />
      <Avatar {...args} size="sm" />
    </div>
  ),
};

export const WithRing: Story = {
  args: {
    ringColor: 'primary',
    src: 'https://pbs.twimg.com/profile_images/1419725933649465344/XFTBtqmk_400x400.jpg',
  },
};

export const WithOnlineStatus: Story = {
  args: {
    isOnline: true,
    shapeClassName: 'rounded-full',
    src: 'https://pbs.twimg.com/profile_images/1419725933649465344/XFTBtqmk_400x400.jpg',
  },
};

export const WithOfflineStatus: Story = {
  args: {
    isOffline: true,
    shapeClassName: 'rounded-full',
    src: 'https://pbs.twimg.com/profile_images/1419725933649465344/XFTBtqmk_400x400.jpg',
  },
};

export const WithPlaceholderText: Story = {
  args: {
    isOffline: true,
    shapeClassName: 'rounded-full',
    placeholderText: 'ES',
  },
};

export const WithAvatarGroup: Story = {
  args: {
    shapeClassName: 'rounded',
    size: 'md',
    src: 'https://pbs.twimg.com/profile_images/1419725933649465344/XFTBtqmk_400x400.jpg',
  },
  render: args => (
    <AvatarGroup remainingCount={99}>
      <Avatar {...args} />
      <Avatar {...args} />
      <Avatar {...args} />
      <Avatar {...args} />
    </AvatarGroup>
  ),
};
