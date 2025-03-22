import { fireEvent, render, screen } from '@testing-library/react';
import { FC } from 'react';

import { ButtonArray, ButtonOptions } from '../ButtonArray';

const MockIcon: FC = () => <svg data-testid="mock-icon" />;

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

describe('ButtonArray Component', () => {
  window.ResizeObserver = ResizeObserver;

  const buttonOptions: ButtonOptions[] = [
    {
      key: 'button1',
      icon: MockIcon,
      onClick: vi.fn(),
      menuText: 'Button 1',
    },
    {
      key: 'button2',
      icon: MockIcon,
      onClick: vi.fn(),
      menuText: 'Button 2',
    },
  ];

  test('renders buttons when collapseAt is undefined', () => {
    render(<ButtonArray buttonOptions={buttonOptions} />);

    expect(screen.getByText('Button 1')).toBeInTheDocument();
    expect(screen.getByText('Button 2')).toBeInTheDocument();
  });

  test('calls onClick when button is clicked', () => {
    render(<ButtonArray buttonOptions={buttonOptions} />);

    const button1 = screen.getByText('Button 1');
    fireEvent.click(button1);

    expect(buttonOptions[0].onClick).toHaveBeenCalled();
  });

  test('renders tooltips when withTooltips is true', () => {
    render(<ButtonArray buttonOptions={buttonOptions} withTooltips />);

    expect(screen.getByText('Button 1')).toBeInTheDocument();
    expect(screen.getByText('Button 2')).toBeInTheDocument();
  });

  test('renders dropdown when collapseAt is set', () => {
    render(<ButtonArray buttonOptions={buttonOptions} collapseAt="sm" />);

    expect(screen.getByText('Actions Menu')).toBeInTheDocument();
  });

  test('dropdown button click triggers menu options', () => {
    render(<ButtonArray buttonOptions={buttonOptions} collapseAt="sm" />);

    fireEvent.click(screen.getByText('Actions Menu'));
    expect(screen.getAllByText('Button 1')[1]).toBeInTheDocument();
    expect(screen.getAllByText('Button 2')[1]).toBeInTheDocument();
  });
});
