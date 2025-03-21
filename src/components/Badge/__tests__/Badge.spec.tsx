import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { BADGE_COLORS, BADGE_SIZES, Badge } from '../Badge';

describe('Badge Component', () => {
  it('renders children content', () => {
    render(<Badge>Test Badge</Badge>);
    expect(screen.getByText('Test Badge')).toBeInTheDocument();
  });

  it('applies the correct color class', () => {
    for (const color of BADGE_COLORS) {
      const { unmount } = render(<Badge color={color}>Color Badge</Badge>);
      const badgeElement = screen.getByText('Color Badge').parentElement;
      expect(badgeElement).toHaveClass(`badge-${color}`);
      unmount();
    }
  });

  it('applies the correct size class', () => {
    for (const size of BADGE_SIZES) {
      const { unmount } = render(<Badge size={size}>Size Badge</Badge>);
      const badgeElement = screen.getByText('Size Badge').parentElement;
      expect(badgeElement).toHaveClass(`badge-${size}`);
      unmount();
    }
  });

  it('renders the icon when provided', () => {
    const MockIcon = () => <svg data-testid="mock-icon" />;
    render(<Badge icon={MockIcon}>Icon Badge</Badge>);
    expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
  });

  it('adds the "badge-outline" class when outline is true', () => {
    render(<Badge outline>Outline Badge</Badge>);
    const badgeElement = screen.getByText('Outline Badge').parentElement;
    expect(badgeElement).toHaveClass('badge-outline');
  });

  it('renders a dismiss button when dismissable is true', () => {
    render(<Badge dismissable>Dismissable Badge</Badge>);
    const dismissButton = screen.getByText('Remove badge');
    expect(dismissButton).toBeInTheDocument();
    expect(dismissButton.parentElement?.parentElement).toHaveClass(
      'badge pr-0',
    );
  });

  it('triggers onDismiss callback when dismiss button is clicked', () => {
    const onDismissMock = vi.fn();
    render(
      <Badge dismissable onDismiss={onDismissMock}>
        Dismissable Badge
      </Badge>,
    );
    const dismissButton = screen.getByText('Remove badge');
    fireEvent.click(dismissButton);
    expect(onDismissMock).toHaveBeenCalledTimes(1);
  });

  it('prevents event propagation on dismiss button click', () => {
    const onDismissMock = vi.fn();
    const parentClickHandler = vi.fn();
    render(
      <div onClick={parentClickHandler}>
        <Badge dismissable onDismiss={onDismissMock}>
          Dismissable Badge
        </Badge>
      </div>,
    );
    const dismissButton = screen.getByText('Remove badge');
    fireEvent.click(dismissButton);
    expect(parentClickHandler).not.toHaveBeenCalled();
  });

  it('stops event propagation on onKeyDown in dismiss button', () => {
    const onDismissMock = vi.fn();
    const parentKeyDownHandler = vi.fn();
    render(
      <div onKeyDown={parentKeyDownHandler}>
        <Badge dismissable onDismiss={onDismissMock}>
          Dismissable Badge
        </Badge>
      </div>,
    );
    const dismissButton = screen.getByText('Remove badge');
    fireEvent.keyDown(dismissButton, {
      key: 'Enter',
      code: 'Enter',
      charCode: 13,
    });
    expect(parentKeyDownHandler).not.toHaveBeenCalled();
  });

  it('accepts and applies additional custom classes', () => {
    render(<Badge className="custom-class">Custom Badge</Badge>);
    const badgeElement = screen.getByText('Custom Badge').parentElement;
    expect(badgeElement).toHaveClass('custom-class');
  });

  it('forwards other HTML props to the root element', () => {
    render(<Badge data-testid="badge-root">Prop Test Badge</Badge>);
    const badgeElement = screen.getByTestId('badge-root');
    expect(badgeElement).toBeInTheDocument();
  });
});
