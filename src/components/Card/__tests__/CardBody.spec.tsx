import { render, screen } from '@testing-library/react';
import classNames from 'classnames';
import { describe, it, expect } from 'vitest';
import { CardBody } from '../CardBody';

describe('CardBody', () => {
  it('renders a div with the "card-body" class', () => {
    render(<CardBody />);
    const divElement = screen.getAllByRole('generic')[1]; // Default role for <div>
    expect(divElement).toHaveClass('card-body');
  });

  it('appends additional classes passed through className prop', () => {
    render(<CardBody className="custom-class" />);
    const divElement = screen.getAllByRole('generic')[1];
    expect(divElement).toHaveClass('card-body');
    expect(divElement).toHaveClass('custom-class');
  });

  it('passes other props correctly to the underlying div', () => {
    render(<CardBody data-testid="custom-id" />);
    const divElement = screen.getByTestId('custom-id');
    expect(divElement).toBeInTheDocument();
  });

  it('merges className correctly using classNames library', () => {
    const customClass = 'custom-class';
    const expectedClassName = classNames('card-body', customClass);
    render(<CardBody className={customClass} />);
    const divElement = screen.getAllByRole('generic')[1];
    expect(divElement).toHaveClass(...expectedClassName.split(' '));
  });

  it('renders children correctly', () => {
    render(<CardBody>Test Content</CardBody>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
