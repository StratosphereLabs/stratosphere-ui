import { render, fireEvent } from '@testing-library/react';
import { Disclosure } from '../Disclosure';

describe('Disclosure', () => {
  const defaultProps = {
    children: <div>Content</div>,
  };

  it('renders the button with the provided children', () => {
    const { getByRole } = render(
      <Disclosure {...defaultProps} buttonProps={{ children: 'Toggle' }} />,
    );
    expect(getByRole('button')).toHaveTextContent('Toggle');
  });

  it('expands and collapses the content when the button is clicked', () => {
    const { getByRole, queryByText } = render(<Disclosure {...defaultProps} />);
    expect(queryByText('Content')).not.toBeInTheDocument();

    const button = getByRole('button');
    fireEvent.click(button);
    expect(queryByText('Content')).toBeInTheDocument();

    fireEvent.click(button);
    expect(queryByText('Content')).not.toBeInTheDocument();
  });

  it('applies the provided className to the container element', () => {
    const { container } = render(
      <Disclosure {...defaultProps} className="custom-class" />,
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('applies the rounded class to the container element when rounded prop is true', () => {
    const { container } = render(<Disclosure {...defaultProps} rounded />);
    expect(container.firstChild).toHaveClass('rounded-box');
  });
});
