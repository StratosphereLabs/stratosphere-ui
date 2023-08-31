import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormProvider from './FormProvider';
import { FormRadio, RadioOption } from '../FormRadio';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const options: RadioOption[] = [
  { id: 1, label: 'Option 1', value: 'option1' },
  { id: 2, label: 'Option 2', value: 'option2' },
];

describe('FormRadio', () => {
  it('renders radio buttons with the provided options', () => {
    render(
      <FormProvider defaultValues={{ radio: null }}>
        <FormRadio labelText="Test Radio" name="radio" options={options} />
      </FormProvider>,
    );
    options.forEach(option => {
      const radio = screen.getByLabelText(option.label);
      expect(radio).toBeInTheDocument();
      expect(radio).toHaveAttribute('value', option.value);
    });
  });

  it('sets the value of the selected radio button', async () => {
    const { rerender } = render(
      <FormProvider defaultValues={{ radio: null }}>
        <FormRadio name="radio" options={options} />
      </FormProvider>,
    );
    const option1 = screen.getByLabelText('Option 1');
    await userEvent.click(option1);
    expect(option1).toBeChecked();
    expect(option1).toHaveAttribute('value', 'option1');
    rerender(
      <FormProvider defaultValues={{ radio: null }}>
        <FormRadio name="radio" options={options} />
      </FormProvider>,
    );
    expect(screen.getByLabelText('Option 1')).toBeChecked();
  });

  it('renders an error message when an error is present', async () => {
    render(
      <FormProvider
        mode="onChange"
        defaultValues={{ radio: null }}
        resolver={zodResolver(
          z.object({ radio: z.string().min(10, 'Too short') }),
        )}
      >
        <FormRadio name="radio" options={options} />
      </FormProvider>,
    );
    await userEvent.click(screen.getByLabelText('Option 1'));
    await waitFor(() =>
      expect(screen.getByText('Too short')).toBeInTheDocument(),
    );
  });
});
