import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { afterEach, beforeEach, vi } from 'vitest';

import { mockMatchMedia } from '../../../../vitest/mockMatchMedia';
import { Calendar } from '../Calendar';
import { DateRange } from '../types';
import { formatISODate, formatISODateTime } from '../utils';

const getDayButton = (label: string) =>
  screen.getByRole('button', { name: label });

const getSelectedCells = () =>
  screen.getAllByRole('gridcell', { selected: true });

/** The calendar caption is a live region, so the output is matched by name. */
const getOutput = () => screen.getByRole('status', { name: 'Selection' });

describe('Calendar', () => {
  beforeEach(() => {
    mockMatchMedia(false);
    vi.useFakeTimers({ shouldAdvanceTime: true });
    vi.setSystemTime(new Date(2013, 7, 12, 12));
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.useRealTimers();
  });

  describe('single mode', () => {
    it('renders the month of the selected value', () => {
      render(<Calendar locale="en-US" value="2013-08-12" />);
      expect(screen.getByText('August 2013')).toBeInTheDocument();
      expect(getDayButton('August 12, 2013')).toBeInTheDocument();
    });

    it('renders localized weekday headers', () => {
      const { container } = render(
        <Calendar locale="en-US" value="2013-08-12" />,
      );
      const weekdays = container.querySelectorAll('.rdp-weekday');
      expect(weekdays[0]).toHaveTextContent('Sun');
      expect(weekdays[0]).toHaveAttribute('aria-label', 'Sunday');
      expect(weekdays).toHaveLength(7);
    });

    it('marks the selected date and today', () => {
      const { container } = render(
        <Calendar locale="en-US" value="2013-08-20" />,
      );
      expect(getSelectedCells()).toHaveLength(1);
      expect(getDayButton('August 20, 2013').parentElement).toHaveClass(
        'rdp-selected',
      );
      expect(getDayButton('August 12, 2013').parentElement).toHaveClass(
        'rdp-today',
      );
      expect(container.querySelector('.react-day-picker')).toBeInTheDocument();
    });

    it('calls onChange with the clicked date', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(
        <Calendar locale="en-US" onChange={onChange} value="2013-08-12" />,
      );
      await user.click(getDayButton('August 20, 2013'));
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(formatISODate(onChange.mock.calls[0][0] as Date)).toBe(
        '2013-08-20',
      );
    });

    it('reports the selected date again instead of clearing it', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(
        <Calendar locale="en-US" onChange={onChange} value="2013-08-12" />,
      );
      await user.click(getDayButton('August 12, 2013'));
      expect(formatISODate(onChange.mock.calls[0][0] as Date)).toBe(
        '2013-08-12',
      );
    });

    it('navigates between months', async () => {
      const user = userEvent.setup();
      render(<Calendar locale="en-US" value="2013-08-12" />);
      await user.click(screen.getByRole('button', { name: 'Next month' }));
      expect(screen.getByText('September 2013')).toBeInTheDocument();
      await user.click(screen.getByRole('button', { name: 'Previous month' }));
      await user.click(screen.getByRole('button', { name: 'Previous month' }));
      expect(screen.getByText('July 2013')).toBeInTheDocument();
    });

    it('renders the nav inside the months container', () => {
      const { container } = render(
        <Calendar locale="en-US" value="2013-08-12" />,
      );
      // daisyUI positions `.rdp-nav` absolutely against `.rdp-months`; outside
      // of it the nav is painted underneath and the arrows are not clickable.
      expect(
        container.querySelector('.rdp-months > .rdp-nav'),
      ).toBeInTheDocument();
    });

    it('disables dates outside of the min and max bounds', () => {
      render(
        <Calendar
          locale="en-US"
          max="2013-08-20"
          min="2013-08-10"
          value="2013-08-12"
        />,
      );
      expect(getDayButton('August 9, 2013')).toBeDisabled();
      expect(getDayButton('August 10, 2013')).toBeEnabled();
      expect(getDayButton('August 21, 2013')).toBeDisabled();
    });

    it('disables navigation past the min and max bounds', async () => {
      const user = userEvent.setup();
      render(
        <Calendar
          locale="en-US"
          max="2013-08-20"
          min="2013-08-10"
          value="2013-08-12"
        />,
      );
      // react-day-picker keeps the nav buttons focusable and marks them with
      // `aria-disabled`, which daisyUI dims in the same way as `disabled`.
      const previous = screen.getByRole('button', { name: 'Previous month' });
      const next = screen.getByRole('button', { name: 'Next month' });
      expect(previous).toHaveAttribute('aria-disabled', 'true');
      expect(next).toHaveAttribute('aria-disabled', 'true');
      await user.click(next);
      expect(screen.getByText('August 2013')).toBeInTheDocument();
    });

    it('ignores the time of a bound outside of datetime mode', () => {
      render(
        <Calendar locale="en-US" max="2013-08-20T14:30" value="2013-08-12" />,
      );
      // Only `datetime` mode selects a time, so the whole day is selectable.
      expect(getDayButton('August 20, 2013')).toBeEnabled();
      expect(getDayButton('August 21, 2013')).toBeDisabled();
    });

    it('disables dates rejected by isDateDisabled', () => {
      render(
        <Calendar
          isDateDisabled={date => date.getDay() === 0}
          locale="en-US"
          value="2013-08-12"
        />,
      );
      expect(getDayButton('August 11, 2013')).toBeDisabled();
      expect(getDayButton('August 12, 2013')).toBeEnabled();
    });

    it('hides outside days when showOutsideDays is false', () => {
      const { container } = render(
        <Calendar locale="en-US" showOutsideDays={false} value="2013-08-12" />,
      );
      expect(
        screen.queryByRole('button', { name: 'July 28, 2013' }),
      ).not.toBeInTheDocument();
      expect(container.querySelector('.rdp-hidden')).toBeInTheDocument();
    });

    it('always renders six weeks by default', () => {
      const { container } = render(
        <Calendar locale="en-US" value="2015-02-01" />,
      );
      expect(container.querySelectorAll('.rdp-week')).toHaveLength(6);
    });

    it('renders a single month', () => {
      const { container } = render(
        <Calendar locale="en-US" value="2013-08-12" />,
      );
      expect(container.querySelectorAll('.rdp-month')).toHaveLength(1);
    });

    it('moves focus with the arrow keys and follows into the next month', async () => {
      const user = userEvent.setup();
      render(<Calendar locale="en-US" value="2013-08-30" />);
      await user.click(getDayButton('August 30, 2013'));
      await user.keyboard('{ArrowRight}');
      expect(getDayButton('August 31, 2013')).toHaveFocus();
      await user.keyboard('{ArrowRight}');
      expect(screen.getByText('September 2013')).toBeInTheDocument();
      expect(getDayButton('September 1, 2013')).toHaveFocus();
    });

    it('moves focus a week at a time with the up and down arrows', async () => {
      const user = userEvent.setup();
      render(<Calendar locale="en-US" value="2013-08-12" />);
      await user.click(getDayButton('August 12, 2013'));
      await user.keyboard('{ArrowDown}');
      expect(getDayButton('August 19, 2013')).toHaveFocus();
      await user.keyboard('{ArrowUp}');
      expect(getDayButton('August 12, 2013')).toHaveFocus();
    });

    it('does not move focus past the max bound', async () => {
      const user = userEvent.setup();
      render(<Calendar locale="en-US" max="2013-08-13" value="2013-08-12" />);
      await user.click(getDayButton('August 12, 2013'));
      await user.keyboard('{ArrowDown}');
      expect(getDayButton('August 12, 2013')).toHaveFocus();
    });

    it('navigates the caption with dropdowns when asked to', () => {
      render(
        <Calendar
          captionLayout="dropdown"
          locale="en-US"
          max="2013-12-31"
          min="2010-01-01"
          value="2013-08-12"
        />,
      );
      expect(
        screen.getByRole('combobox', { name: 'Choose the Month' }),
      ).toBeInTheDocument();
      expect(
        screen.getByRole('combobox', { name: 'Choose the Year' }),
      ).toBeInTheDocument();
    });

    it('opens on defaultMonth when nothing is selected', () => {
      render(<Calendar defaultMonth="2013-03" locale="en-US" value={null} />);
      expect(screen.getByText('March 2013')).toBeInTheDocument();
    });

    it('opens on the month of a value outside the current month', () => {
      render(<Calendar locale="en-US" value="2013-02-05" />);
      expect(screen.getByText('February 2013')).toBeInTheDocument();
      expect(getDayButton('February 5, 2013')).toBeInTheDocument();
    });

    it('prefers defaultMonth over the month of the value', () => {
      render(
        <Calendar defaultMonth="2013-03" locale="en-US" value="2013-02-05" />,
      );
      expect(screen.getByText('March 2013')).toBeInTheDocument();
    });

    it('opens on the current month clamped into the bounds', () => {
      render(<Calendar locale="en-US" max="2013-05-31" value={null} />);
      expect(screen.getByText('May 2013')).toBeInTheDocument();
    });

    it('follows a value that changes to another month from outside', () => {
      const { rerender } = render(
        <Calendar locale="en-US" value="2013-08-12" />,
      );
      rerender(<Calendar locale="en-US" value="2013-11-04" />);
      expect(screen.getByText('November 2013')).toBeInTheDocument();
    });

    it('stays where the user navigated to while the value is unchanged', async () => {
      const user = userEvent.setup();
      render(<Calendar locale="en-US" value="2013-08-12" />);
      await user.click(screen.getByRole('button', { name: 'Next month' }));
      expect(screen.getByText('September 2013')).toBeInTheDocument();
    });

    it('stays on the controlled month and reports the requested one', async () => {
      const user = userEvent.setup();
      const onMonthChange = vi.fn();
      render(
        <Calendar
          locale="en-US"
          month="2013-03"
          onMonthChange={onMonthChange}
          value={null}
        />,
      );
      await user.click(screen.getByRole('button', { name: 'Next month' }));
      expect(screen.getByText('March 2013')).toBeInTheDocument();
      expect(onMonthChange).toHaveBeenCalledWith(new Date(2013, 3, 1));
    });
  });

  describe('datetime mode', () => {
    it('renders the time of the selected value', () => {
      render(
        <Calendar locale="en-US" mode="datetime" value="2013-08-12T14:30" />,
      );
      expect(screen.getByLabelText('Time')).toHaveValue('14:30');
      expect(getDayButton('August 12, 2013').parentElement).toHaveClass(
        'rdp-selected',
      );
    });

    it('keeps the current time when a date is clicked', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(
        <Calendar
          locale="en-US"
          mode="datetime"
          onChange={onChange}
          value="2013-08-12T14:30"
        />,
      );
      await user.click(getDayButton('August 20, 2013'));
      expect(formatISODateTime(onChange.mock.calls[0][0] as Date)).toBe(
        '2013-08-20T14:30',
      );
    });

    it('keeps the selected date when the time changes', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(
        <Calendar
          locale="en-US"
          mode="datetime"
          onChange={onChange}
          value="2013-08-12T14:30"
        />,
      );
      await user.clear(screen.getByLabelText('Time'));
      await user.type(screen.getByLabelText('Time'), '09:15');
      expect(formatISODateTime(onChange.mock.lastCall?.[0] as Date)).toBe(
        '2013-08-12T09:15',
      );
    });

    it('starts a new selection at midnight', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(
        <Calendar
          locale="en-US"
          mode="datetime"
          onChange={onChange}
          value={null}
        />,
      );
      expect(screen.getByLabelText('Time')).toHaveValue('00:00');
      await user.click(getDayButton('August 20, 2013'));
      expect(formatISODateTime(onChange.mock.calls[0][0] as Date)).toBe(
        '2013-08-20T00:00',
      );
    });

    it('renders seconds and a custom label when asked to', () => {
      render(
        <Calendar
          locale="en-US"
          mode="datetime"
          showSeconds
          timeLabel="Departure time"
          value="2013-08-12T14:30:45"
        />,
      );
      expect(screen.getByLabelText('Departure time')).toHaveValue('14:30:45');
    });

    it('bounds the time field by the time of the min and max bounds', () => {
      render(
        <Calendar
          locale="en-US"
          max="2013-08-20T17:00"
          min="2013-08-10T09:30"
          mode="datetime"
          value="2013-08-20T14:30"
        />,
      );
      // The day grid stays bounded by the date alone, so the boundary day is
      // still selectable, and only its time is restricted.
      expect(getDayButton('August 20, 2013')).toBeEnabled();
      expect(getDayButton('August 21, 2013')).toBeDisabled();
      expect(screen.getByLabelText('Time')).toHaveAttribute('max', '17:00');
      expect(screen.getByLabelText('Time')).not.toHaveAttribute('min');
    });

    it('does not bound the time field on days between the bounds', () => {
      render(
        <Calendar
          locale="en-US"
          max="2013-08-20T17:00"
          min="2013-08-10T09:30"
          mode="datetime"
          value="2013-08-15T14:30"
        />,
      );
      const timeInput = screen.getByLabelText('Time');
      expect(timeInput).not.toHaveAttribute('max');
      expect(timeInput).not.toHaveAttribute('min');
    });

    it('ignores a bound whose time is midnight', () => {
      render(
        <Calendar
          locale="en-US"
          max="2013-08-20"
          mode="datetime"
          value="2013-08-20T14:30"
        />,
      );
      // A `yyyy-MM-dd` bound and a `Date` at midnight both mean the whole day.
      expect(screen.getByLabelText('Time')).not.toHaveAttribute('max');
    });

    it('clamps a time carried over to a bounded day', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(
        <Calendar
          locale="en-US"
          max="2013-08-20T17:00"
          min="2013-08-10T09:30"
          mode="datetime"
          onChange={onChange}
          value="2013-08-15T22:00"
        />,
      );
      await user.click(getDayButton('August 20, 2013'));
      expect(formatISODateTime(onChange.mock.calls[0][0] as Date)).toBe(
        '2013-08-20T17:00',
      );
      // The same time is in bounds on the earliest day, so it is kept.
      await user.click(getDayButton('August 10, 2013'));
      expect(formatISODateTime(onChange.mock.lastCall?.[0] as Date)).toBe(
        '2013-08-10T22:00',
      );
    });

    it('clamps a time carried over to the earliest day', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(
        <Calendar
          locale="en-US"
          max="2013-08-20T17:00"
          min="2013-08-10T09:30"
          mode="datetime"
          onChange={onChange}
          value="2013-08-15T08:00"
        />,
      );
      await user.click(getDayButton('August 10, 2013'));
      expect(formatISODateTime(onChange.mock.calls[0][0] as Date)).toBe(
        '2013-08-10T09:30',
      );
    });
  });

  describe('range mode', () => {
    it('marks the start, middle and end of the range', () => {
      render(
        <Calendar
          locale="en-US"
          mode="range"
          value={{ from: '2013-08-12', to: '2013-08-15' }}
        />,
      );
      expect(getDayButton('August 12, 2013').parentElement).toHaveClass(
        'rdp-range_start',
      );
      expect(getDayButton('August 13, 2013').parentElement).toHaveClass(
        'rdp-range_middle',
      );
      expect(getDayButton('August 15, 2013').parentElement).toHaveClass(
        'rdp-range_end',
      );
      expect(getSelectedCells()).toHaveLength(4);
    });

    it('selects a range across two clicks', async () => {
      const user = userEvent.setup();
      const RangeCalendar = () => {
        const [value, setValue] = useState<DateRange>({ from: null, to: null });
        return (
          <>
            <Calendar
              locale="en-US"
              mode="range"
              onChange={setValue}
              value={value}
            />
            <output aria-label="Selection">
              {value.from !== null ? formatISODate(value.from) : ''}
              {' to '}
              {value.to !== null ? formatISODate(value.to) : ''}
            </output>
          </>
        );
      };
      render(<RangeCalendar />);
      await user.click(getDayButton('August 12, 2013'));
      expect(getOutput()).toHaveTextContent('2013-08-12 to');
      await user.click(getDayButton('August 15, 2013'));
      expect(getOutput()).toHaveTextContent('2013-08-12 to 2013-08-15');
      expect(getSelectedCells()).toHaveLength(4);
    });

    it('starts a new range when one is already complete', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(
        <Calendar
          locale="en-US"
          mode="range"
          onChange={onChange}
          value={{ from: '2013-08-12', to: '2013-08-20' }}
        />,
      );
      // A day inside the selected range would otherwise move the nearest end of
      // it, completing a range in a single click.
      await user.click(getDayButton('August 15, 2013'));
      const { from, to } = onChange.mock.calls[0][0] as DateRange;
      expect(from !== null && formatISODate(from)).toBe('2013-08-15');
      expect(to).toBeNull();
    });

    it('starts a new range from a day outside a complete one', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(
        <Calendar
          locale="en-US"
          mode="range"
          onChange={onChange}
          value={{ from: '2013-08-12', to: '2013-08-20' }}
        />,
      );
      await user.click(getDayButton('August 25, 2013'));
      const { from, to } = onChange.mock.calls[0][0] as DateRange;
      expect(from !== null && formatISODate(from)).toBe('2013-08-25');
      expect(to).toBeNull();
    });

    it('flips the range when the second date is earlier', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(
        <Calendar
          locale="en-US"
          mode="range"
          onChange={onChange}
          value={{ from: '2013-08-12', to: null }}
        />,
      );
      await user.click(getDayButton('August 5, 2013'));
      const { from, to } = onChange.mock.calls[0][0] as DateRange;
      expect(from !== null && formatISODate(from)).toBe('2013-08-05');
      expect(to !== null && formatISODate(to)).toBe('2013-08-12');
    });

    it('renders a single month on narrow screens', () => {
      const { container } = render(
        <Calendar locale="en-US" mode="range" value={null} />,
      );
      expect(container.querySelectorAll('.rdp-month')).toHaveLength(1);
    });

    it('renders two months when the screen is wide enough', () => {
      mockMatchMedia(true);
      const { container } = render(
        <Calendar locale="en-US" mode="range" value={{ from: '2013-08-12' }} />,
      );
      expect(container.querySelectorAll('.rdp-month')).toHaveLength(2);
      expect(screen.getByText('August 2013')).toBeInTheDocument();
      expect(screen.getByText('September 2013')).toBeInTheDocument();
    });

    it('renders the requested number of months', () => {
      const { container } = render(
        <Calendar
          locale="en-US"
          mode="range"
          numberOfMonths={3}
          value={null}
        />,
      );
      expect(container.querySelectorAll('.rdp-month')).toHaveLength(3);
    });

    it('opens on the month the range starts in', () => {
      render(
        <Calendar
          locale="en-US"
          mode="range"
          value={{ from: '2013-02-05', to: '2013-02-20' }}
        />,
      );
      expect(screen.getByText('February 2013')).toBeInTheDocument();
      expect(getDayButton('February 5, 2013')).toBeInTheDocument();
      expect(getDayButton('February 20, 2013')).toBeInTheDocument();
    });

    it('stays put when the range is completed in the second month', async () => {
      mockMatchMedia(true);
      const user = userEvent.setup();
      const RangeCalendar = () => {
        const [value, setValue] = useState<DateRange>({ from: null, to: null });
        return (
          <Calendar
            locale="en-US"
            mode="range"
            onChange={setValue}
            value={value}
          />
        );
      };
      render(<RangeCalendar />);
      // The start is picked in September, the second of the two months on
      // screen, so the grid must not scroll it into the first one.
      await user.click(getDayButton('September 20, 2013'));
      expect(screen.getByText('August 2013')).toBeInTheDocument();
      expect(screen.getByText('September 2013')).toBeInTheDocument();
    });
  });

  describe('month mode', () => {
    it('renders the twelve months of the displayed year', () => {
      render(<Calendar locale="en-US" mode="month" value="2013-08" />);
      expect(screen.getByText('2013')).toBeInTheDocument();
      const grid = screen.getByRole('grid');
      expect(within(grid).getAllByRole('button')).toHaveLength(12);
      expect(
        screen.getByRole('button', { name: 'August 2013' }),
      ).toHaveTextContent('Aug');
    });

    it('opens on the year of the value and prefers defaultMonth over it', () => {
      const { unmount } = render(
        <Calendar locale="en-US" mode="month" value="2011-08" />,
      );
      expect(screen.getByText('2011')).toBeInTheDocument();
      unmount();
      render(
        <Calendar
          defaultMonth="2015-01"
          locale="en-US"
          mode="month"
          value="2011-08"
        />,
      );
      expect(screen.getByText('2015')).toBeInTheDocument();
    });

    it('follows a value that changes to another year from outside', () => {
      const { rerender } = render(
        <Calendar locale="en-US" mode="month" value="2013-08" />,
      );
      rerender(<Calendar locale="en-US" mode="month" value="2015-04" />);
      expect(screen.getByText('2015')).toBeInTheDocument();
    });

    it('marks the selected month', () => {
      render(<Calendar locale="en-US" mode="month" value="2013-08" />);
      expect(getSelectedCells()).toHaveLength(1);
      const selected = screen.getByRole('button', { name: 'August 2013' });
      expect(selected).toHaveClass('bg-base-content');
      // `bg-transparent` is emitted after the theme colors, so it would win and
      // leave the label unreadable.
      expect(selected).not.toHaveClass('bg-transparent');
    });

    it('outlines the current month instead of filling it', () => {
      render(<Calendar locale="en-US" mode="month" value="2013-03" />);
      const current = screen.getByRole('button', { name: 'August 2013' });
      const selected = screen.getByRole('button', { name: 'March 2013' });
      // The fill is reserved for the selection, so an unselected current month
      // cannot be mistaken for the selected one.
      expect(current).toHaveClass(
        'bg-primary/20',
        'text-primary',
        'ring-primary',
      );
      expect(current).not.toHaveClass('bg-primary');
      expect(selected).toHaveClass('bg-base-content');
      expect(selected).not.toHaveClass('ring-primary');
    });

    it('keeps the outline when the current month is selected', () => {
      render(<Calendar locale="en-US" mode="month" value="2013-08" />);
      const cell = screen.getByRole('button', { name: 'August 2013' });
      expect(cell).toHaveClass('bg-base-content', 'ring-primary');
    });

    it('calls onChange with the first of the selected month', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(
        <Calendar
          locale="en-US"
          mode="month"
          onChange={onChange}
          value="2013-08"
        />,
      );
      await user.click(screen.getByRole('button', { name: 'March 2013' }));
      expect(formatISODate(onChange.mock.calls[0][0] as Date)).toBe(
        '2013-03-01',
      );
    });

    it('navigates between years', async () => {
      const user = userEvent.setup();
      render(<Calendar locale="en-US" mode="month" value="2013-08" />);
      await user.click(screen.getByRole('button', { name: 'Next year' }));
      expect(screen.getByText('2014')).toBeInTheDocument();
      await user.click(screen.getByRole('button', { name: 'Previous year' }));
      await user.click(screen.getByRole('button', { name: 'Previous year' }));
      expect(screen.getByText('2012')).toBeInTheDocument();
    });

    it('disables months outside of the min and max bounds', () => {
      render(
        <Calendar
          locale="en-US"
          max="2013-08-31"
          min="2013-03-01"
          mode="month"
          value="2013-08"
        />,
      );
      expect(
        screen.getByRole('button', { name: 'February 2013' }),
      ).toBeDisabled();
      expect(screen.getByRole('button', { name: 'March 2013' })).toBeEnabled();
      expect(
        screen.getByRole('button', { name: 'September 2013' }),
      ).toBeDisabled();
      expect(
        screen.getByRole('button', { name: 'Previous year' }),
      ).toBeDisabled();
      expect(screen.getByRole('button', { name: 'Next year' })).toBeDisabled();
    });

    it('moves focus a row at a time with the arrow keys', async () => {
      const user = userEvent.setup();
      render(<Calendar locale="en-US" mode="month" value="2013-08" />);
      await user.click(screen.getByRole('button', { name: 'March 2013' }));
      await user.keyboard('{ArrowDown}');
      expect(screen.getByRole('button', { name: 'July 2013' })).toHaveFocus();
      await user.keyboard('{ArrowLeft}');
      expect(screen.getByRole('button', { name: 'June 2013' })).toHaveFocus();
    });
  });

  it('renders a footer when provided', () => {
    render(
      <Calendar
        footer={<button type="button">Clear</button>}
        locale="en-US"
        value="2013-08-12"
      />,
    );
    expect(screen.getByRole('button', { name: 'Clear' })).toBeInTheDocument();
  });

  it('renders a footer in month mode when provided', () => {
    render(
      <Calendar
        footer={<button type="button">Clear</button>}
        locale="en-US"
        mode="month"
        value="2013-08"
      />,
    );
    expect(screen.getByRole('button', { name: 'Clear' })).toBeInTheDocument();
  });
});
