import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { FormToggleSwitch, FormToggleSwitchProps } from '../FormToggleSwitch';
import FormProvider from './FormProvider';

const defaultProps: FormToggleSwitchProps<{ testField: boolean }> = {
  name: 'testField',
  labelText: 'Test Field',
  isRequired: false,
  controllerProps: {},
  onChange: vi.fn(),
};

describe('FormToggleSwitch', () => {
  it('should render the component with the correct label text', () => {
    render(
      <FormProvider defaultValues={{ testField: null }}>
        <FormToggleSwitch {...defaultProps} />
      </FormProvider>,
    );
    expect(screen.getByText('Test Field')).toBeInTheDocument();
  });

  it('should call onChange prop when the toggle is clicked', async () => {
    render(
      <FormProvider defaultValues={{ testField: null }}>
        <FormToggleSwitch {...defaultProps} />
      </FormProvider>,
    );
    const toggle = screen.getByRole('checkbox');
    await userEvent.click(toggle);
    expect(defaultProps.onChange).toHaveBeenCalled();
  });

  it('should render any children passed as props', () => {
    render(
      <FormProvider defaultValues={{ testField: null }}>
        <FormToggleSwitch {...defaultProps} labelText={undefined}>
          <div data-testid="child">Test Child</div>
        </FormToggleSwitch>
      </FormProvider>,
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });
});
