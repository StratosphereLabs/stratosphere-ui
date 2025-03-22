import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { CARD_SIZES, Card } from '../Card';

describe('Card Component', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<Card />);
    expect(getByTestId('card')).toBeInTheDocument();
  });

  it('applies the border class when border prop is true', () => {
    const { getByTestId } = render(<Card border />);
    expect(getByTestId('card')).toHaveClass('card-border');
  });

  it('applies the dash class when dash prop is true', () => {
    const { getByTestId } = render(<Card dash />);
    expect(getByTestId('card')).toHaveClass('card-dash');
  });

  it('applies the imageFull class when imageFull prop is true', () => {
    const { getByTestId } = render(<Card imageFull />);
    expect(getByTestId('card')).toHaveClass('image-full');
  });

  it('applies the side class when side prop is true', () => {
    const { getByTestId } = render(<Card side />);
    expect(getByTestId('card')).toHaveClass('card-side');
  });

  it('applies the correct size class when size prop is provided', () => {
    CARD_SIZES.forEach(size => {
      const { getByTestId, unmount } = render(<Card size={size} />);
      expect(getByTestId('card')).toHaveClass(`card-${size}`);
      unmount();
    });
  });

  it('applies custom className', () => {
    const { getByTestId } = render(<Card className="custom-class" />);
    expect(getByTestId('card')).toHaveClass('custom-class');
  });

  it('spreads additional props onto the div', () => {
    const { getByTestId } = render(<Card data-testprop="test-value" />);
    expect(getByTestId('card')).toHaveAttribute('data-testprop', 'test-value');
  });
});
