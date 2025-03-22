import { render } from '@testing-library/react';

import { CardBody } from '../CardBody';

describe('CardBody Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<CardBody />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('applies default class', () => {
    const { container } = render(<CardBody />);
    expect(container.firstChild).toHaveClass('card-body');
  });

  it('applies additional class names', () => {
    const { container } = render(<CardBody className="custom-class" />);
    expect(container.firstChild).toHaveClass('card-body');
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('spreads additional props', () => {
    const { getByTestId } = render(<CardBody data-testid="card-body" />);
    expect(getByTestId('card-body')).toBeInTheDocument();
  });
});
