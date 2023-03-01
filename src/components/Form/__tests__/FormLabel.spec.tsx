import { render, screen } from '@testing-library/react';
import { FormLabel } from '../FormLabel';

describe('FormLabel', () => {
  it('renders the label text', () => {
    const labelText = 'Name';
    render(<FormLabel>{labelText}</FormLabel>);
    expect(screen.getByText(labelText)).toBeInTheDocument();
  });

  it('renders an asterisk if isRequired is true', () => {
    const labelText = 'Name';
    render(<FormLabel isRequired>{labelText}</FormLabel>);
    expect(screen.getByText('*')).toBeInTheDocument();
  });
});
