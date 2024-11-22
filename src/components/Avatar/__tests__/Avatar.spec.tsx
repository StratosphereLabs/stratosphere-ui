import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Avatar, AVATAR_SIZE_MAP, AvatarSizes } from '../Avatar';

describe('Avatar Component', () => {
  it('renders an image when src is provided', () => {
    const src = 'test-image.jpg';
    const alt = 'Test Avatar';
    render(<Avatar src={src} alt={alt} />);
    const imageElement = screen.getByRole('img', { name: alt });
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', src);
  });

  it('renders placeholder text when placeholderText is provided', () => {
    render(<Avatar placeholderText="Placeholder" />);
    expect(screen.getByText('Placeholder')).toBeInTheDocument();
  });

  it('applies the correct size class based on size prop', () => {
    for (const size of AvatarSizes) {
      const { unmount } = render(<Avatar size={size} src="test-image.jpg" />);
      const avatarElement = screen.getByRole('img').parentElement;
      expect(avatarElement).toHaveClass(AVATAR_SIZE_MAP[size]);
      unmount();
    }
  });

  it('applies online class when isOnline is true', () => {
    const { container } = render(<Avatar isOnline />);
    const avatarElement = container.firstChild;
    expect(avatarElement).toHaveClass('online');
  });

  it('applies offline class when isOffline is true', () => {
    const { container } = render(<Avatar isOffline />);
    const avatarElement = container.firstChild;
    expect(avatarElement).toHaveClass('offline');
  });

  it('applies both online and offline classes when both props are true (edge case)', () => {
    const { container } = render(<Avatar isOnline isOffline />);
    const avatarElement = container.firstChild;
    expect(avatarElement).toHaveClass('online offline');
  });

  it('applies ring-related classes when hasRing is true', () => {
    const { container } = render(<Avatar hasRing />);
    const innerDiv = container.querySelector('div > div > div');
    expect(innerDiv).toHaveClass(
      'ring-offset-base-100 rounded-full ring ring-offset-2',
    );
  });

  it('accepts and applies custom className', () => {
    const { container } = render(<Avatar className="custom-class" />);
    const avatarElement = container.firstChild;
    expect(avatarElement).toHaveClass('custom-class');
  });

  it('applies placeholder class when placeholderText is provided', () => {
    const { container } = render(<Avatar placeholderText="Placeholder" />);
    const avatarElement = container.firstChild;
    expect(avatarElement).toHaveClass('placeholder');
  });

  it('forwards other HTML attributes to the root element', () => {
    render(<Avatar data-testid="avatar-root" />);
    const avatarElement = screen.getByTestId('avatar-root');
    expect(avatarElement).toBeInTheDocument();
  });

  it('renders with custom shapeClassName', () => {
    const { container } = render(<Avatar shapeClassName="rounded-md" />);
    const innerDiv = container.querySelector('div > div > div');
    expect(innerDiv).toHaveClass('rounded-md');
  });

  it('renders both image and placeholder if both src and placeholderText are provided', () => {
    const src = 'test-image.jpg';
    const placeholderText = 'Placeholder';
    render(<Avatar src={src} placeholderText={placeholderText} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByText(placeholderText)).toBeInTheDocument();
  });
});
