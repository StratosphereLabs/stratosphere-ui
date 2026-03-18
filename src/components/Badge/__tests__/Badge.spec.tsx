import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';

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

  it('stops event propagation and calls onDismiss on touchEnd', () => {
    const onDismissMock = vi.fn();
    const parentTouchEndHandler = vi.fn();
    render(
      <div onTouchEnd={parentTouchEndHandler}>
        <Badge dismissable onDismiss={onDismissMock}>
          Dismissable Badge
        </Badge>
      </div>,
    );
    const dismissButton = screen.getByText('Remove badge');
    fireEvent.touchEnd(dismissButton);
    expect(onDismissMock).toHaveBeenCalledTimes(1);
    expect(parentTouchEndHandler).not.toHaveBeenCalled();
  });

  it('applies dash class when dash is true', () => {
    render(<Badge dash>Dash Test</Badge>);
    expect(screen.getByText('Dash Test').parentElement).toHaveClass(
      'badge-dash',
    );
  });

  it('applies outline class when outline is true', () => {
    render(<Badge outline>Outline Test</Badge>);
    expect(screen.getByText('Outline Test').parentElement).toHaveClass(
      'badge-outline',
    );
  });

  it('applies soft class when soft is true', () => {
    render(<Badge soft>Soft Test</Badge>);
    expect(screen.getByText('Soft Test').parentElement).toHaveClass(
      'badge-soft',
    );
  });
});
