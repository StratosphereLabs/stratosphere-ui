import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FieldValues, useWatch } from 'react-hook-form';
import { afterEach, beforeEach, vi } from 'vitest';

import FormProvider from '../../Form/__tests__/FormProvider';
import { DatePicker, DatePickerProps } from '../DatePicker';

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

interface FormValues extends FieldValues {
  fromDate: string;
  month: string;
  singleDate: string;
  toDate: string;
}

const DEFAULT_VALUES: FormValues = {
  fromDate: '',
  month: '',
  singleDate: '',
  toDate: '',
};

/** Renders the current form state so assertions can read it from the DOM. */
const FormValuesOutput = () => {
  const values = useWatch<FormValues>();
  return <output>{JSON.stringify(values)}</output>;
};

const renderComponent = (
  props: Partial<DatePickerProps<FormValues>> = {},
  defaultValues: Partial<FormValues> = {},
) =>
  render(
    <FormProvider<FormValues>
      defaultValues={{ ...DEFAULT_VALUES, ...defaultValues }}
    >
      <DatePicker<FormValues> locale="en-US" name="singleDate" {...props} />
      <FormValuesOutput />
    </FormProvider>,
  );

const getFormValues = (): FormValues =>
  JSON.parse(screen.getByRole('status').textContent ?? '{}') as FormValues;

/**
 * The popover trigger is the only button with `aria-expanded`, which keeps it
 * distinguishable from the calendar buttons while the calendar is open.
 */
const getTrigger = (isOpen = false): HTMLElement =>
  screen.getByRole('button', { expanded: isOpen });

const openCalendar = async (
  user: ReturnType<typeof userEvent.setup>,
): Promise<void> => {
  await user.click(getTrigger());
  expect(await screen.findByRole('grid')).toBeInTheDocument();
};

