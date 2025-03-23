import { zodResolver } from '@hookform/resolvers/zod';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { z } from 'zod';

import { FormRadio, RadioOption } from '../FormRadio';
import FormProvider from './FormProvider';

const options: RadioOption[] = [
  { id: 1, label: 'Option 1', value: 'option1' },
  { id: 2, label: 'Option 2', value: 'option2' },
];

describe('FormRadio', () => {
  it('renders radio buttons with the provided options', () => {
    const { container } = render(
      <FormProvider defaultValues={{ radio: null }}>
        <FormRadio labelText="Test Radio" name="radio" options={options} />
      </FormProvider>,
    );
    expect(container).toMatchSnapshot();
  });

  it('sets the value of the selected radio button', async () => {
    const { rerender } = render(
      <FormProvider defaultValues={{ radio: null }}>
        <FormRadio name="radio" options={options} />
      </FormProvider>,
    );
    const option1 = screen.getAllByRole('radio')[0];
    await userEvent.click(option1);
    expect(option1).toBeChecked();
    expect(option1).toHaveAttribute('value', 'option1');
    rerender(
      <FormProvider defaultValues={{ radio: null }}>
        <FormRadio name="radio" options={options} />
      </FormProvider>,
    );
    expect(screen.getAllByRole('radio')[0]).toBeChecked();
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
    await userEvent.click(screen.getAllByRole('radio')[0]);
    await waitFor(() =>
      expect(screen.getByText('Too short')).toBeInTheDocument(),
    );
  });
});
