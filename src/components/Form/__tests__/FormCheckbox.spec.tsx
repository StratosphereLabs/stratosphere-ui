import { render, screen } from '@testing-library/react';
import { FormCheckbox } from '../FormCheckbox';
import FormProvider from './FormProvider';

describe('FormCheckbox', () => {
  it('renders component', () => {
    const { container } = render(
      <FormProvider defaultValues={{ checkbox: false }}>
        <FormCheckbox name="checkbox" />
      </FormProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  it('renders the label and children', () => {
    const labelText = 'Agree to terms';
    const childrenText = 'I agree to the terms and conditions';
    render(
      <FormProvider defaultValues={{ checkbox: false }}>
        <FormCheckbox labelText={labelText} name="checkbox">
          <span>{childrenText}</span>
        </FormCheckbox>
      </FormProvider>,
    );
    expect(screen.getByText(labelText)).toBeInTheDocument();
    expect(screen.getByText(childrenText)).toBeInTheDocument();
  });

  it('renders an asterisk if isRequired is true', () => {
    const labelText = 'Agree to terms';
    render(
      <FormProvider defaultValues={{ checkbox: false }}>
        <FormCheckbox labelText={labelText} isRequired name="checkbox" />
      </FormProvider>,
    );
    expect(screen.getByText('*')).toBeInTheDocument();
  });
});
