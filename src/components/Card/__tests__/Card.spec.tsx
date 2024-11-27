import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Card } from '../Card';

describe('Card Component', () => {
  it('renders without crashing', () => {
    render(<Card />);
    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
  });

  it('applies the "card" class by default', () => {
    render(<Card />);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('card');
  });

  it('applies the "card-bordered" class when bordered is true', () => {
    render(<Card bordered />);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('card-bordered');
  });

  it('applies the "card-compact" class when compact is true', () => {
    render(<Card compact />);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('card-compact');
  });

  it('applies the "image-full" class when imageFull is true', () => {
    render(<Card imageFull />);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('image-full');
  });

  it('applies the "card-normal" class when normal is true', () => {
    render(<Card normal />);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('card-normal');
  });

  it('applies the "card-side" class when side is true', () => {
    render(<Card side />);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('card-side');
  });

  it('combines custom className with default and conditional classes', () => {
    const customClass = 'custom-class';
    render(<Card bordered className={customClass} />);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('card');
    expect(card).toHaveClass('card-bordered');
    expect(card).toHaveClass(customClass);
  });

  it('passes other props to the underlying div element', () => {
    render(<Card id="custom-id" data-testid="custom-test-id" />);
    const card = screen.getByTestId('custom-test-id');
    expect(card).toHaveAttribute('id', 'custom-id');
  });
});
