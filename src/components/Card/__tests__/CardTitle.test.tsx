import { render } from '@testing-library/react';

import { CardTitle } from '../CardTitle';

describe('CardTitle Component', () => {
  it('renders the component with default class', () => {
    const { container } = render(<CardTitle>Title</CardTitle>);
    const heading = container.querySelector('h2');
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('card-title');
  });

  it('accepts and applies additional class names', () => {
    const { container } = render(
      <CardTitle className="custom-class">Title</CardTitle>,
    );
    const heading = container.querySelector('h2');
    expect(heading).toHaveClass('card-title');
    expect(heading).toHaveClass('custom-class');
  });

  it('renders children correctly', () => {
    const { getByText } = render(<CardTitle>Test Title</CardTitle>);
    expect(getByText('Test Title')).toBeInTheDocument();
  });

  it('passes additional props to the element', () => {
    const { getByText } = render(
      <CardTitle data-testid="card-title">Test</CardTitle>,
    );
    expect(getByText('Test')).toHaveAttribute('data-testid', 'card-title');
  });
});
