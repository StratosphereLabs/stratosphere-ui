import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { CardActions } from '../CardActions';

describe('CardActions Component', () => {
  it('renders correctly with default classes', () => {
    const { container } = render(<CardActions />);
    const div = container.firstChild as HTMLDivElement;

    expect(div).toBeInTheDocument();
    expect(div).toHaveClass('card-actions justify-end');
  });

  it('appends custom className to default classes', () => {
    const { container } = render(<CardActions className="custom-class" />);
    const div = container.firstChild as HTMLDivElement;

    expect(div).toHaveClass('card-actions justify-end custom-class');
  });

  it('spreads additional props onto the element', () => {
    const { container } = render(
      <CardActions id="test-id" data-test="test-data" />,
    );
    const div = container.firstChild as HTMLDivElement;

    expect(div).toHaveAttribute('id', 'test-id');
    expect(div).toHaveAttribute('data-test', 'test-data');
  });

  it('renders children correctly', () => {
    const { getByText } = render(
      <CardActions>
        <span>Child Content</span>
      </CardActions>,
    );

    expect(getByText('Child Content')).toBeInTheDocument();
  });
});
