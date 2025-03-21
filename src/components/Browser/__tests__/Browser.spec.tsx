import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Browser } from '../Browser';

describe('Browser Component', () => {
  it('renders without crashing', () => {
    render(<Browser />);
    expect(
      screen.getByText('https://ui.stratospherelabs.io'),
    ).toBeInTheDocument();
  });

  it('applies the provided className to the root div', () => {
    const customClass = 'custom-class';
    render(<Browser className={customClass} />);
    const rootDiv = screen.getAllByRole('generic')[1];
    expect(rootDiv).toHaveClass(customClass);
  });

  it('renders the provided browserUrl in the toolbar', () => {
    const testUrl = 'https://example.com';
    render(<Browser browserUrl={testUrl} />);
    expect(screen.getByText(testUrl)).toBeInTheDocument();
  });

  it('renders children inside the content area', () => {
    render(<Browser>Test Content</Browser>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies the provided contentClassName to the content area', () => {
    const contentClass = 'content-class';
    render(<Browser contentClassName={contentClass}>Test Content</Browser>);
    const contentDiv = screen.getByText('Test Content');
    expect(contentDiv).toHaveClass(contentClass);
  });

  it('applies the provided searchInputClassName to the toolbar input area', () => {
    const searchClass = 'search-input-class';
    render(<Browser searchInputClassName={searchClass} />);
    const toolbarInput = screen.getByText('https://ui.stratospherelabs.io');
    expect(toolbarInput).toHaveClass(searchClass);
  });

  it('forwards other props to the root div', () => {
    const testId = 'test-browser';
    render(<Browser data-testid={testId} />);
    const rootDiv = screen.getByTestId(testId);
    expect(rootDiv).toBeInTheDocument();
  });

  it('handles missing browserUrl gracefully', () => {
    render(<Browser />);
    expect(
      screen.getByText('https://ui.stratospherelabs.io'),
    ).toBeInTheDocument();
  });
});
