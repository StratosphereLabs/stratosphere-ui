import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CardTitle } from '../CardTitle';

describe('CardTitle Component', () => {
  it('renders the default title with the "card-title" class', () => {
    render(<CardTitle>Test Title</CardTitle>);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('card-title');
    expect(heading).toHaveTextContent('Test Title');
  });

  it('appends additional classes passed through the "className" prop', () => {
    render(<CardTitle className="extra-class">Styled Title</CardTitle>);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveClass('card-title');
    expect(heading).toHaveClass('extra-class');
  });

  it('passes additional props to the underlying <h2> element', () => {
    render(
      <CardTitle id="test-id" data-testid="card-title">
        Props Test
      </CardTitle>,
    );
    const heading = screen.getByTestId('card-title');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveAttribute('id', 'test-id');
    expect(heading).toHaveTextContent('Props Test');
  });

  it('renders as empty if no children are provided', () => {
    render(<CardTitle />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toBeEmptyDOMElement();
  });
});
