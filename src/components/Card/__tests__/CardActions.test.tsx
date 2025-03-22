import { render } from '@testing-library/react';

import { CardActions } from '../CardActions';

describe('CardActions Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<CardActions />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('applies default classes', () => {
    const { container } = render(<CardActions />);
    expect(container.firstChild).toHaveClass('card-actions justify-end');
  });

  it('merges additional class names', () => {
    const { container } = render(<CardActions className="custom-class" />);
    expect(container.firstChild).toHaveClass(
      'card-actions justify-end custom-class',
    );
  });

  it('forwards additional props to the div', () => {
    const { container } = render(<CardActions data-testid="test-id" />);
    expect(container.firstChild).toHaveAttribute('data-testid', 'test-id');
  });
});
