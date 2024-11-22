import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Alert, ALERT_COLORS, AlertProps } from '../Alert';

describe('Alert component', () => {
  it('renders the title correctly', () => {
    render(<Alert title="Test Alert" />);
    expect(screen.getByText('Test Alert')).toBeInTheDocument();
  });

  it('applies the correct color class', () => {
    for (const color of ALERT_COLORS) {
      const { unmount } = render(<Alert title="Color Test" color={color} />);
      expect(screen.getByRole('alert')).toHaveClass(`alert-${color}`);
      unmount();
    }
  });

  it('renders the description when provided', () => {
    render(
      <Alert title="Test Alert" description="This is a test description" />,
    );
    expect(screen.getByText('This is a test description')).toBeInTheDocument();
  });

  it('does not render the description when not provided', () => {
    render(<Alert title="Test Alert" />);
    expect(
      screen.queryByText('This is a test description'),
    ).not.toBeInTheDocument();
  });

  it('renders the icon if provided', () => {
    const MockIcon = () => <svg data-testid="mock-icon"></svg>;
    render(<Alert title="Test Alert" icon={MockIcon} />);
    expect(screen.getByTestId('mock-icon')).toBeInTheDocument();
  });

  it('does not render the icon if not provided', () => {
    render(<Alert title="Test Alert" />);
    expect(screen.queryByTestId('mock-icon')).not.toBeInTheDocument();
  });

  it('renders action buttons if provided', () => {
    const actionButtons: AlertProps['actionButtons'] = [
      { id: 'button-1', children: 'Button 1' },
      { id: 'button-2', children: 'Button 2' },
    ];
    render(<Alert title="Test Alert" actionButtons={actionButtons} />);
    expect(screen.getByText('Button 1')).toBeInTheDocument();
    expect(screen.getByText('Button 2')).toBeInTheDocument();
  });

  it('does not render action buttons if not provided', () => {
    render(<Alert title="Test Alert" />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Alert title="Test Alert" className="custom-class" />);
    expect(screen.getByRole('alert')).toHaveClass('custom-class');
  });

  it('forwards additional props to the container', () => {
    render(<Alert title="Test Alert" data-testid="alert" />);
    expect(screen.getByTestId('alert')).toBeInTheDocument();
  });
});
