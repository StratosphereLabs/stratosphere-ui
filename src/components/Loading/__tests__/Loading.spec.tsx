import { render } from '@testing-library/react';

import { LOADING_SHAPES, LOADING_SIZES, Loading } from '../Loading';

describe('Loading Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Loading />);
    expect(container.firstChild).toBeInTheDocument();
    expect(container.firstChild).toHaveClass('loading');
  });

  it('applies shape classes correctly', () => {
    LOADING_SHAPES.forEach(shape => {
      const { container, unmount } = render(<Loading shape={shape} />);
      expect(container.firstChild).toHaveClass(`loading-${shape}`);
      unmount();
    });
  });

  it('applies size classes correctly', () => {
    LOADING_SIZES.forEach(size => {
      const { container, unmount } = render(<Loading size={size} />);
      expect(container.firstChild).toHaveClass(`loading-${size}`);
      unmount();
    });
  });

  it('accepts additional class names', () => {
    const { container } = render(<Loading className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('forwards additional props', () => {
    const { getByTestId } = render(<Loading data-testid="loading-element" />);
    expect(getByTestId('loading-element')).toBeInTheDocument();
  });
});
