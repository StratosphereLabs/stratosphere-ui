import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  it('expands and collapses the content when the button is clicked', async () => {
    const { getByRole, queryByText } = render(<Disclosure {...defaultProps} />);
    expect(queryByText('Content')).not.toBeInTheDocument();

    const button = getByRole('button');
    await userEvent.click(button);
    expect(queryByText('Content')).toBeInTheDocument();

    await userEvent.click(button);
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

  it('renders the content when defaultOpen is true', () => {
    const { getByText } = render(<Disclosure {...defaultProps} defaultOpen />);
    expect(getByText('Content')).toBeInTheDocument();
  });
});
