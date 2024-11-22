import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AvatarGroup } from '../AvatarGroup';

describe('AvatarGroup Component', () => {
  it('renders a div with the "avatar-group" class', () => {
    render(<AvatarGroup />);
    const groupElement = screen.getByRole('group', { hidden: true });
    expect(groupElement).toHaveClass('avatar-group');
  });

  it('applies additional custom classes passed via the className prop', () => {
    render(<AvatarGroup className="custom-class" />);
    const groupElement = screen.getByRole('group', { hidden: true });
    expect(groupElement).toHaveClass('avatar-group custom-class');
  });

  it('forwards other HTML attributes to the root element', () => {
    render(<AvatarGroup data-testid="avatar-group" />);
    const groupElement = screen.getByTestId('avatar-group');
    expect(groupElement).toBeInTheDocument();
  });

  it('renders child components passed as children', () => {
    render(
      <AvatarGroup>
        <div data-testid="child">Child Content</div>
      </AvatarGroup>,
    );
    const childElement = screen.getByTestId('child');
    expect(childElement).toBeInTheDocument();
    expect(childElement).toHaveTextContent('Child Content');
  });
});
