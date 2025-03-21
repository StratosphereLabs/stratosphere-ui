import { fireEvent, render, screen } from '@testing-library/react';

import { ALERT_COLORS, Alert, AlertProps } from '../Alert';

const setup = (props: Partial<AlertProps> = {}) => {
  return render(<Alert title="Test Alert" {...props} />);
};

describe('Alert Component', () => {
  test('renders the title correctly', () => {
    setup();
    expect(screen.getByText('Test Alert')).toBeInTheDocument();
  });

  test('renders the description if provided', () => {
    setup({ description: 'This is a test description' });
    expect(screen.getByText('This is a test description')).toBeInTheDocument();
  });

  test('applies color classes correctly', () => {
    ALERT_COLORS.forEach(color => {
      const { container } = setup({ color });
      expect(container.firstChild).toHaveClass(`alert-${color}`);
    });
  });

  test('renders an icon if provided', () => {
    const TestIcon = () => <svg data-testid="test-icon" />;
    setup({ icon: TestIcon });
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
  });

  test('renders action buttons if provided', () => {
    const actionButtons = [
      { id: 'btn1', label: 'Action 1', onClick: vi.fn() },
      { id: 'btn2', label: 'Action 2', onClick: vi.fn() },
    ];
    setup({ actionButtons });
    expect(screen.getByLabelText('Action 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Action 2')).toBeInTheDocument();
  });

  test('triggers onDismiss when dismiss button is clicked', () => {
    const onDismiss = vi.fn();
    setup({ onDismiss });
    fireEvent.click(screen.getByText('✕'));
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  test('applies additional class names', () => {
    const { container } = setup({ className: 'custom-class' });
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
