import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { LINK_COLORS, Link } from '../Link';

describe('Link Component', () => {
  it('renders with default class', () => {
    const { container } = render(<Link href="#">Test Link</Link>);
    const anchor = container.querySelector('a');
    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveClass('link');
  });

  it('applies custom className', () => {
    const { container } = render(
      <Link href="#" className="custom-class">
        Test Link
      </Link>,
    );
    const anchor = container.querySelector('a');
    expect(anchor).toHaveClass('custom-class');
  });

  it('applies color class when specified', () => {
    LINK_COLORS.forEach(color => {
      const { container, unmount } = render(
        <Link href="#" color={color}>
          Test Link
        </Link>,
      );
      const anchor = container.querySelector('a');
      expect(anchor).toHaveClass(`link-${color}`);
      unmount();
    });
  });

  it('applies hover class when hover is true', () => {
    const { container } = render(
      <Link href="#" hover>
        Test Link
      </Link>,
    );
    const anchor = container.querySelector('a');
    expect(anchor).toHaveClass('link-hover');
  });

  it('renders with correct href', () => {
    const { getByRole } = render(<Link href="/test">Test Link</Link>);
    const anchor = getByRole('link');
    expect(anchor).toHaveAttribute('href', '/test');
  });

  it('handles click events', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    const { getByText } = render(
      <Link href="#" onClick={handleClick}>
        Test Link
      </Link>,
    );
    const anchor = getByText('Test Link');
    await user.click(anchor);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
