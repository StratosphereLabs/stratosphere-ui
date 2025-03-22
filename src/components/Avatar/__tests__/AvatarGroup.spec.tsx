import { render, screen } from '@testing-library/react';

import { Avatar } from '../Avatar';
import { AvatarGroup } from '../AvatarGroup';

describe('AvatarGroup Component', () => {
  it('renders without crashing', () => {
    render(<AvatarGroup />);
    expect(screen.getByRole('group')).toBeInTheDocument();
  });

  it('renders child avatars', () => {
    render(
      <AvatarGroup>
        <Avatar src="test1.jpg" />
        <Avatar src="test2.jpg" />
      </AvatarGroup>,
    );
    expect(screen.getAllByRole('img')).toHaveLength(2);
  });

  it('applies spacing class based on space prop', () => {
    render(<AvatarGroup space={4} />);
    expect(screen.getByRole('group')).toHaveClass('-space-x-4');
  });

  it('renders remaining count avatar when remainingCount is provided', () => {
    render(<AvatarGroup remainingCount={5} />);
    expect(screen.getByText('+5')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<AvatarGroup className="custom-class" />);
    expect(screen.getByRole('group')).toHaveClass('custom-class');
  });
});
