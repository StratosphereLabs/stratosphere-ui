import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FieldValues, useWatch } from 'react-hook-form';
import { afterEach, beforeEach, vi } from 'vitest';

import { mockMatchMedia } from '../../../../vitest/mockMatchMedia';
import FormProvider from '../../Form/__tests__/FormProvider';
import { DatePicker, DatePickerProps } from '../DatePicker';

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

interface FormValues extends FieldValues {
  dateTime: string;
  fromDate: string;
  month: string;
  singleDate: string;
  toDate: string;
}

const DEFAULT_VALUES: FormValues = {
  dateTime: '',
  fromDate: '',
  month: '',
  singleDate: '',
  toDate: '',
};

/** Renders the current form state so assertions can read it from the DOM. */
const FormValuesOutput = () => {
  const values = useWatch<FormValues>();
  return <output aria-label="Form values">{JSON.stringify(values)}</output>;
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

/**
 * The calendar caption is a live region of its own, so the form state output is
 * matched by its accessible name.
 */
const getFormValues = (): FormValues =>
  JSON.parse(
    screen.getByRole('status', { name: 'Form values' }).textContent ?? '{}',
  ) as FormValues;

/** The field itself, which the value can be typed into. */
const getInput = (): HTMLInputElement => screen.getByRole('textbox');

/** The box around the input, which carries the field colors. */
const getField = (): HTMLElement => getInput().parentElement as HTMLElement;

/**
 * The calendar button is the only button with `aria-expanded`, which keeps it
 * distinguishable from the calendar buttons while the calendar is open.
 */
const getTrigger = (isOpen = false): HTMLElement =>
  screen.getByRole('button', { expanded: isOpen });

/** Replaces the text of the field, as selecting all of it and typing would. */
const typeIntoInput = async (
  user: ReturnType<typeof userEvent.setup>,
  text: string,
): Promise<void> => {
  const input = getInput();
  await user.type(input, text, {
    initialSelectionEnd: input.value.length,
    initialSelectionStart: 0,
  });
};

const openCalendar = async (
  user: ReturnType<typeof userEvent.setup>,
): Promise<void> => {
  await user.click(getTrigger());
  // `range` mode renders one grid per displayed month.
  expect((await screen.findAllByRole('grid')).length).toBeGreaterThan(0);
};

describe('DatePicker', () => {
  window.ResizeObserver = ResizeObserver;

  beforeEach(() => {
    mockMatchMedia(false);
    vi.useFakeTimers({ shouldAdvanceTime: true });
    vi.setSystemTime(new Date(2013, 7, 12, 12));
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.useRealTimers();
  });

  it('renders the placeholder for each mode', () => {
    const { unmount } = renderComponent();
    expect(getInput()).toHaveAttribute('placeholder', 'Select date');
    unmount();
    const { unmount: unmountMonth } = renderComponent({ mode: 'month' });
    expect(getInput()).toHaveAttribute('placeholder', 'Select month');
    unmountMonth();
    renderComponent({ mode: 'datetime' });
    expect(getInput()).toHaveAttribute('placeholder', 'Select date and time');
  });

  it('renders a custom placeholder and label text', () => {
    renderComponent({ labelText: 'Departure Date', placeholder: 'Any date' });
    expect(screen.getByText('Departure Date')).toBeInTheDocument();
    expect(getInput()).toHaveAttribute('placeholder', 'Any date');
  });

  it('renders the current value as text', () => {
    renderComponent({}, { singleDate: '2013-08-12' });
    expect(getInput()).toHaveValue('Aug 12, 2013');
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
    expect(getInput()).toHaveValue('Aug 20, 2013');
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
    expect(getInput()).toHaveValue('Aug 2013');
    await openCalendar(user);
    await user.click(screen.getByRole('button', { name: 'March 2013' }));
    expect(getFormValues().month).toBe('2013-03');
    expect(getInput()).toHaveValue('Mar 2013');
  });

  it('selects a date and a time as a yyyy-MM-ddTHH:mm value', async () => {
    const user = userEvent.setup();
    renderComponent(
      { mode: 'datetime', name: 'dateTime' },
      { dateTime: '2013-08-12T14:30' },
    );
    expect(getInput()).toHaveValue('Aug 12, 2013, 2:30 PM');
    await openCalendar(user);
    await user.click(screen.getByRole('button', { name: 'August 20, 2013' }));
    expect(getFormValues().dateTime).toBe('2013-08-20T14:30');
    // The calendar stays open so that the time can be set after the date.
    expect(screen.getByRole('grid')).toBeInTheDocument();
    await user.clear(screen.getByLabelText('Time'));
    await user.type(screen.getByLabelText('Time'), '09:15');
    expect(getFormValues().dateTime).toBe('2013-08-20T09:15');
    await user.click(screen.getByRole('button', { name: 'Done' }));
    await waitFor(() =>
      expect(screen.queryByRole('grid')).not.toBeInTheDocument(),
    );
    expect(getInput()).toHaveValue('Aug 20, 2013, 9:15 AM');
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
    expect(getInput()).toHaveValue('Aug 12, 2013 – Aug 20, 2013');
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

  it('takes two clicks to replace a range it opened with', async () => {
    const user = userEvent.setup();
    renderComponent(
      { endName: 'toDate', mode: 'range', name: 'fromDate' },
      { fromDate: '2013-02-05', toDate: '2013-02-20' },
    );
    await openCalendar(user);
    await user.click(screen.getByRole('button', { name: 'February 12, 2013' }));
    expect(getFormValues()).toMatchObject({
      fromDate: '2013-02-12',
      toDate: '',
    });
    // The first click only starts the new range, so the calendar has to stay
    // open for the second one.
    expect(screen.getByRole('grid')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'February 18, 2013' }));
    expect(getFormValues()).toMatchObject({
      fromDate: '2013-02-12',
      toDate: '2013-02-18',
    });
  });

  it('reads a range from two separate fields', () => {
    renderComponent(
      { endName: 'toDate', mode: 'range', name: 'fromDate' },
      { fromDate: '2013-08-12', toDate: '2013-08-20' },
    );
    expect(getInput()).toHaveValue('Aug 12, 2013 – Aug 20, 2013');
  });

  it('opens the calendar on the month of the stored value', async () => {
    const user = userEvent.setup();
    renderComponent({}, { singleDate: '2013-02-05' });
    await openCalendar(user);
    expect(screen.getByText('February 2013')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'February 5, 2013' }),
    ).toBeInTheDocument();
  });

  it('opens the calendar on the month a stored range starts in', async () => {
    const user = userEvent.setup();
    renderComponent(
      { endName: 'toDate', mode: 'range', name: 'fromDate' },
      { fromDate: '2013-02-05', toDate: '2013-02-20' },
    );
    await openCalendar(user);
    expect(screen.getByText('February 2013')).toBeInTheDocument();
  });

  it('shows two months of a range on wide screens', async () => {
    mockMatchMedia(true);
    const user = userEvent.setup();
    renderComponent({ endName: 'toDate', mode: 'range', name: 'fromDate' });
    await openCalendar(user);
    expect(screen.getByText('August 2013')).toBeInTheDocument();
    expect(screen.getByText('September 2013')).toBeInTheDocument();
  });

  it('clears the value from the calendar footer', async () => {
    const user = userEvent.setup();
    renderComponent({ isClearable: true }, { singleDate: '2013-08-12' });
    await openCalendar(user);
    await user.click(screen.getByRole('button', { name: 'Clear' }));
    expect(getFormValues().singleDate).toBe('');
    expect(getInput()).toHaveValue('');
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

  it('writes a date typed into the field', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    renderComponent({ onChange });
    await user.type(getInput(), '8/20/2013');
    expect(getFormValues().singleDate).toBe('2013-08-20');
    expect(onChange).toHaveBeenLastCalledWith(new Date(2013, 7, 20));
    // The text is replaced by the formatted value once the field is left.
    await user.tab();
    expect(getInput()).toHaveValue('Aug 20, 2013');
  });

  it('reads a typed month name and a two digit year', async () => {
    const user = userEvent.setup();
    renderComponent();
    await user.type(getInput(), 'sept 5 13');
    expect(getFormValues().singleDate).toBe('2013-09-05');
  });

  it('keeps the value when the typed text is not a date', async () => {
    const user = userEvent.setup();
    renderComponent({}, { singleDate: '2013-08-12' });
    await typeIntoInput(user, 'not a date');
    expect(getFormValues().singleDate).toBe('2013-08-12');
    await user.tab();
    expect(getInput()).toHaveValue('Aug 12, 2013');
  });

  it('clears the value when the field is emptied', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    renderComponent({ onChange }, { singleDate: '2013-08-12' });
    await user.clear(getInput());
    expect(getFormValues().singleDate).toBe('');
    expect(onChange).toHaveBeenCalledWith(null);
  });

  it('does not write a typed date outside the bounds', async () => {
    const user = userEvent.setup();
    renderComponent(
      { max: '2013-08-20', min: '2013-08-10' },
      { singleDate: '2013-08-12' },
    );
    await typeIntoInput(user, '8/25/2013');
    expect(getFormValues().singleDate).toBe('2013-08-12');
  });

  it('writes a typed date and time, keeping a time it is not given', async () => {
    const user = userEvent.setup();
    renderComponent(
      { mode: 'datetime', name: 'dateTime' },
      { dateTime: '2013-08-12T14:30' },
    );
    await typeIntoInput(user, '8/20/2013');
    expect(getFormValues().dateTime).toBe('2013-08-20T14:30');
    await typeIntoInput(user, 'Aug 20, 2013, 9:15 AM');
    expect(getFormValues().dateTime).toBe('2013-08-20T09:15');
  });

  it('writes a typed month', async () => {
    const user = userEvent.setup();
    renderComponent({ mode: 'month', name: 'month' }, { month: '2013-08' });
    await typeIntoInput(user, 'mar 2011');
    expect(getFormValues().month).toBe('2011-03');
  });

  it('writes a typed range', async () => {
    const user = userEvent.setup();
    renderComponent({ endName: 'toDate', mode: 'range', name: 'fromDate' });
    await user.type(getInput(), '8/12/2013 - 8/20/2013');
    expect(getFormValues()).toMatchObject({
      fromDate: '2013-08-12',
      toDate: '2013-08-20',
    });
  });

  it('waits for the field to be left to write a lone range start', async () => {
    const user = userEvent.setup();
    renderComponent({ endName: 'toDate', mode: 'range', name: 'fromDate' });
    await user.type(getInput(), '8/12/2013');
    expect(getFormValues()).toMatchObject({ fromDate: '', toDate: '' });
    await user.tab();
    expect(getFormValues()).toMatchObject({
      fromDate: '2013-08-12',
      toDate: '',
    });
    expect(getInput()).toHaveValue('Aug 12, 2013 – …');
  });

  it('lets the calendar win over text left in the field', async () => {
    const user = userEvent.setup();
    renderComponent({}, { singleDate: '2013-08-12' });
    await typeIntoInput(user, '9');
    await user.click(screen.getByRole('button', { name: 'August 20, 2013' }));
    expect(getFormValues().singleDate).toBe('2013-08-20');
    expect(getInput()).toHaveValue('Aug 20, 2013');
  });

  it('opens the calendar when the field is clicked', async () => {
    const user = userEvent.setup();
    renderComponent();
    await user.click(getInput());
    expect(await screen.findByRole('grid')).toBeInTheDocument();
  });

  it('opens the calendar with the down arrow key', async () => {
    const user = userEvent.setup();
    renderComponent();
    await user.tab();
    expect(getInput()).toHaveFocus();
    expect(screen.queryByRole('grid')).not.toBeInTheDocument();
    await user.keyboard('{ArrowDown}');
    expect(await screen.findByRole('grid')).toBeInTheDocument();
  });

  it('leaves a hidden calendar button out of the tab order', async () => {
    const user = userEvent.setup();
    renderComponent({ hideCalendarIcon: true });
    expect(getTrigger()).toHaveAttribute('tabindex', '-1');
    await user.tab();
    expect(getInput()).toHaveFocus();
    await user.tab();
    expect(getTrigger()).not.toHaveFocus();
    // The down arrow key is what is left to open the calendar with.
    getInput().focus();
    await user.keyboard('{ArrowDown}');
    expect(await screen.findByRole('grid')).toBeInTheDocument();
  });

  it('navigates the calendar caption with dropdowns', async () => {
    const user = userEvent.setup();
    renderComponent({}, { singleDate: '2013-08-12' });
    await openCalendar(user);
    await user.selectOptions(
      screen.getByRole('combobox', { name: 'Choose the Month' }),
      '2',
    );
    expect(
      screen.getByRole('button', { name: 'March 12, 2013' }),
    ).toBeInTheDocument();
    await user.selectOptions(
      screen.getByRole('combobox', { name: 'Choose the Year' }),
      '2011',
    );
    expect(
      screen.getByRole('button', { name: 'March 12, 2011' }),
    ).toBeInTheDocument();
  });

  it('reaches future years from the year dropdown', async () => {
    const user = userEvent.setup();
    renderComponent();
    await openCalendar(user);
    expect(screen.getByRole('option', { name: '2018' })).toBeInTheDocument();
  });

  it('navigates the years of a month field with a dropdown', async () => {
    const user = userEvent.setup();
    renderComponent({ mode: 'month', name: 'month' }, { month: '2013-08' });
    await openCalendar(user);
    await user.selectOptions(
      screen.getByRole('combobox', { name: 'Choose the Year' }),
      '2011',
    );
    await user.click(screen.getByRole('button', { name: 'March 2011' }));
    expect(getFormValues().month).toBe('2011-03');
  });

  it('marks the field as dirty when a date is selected', async () => {
    const user = userEvent.setup();
    renderComponent({ showDirty: true }, { singleDate: '2013-08-12' });
    expect(getField()).not.toHaveClass('input-success');
    await openCalendar(user);
    await user.click(screen.getByRole('button', { name: 'August 20, 2013' }));
    expect(getField()).toHaveClass('input-success');
  });
});
