import { render, screen } from '@testing-library/react';

import { FormRadioGroup } from '../FormRadioGroup';
import { FormRadioGroupOption } from '../FormRadioGroupOption';
import FormProvider from './FormProvider';

describe('FormRadioGroup', () => {
  const name = 'radio';
  const options = ['Option 1', 'Option 2', 'Option 3'];

  const defaultProps = {
    name,
    children: options.map(option => (
      <FormRadioGroupOption key={option} value={option}>
        {option}
      </FormRadioGroupOption>
    )),
  };

  it('renders the label when labelText is provided', () => {
    const labelText = 'Test Label Text';
    const { container } = render(
      <FormProvider defaultValues={{ radio: null }}>
        <FormRadioGroup {...defaultProps} labelText={labelText} />
      </FormProvider>,
    );
    expect(screen.getByText(labelText)).toBeInTheDocument();
    expect(container.querySelector('label')).toBeInTheDocument();
  });

  it('does not render the label when labelText is not provided', () => {
    const { container } = render(
      <FormProvider defaultValues={{ radio: null }}>
        <FormRadioGroup {...defaultProps} />
      </FormProvider>,
    );
    expect(container.querySelector('.label-text')).not.toBeInTheDocument();
  });

  it.skip('renders with the correct class name', () => {
    const className = 'testClassName';
    const { container } = render(
      <FormProvider defaultValues={{ radio: null }}>
        <FormRadioGroup {...defaultProps} className={className} />
      </FormProvider>,
    );
    expect(container.firstChild).toHaveClass(className);
  });

  it('renders with the correct value when a default value is provided', () => {
    const defaultValue = options[1];
    const { getByText } = render(
      <FormProvider defaultValues={{ radio: defaultValue }}>
        <FormRadioGroup {...defaultProps} />
      </FormProvider>,
    );
    expect(getByText(defaultValue)).toHaveClass('btn-active');
  });
});
