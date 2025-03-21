import { render } from '@testing-library/react';

import { FormError } from '../FormError';

describe('FormError', () => {
  test('renders error message', () => {
    const errorMessage = 'This field is required';
    const { getByText } = render(<FormError>{errorMessage}</FormError>);
    expect(getByText(errorMessage)).toBeInTheDocument();
  });

  test('applies custom class name', () => {
    const { container } = render(<FormError className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
