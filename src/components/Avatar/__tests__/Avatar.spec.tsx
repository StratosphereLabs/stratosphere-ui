import { render, screen } from '@testing-library/react';
import classNames from 'classnames';

import { AVATAR_SIZE_MAP, Avatar, AvatarSizes } from '../Avatar';

describe('Avatar Component', () => {
  it('renders without crashing', () => {
    render(<Avatar src="test.jpg" />);
    const avatarElement = screen.getByRole('img');
    expect(avatarElement).toBeInTheDocument();
  });

  it('applies size class based on size prop', () => {
    for (const size of AvatarSizes) {
      const { unmount } = render(<Avatar src="test.jpg" size={size} />);
      const avatarElement = screen.getByRole('img');
      expect(avatarElement.parentElement).toHaveClass(AVATAR_SIZE_MAP[size]);
      unmount();
    }
  });

  it('renders with alt text', () => {
    render(<Avatar src="test.jpg" alt="Test Avatar" />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'test.jpg');
    expect(img).toHaveAttribute('alt', 'Test Avatar');
  });

  it('renders placeholder text when provided', () => {
    render(<Avatar placeholderText="AB" />);
    expect(screen.getByText('AB')).toBeInTheDocument();
  });

  it('applies online class when isOnline is true', () => {
    render(<Avatar src="test.jpg" isOnline />);
    expect(screen.getByRole('img').parentElement?.parentElement).toHaveClass(
      'avatar-online',
    );
  });

  it('applies offline class when isOffline is true', () => {
    render(<Avatar src="test.jpg" isOffline />);
    expect(screen.getByRole('img').parentElement?.parentElement).toHaveClass(
      'avatar-offline',
    );
  });

  it('applies ring color class when ringColor is provided', () => {
    render(<Avatar src="test.jpg" ringColor="primary" />);
    expect(screen.getByRole('img').parentElement).toHaveClass(
      classNames(
        'rounded-full',
        'ring',
        'ring-offset-2',
        'ring-offset-base-100',
        'ring-primary',
      ),
    );
  });
});
