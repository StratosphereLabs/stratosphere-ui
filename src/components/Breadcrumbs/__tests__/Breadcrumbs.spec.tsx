import { fireEvent, render, screen } from '@testing-library/react';
import { FC } from 'react';
import { describe, it, expect } from 'vitest';
import { Breadcrumbs, BreadcrumbsProps } from '../Breadcrumbs';

const MockIcon: FC = () => <svg data-testid="mock-icon">Mock Icon</svg>;

describe('Breadcrumbs', () => {
  const items: BreadcrumbsProps['items'] = [
    { id: '1', children: 'Home', href: '#' },
    { id: '2', children: 'About', onClick: vi.fn() },
    { id: '3', children: 'Contact', icon: MockIcon },
  ];

  it('renders breadcrumbs container with default class', () => {
    render(<Breadcrumbs items={items} />);
    const container = screen.getByRole('list').parentElement;
    expect(container).toHaveClass('breadcrumbs');
  });

  it('renders all breadcrumb items', () => {
    render(<Breadcrumbs items={items} />);
    items.forEach(item => {
      expect(screen.getByText(item.children as string)).toBeInTheDocument();
    });
  });

  it('renders a link when href is provided', () => {
    render(<Breadcrumbs items={items} />);
    const link = screen.getByText('Home');
    expect(link).toHaveAttribute('href', '#');
  });

  it('handles onClick events', () => {
    render(<Breadcrumbs items={items} />);
    const clickableItem = screen.getByText('About');
    fireEvent.click(clickableItem);
    expect(items[1].onClick).toHaveBeenCalled();
  });

  it('renders an icon when provided', () => {
    render(<Breadcrumbs items={items} />);
    const icon = screen.getByTestId('mock-icon');
    expect(icon).toBeInTheDocument();
  });

  it('applies custom class names to breadcrumb items', () => {
    const customItems = [
      { id: '1', children: 'Custom Item', className: 'custom-class' },
    ];
    render(<Breadcrumbs items={customItems} />);
    const item = screen.getByText('Custom Item');
    expect(item.parentElement).toHaveClass('custom-class');
  });

  it('renders child elements without href or onClick as plain text', () => {
    const staticItem = { id: '1', children: 'Static Item' };
    render(<Breadcrumbs items={[staticItem]} />);
    const listItem = screen.getByText('Static Item');
    expect(listItem.tagName).toBe('SPAN');
  });

  it('applies additional props to the container', () => {
    render(<Breadcrumbs items={items} data-testid="breadcrumbs-container" />);
    const container = screen.getByTestId('breadcrumbs-container');
    expect(container).toBeInTheDocument();
  });
});
