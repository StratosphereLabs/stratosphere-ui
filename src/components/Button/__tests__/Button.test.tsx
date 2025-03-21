import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { BUTTON_COLORS, BUTTON_SHAPES, BUTTON_SIZES, Button } from '../Button';

describe('Button component', () => {
  it('renders the button with default properties', () => {
    render(<Button>Click Me</Button>);
    const button = screen.getByText('Click Me');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('btn');
    expect(button).toHaveAttribute('type', 'button');
  });

  it('applies the color class based on the "color" prop', () => {
    for (const color of BUTTON_COLORS) {
      const { unmount } = render(<Button color={color}>Button</Button>);
      const button = screen.getByText('Button');
      expect(button).toHaveClass(`btn-${color}`);
      unmount();
    }
  });

  it('applies the size class based on the "size" prop', () => {
    for (const size of BUTTON_SIZES) {
      const { unmount } = render(<Button size={size}>Button</Button>);
      const button = screen.getByText('Button');
      expect(button).toHaveClass(`btn-${size}`);
      unmount();
    }
  });

  it('applies the shape class based on the "shape" prop', () => {
    for (const shape of BUTTON_SHAPES) {
      const { unmount } = render(<Button shape={shape}>Button</Button>);
      const button = screen.getByText('Button');
      expect(button).toHaveClass(`btn-${shape}`);
      unmount();
    }
  });

  it('renders as a link element if "as" is set to "a"', () => {
    render(<Button as="a">Link</Button>);
    const link = screen.getByText('Link');
    expect(link.tagName).toBe('A');
  });

  it('renders the button as disabled when "disabled" prop is true', () => {
    render(<Button disabled>Disabled Button</Button>);
    const button = screen.getByText('Disabled Button');
    expect(button).toHaveClass('btn-disabled');
  });

  it('renders the button as "loading" with a spinner', () => {
    render(<Button loading>Loading</Button>);
    expect(
      screen.getByRole('button', { name: 'Loading' }).firstChild,
    ).toHaveClass('loading-spinner');
  });

  it('applies additional classes based on props', () => {
    render(
      <Button
        block
        glass
        wide
        noAnimation
        outline
        active
        className="custom-class"
      >
        Custom Button
      </Button>,
    );
    const button = screen.getByText('Custom Button');
    expect(button).toHaveClass(
      'btn',
      'btn-block',
      'glass',
      'btn-wide',
      'no-animation',
      'btn-outline',
      'btn-active',
      'custom-class',
    );
  });

  it('calls onClick handler when clicked', async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Clickable Button</Button>);
    const button = screen.getByText('Clickable Button');
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalled();
  });
});
