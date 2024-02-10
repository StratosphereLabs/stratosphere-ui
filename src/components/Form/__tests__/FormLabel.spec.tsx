import { render, screen } from '@testing-library/react';
import { FormLabelText } from '../FormLabelText';

describe('FormLabelText', () => {
  it('renders the label text', () => {
    const labelText = 'Name';
    render(<FormLabelText>{labelText}</FormLabelText>);
    expect(screen.getByText(labelText)).toBeInTheDocument();
  });

  it('renders an asterisk if isRequired is true', () => {
    const labelText = 'Name';
    render(<FormLabelText isRequired>{labelText}</FormLabelText>);
    expect(screen.getByText('*')).toBeInTheDocument();
  });
});