describe('DatePicker', () => {
  window.ResizeObserver = ResizeObserver;

  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    vi.setSystemTime(new Date(2013, 7, 12, 12));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders the placeholder for each mode', () => {
    const { unmount } = renderComponent();
    expect(getTrigger()).toHaveTextContent('Select date');
    unmount();
    renderComponent({ mode: 'month' });
    expect(getTrigger()).toHaveTextContent('Select month');
  });

  it('renders a custom placeholder and label text', () => {
    renderComponent({ labelText: 'Departure Date', placeholder: 'Any date' });
    expect(screen.getByText('Departure Date')).toBeInTheDocument();
    expect(getTrigger()).toHaveTextContent('Any date');
  });

  it('renders the current value as text', () => {
    renderComponent({}, { singleDate: '2013-08-12' });
    expect(getTrigger()).toHaveTextContent('Aug 12, 2013');
  });

  it('does not open the calendar when disabled', async () => {
    const user = userEvent.setup();
    renderComponent({ disabled: true });
    await user.click(getTrigger());
    expect(screen.queryByRole('grid')).not.toBeInTheDocument();
  });

  it('selects a single date and closes the calendar', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    renderComponent({ onChange }, { singleDate: '2013-08-12' });
    await openCalendar(user);
    await user.click(screen.getByRole('button', { name: 'August 20, 2013' }));
    expect(getFormValues().singleDate).toBe('2013-08-20');
    expect(getTrigger()).toHaveTextContent('Aug 20, 2013');
    expect(onChange).toHaveBeenCalledTimes(1);
    await waitFor(() =>
      expect(screen.queryByRole('grid')).not.toBeInTheDocument(),
    );
  });

  it('stores Date objects when valueMode is date', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    renderComponent({ onChange, valueMode: 'date' });
    await openCalendar(user);
    await user.click(screen.getByRole('button', { name: 'August 20, 2013' }));
    expect(onChange).toHaveBeenCalledWith(new Date(2013, 7, 20));
    expect(getFormValues().singleDate).toBe(
      new Date(2013, 7, 20).toISOString(),
    );
  });

  it('selects a month as a yyyy-MM value', async () => {
    const user = userEvent.setup();
    renderComponent({ mode: 'month', name: 'month' }, { month: '2013-08' });
    expect(getTrigger()).toHaveTextContent('Aug 2013');
    await openCalendar(user);
    await user.click(screen.getByRole('button', { name: 'March 2013' }));
    expect(getFormValues().month).toBe('2013-03');
    expect(getTrigger()).toHaveTextContent('Mar 2013');
  });

  it('writes a range to two separate fields', async () => {
    const user = userEvent.setup();
    renderComponent({
      endName: 'toDate',
      mode: 'range',
      name: 'fromDate',
    });
    await openCalendar(user);
    await user.click(screen.getByRole('button', { name: 'August 12, 2013' }));
    expect(getFormValues()).toMatchObject({
      fromDate: '2013-08-12',
      toDate: '',
    });
    expect(screen.getByRole('grid')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'August 20, 2013' }));
    expect(getFormValues()).toMatchObject({
      fromDate: '2013-08-12',
      toDate: '2013-08-20',
    });
    expect(getTrigger()).toHaveTextContent('Aug 12, 2013 – Aug 20, 2013');
    await waitFor(() =>
      expect(screen.queryByRole('grid')).not.toBeInTheDocument(),
    );
  });

  it('writes a range as an object when endName is omitted', async () => {
    const user = userEvent.setup();
    renderComponent({ mode: 'range', name: 'singleDate' });
    await openCalendar(user);
    await user.click(screen.getByRole('button', { name: 'August 12, 2013' }));
    await user.click(screen.getByRole('button', { name: 'August 20, 2013' }));
    expect(getFormValues().singleDate).toEqual({
      from: '2013-08-12',
      to: '2013-08-20',
    });
  });

  it('reads a range from two separate fields', () => {
    renderComponent(
      { endName: 'toDate', mode: 'range', name: 'fromDate' },
      { fromDate: '2013-08-12', toDate: '2013-08-20' },
    );
    expect(getTrigger()).toHaveTextContent('Aug 12, 2013 – Aug 20, 2013');
  });

  it('clears the value from the calendar footer', async () => {
    const user = userEvent.setup();
    renderComponent({ isClearable: true }, { singleDate: '2013-08-12' });
    await openCalendar(user);
    await user.click(screen.getByRole('button', { name: 'Clear' }));
    expect(getFormValues().singleDate).toBe('');
    expect(getTrigger()).toHaveTextContent('Select date');
  });

  it('clears both fields of a range', async () => {
    const user = userEvent.setup();
    renderComponent(
      { endName: 'toDate', isClearable: true, mode: 'range', name: 'fromDate' },
      { fromDate: '2013-08-12', toDate: '2013-08-20' },
    );
    await openCalendar(user);
    await user.click(screen.getByRole('button', { name: 'Clear' }));
    expect(getFormValues()).toMatchObject({ fromDate: '', toDate: '' });
  });

  it('does not render a clear button by default', async () => {
    const user = userEvent.setup();
    renderComponent({}, { singleDate: '2013-08-12' });
    await openCalendar(user);
    expect(
      screen.queryByRole('button', { name: 'Clear' }),
    ).not.toBeInTheDocument();
  });

  it('respects the min and max bounds', async () => {
    const user = userEvent.setup();
    renderComponent(
      { max: '2013-08-20', min: '2013-08-10' },
      { singleDate: '2013-08-12' },
    );
    await openCalendar(user);
    expect(
      screen.getByRole('button', { name: 'August 9, 2013' }),
    ).toBeDisabled();
    expect(
      screen.getByRole('button', { name: 'August 21, 2013' }),
    ).toBeDisabled();
  });

  it('marks the field as dirty when a date is selected', async () => {
    const user = userEvent.setup();
    renderComponent({ showDirty: true }, { singleDate: '2013-08-12' });
    expect(getTrigger()).not.toHaveClass('input-success');
    await openCalendar(user);
    await user.click(screen.getByRole('button', { name: 'August 20, 2013' }));
    expect(getTrigger()).toHaveClass('input-success');
  });
});
