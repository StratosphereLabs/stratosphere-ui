import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { afterEach, beforeEach, vi } from 'vitest';

import { Calendar } from '../Calendar';
import { DateRange } from '../types';
import { formatISODate } from '../utils';

const getDayButton = (label: string) =>
  screen.getByRole('button', { name: label });

const getSelectedCells = () =>
  screen.getAllByRole('gridcell', { selected: true });

describe('Calendar', () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    vi.setSystemTime(new Date(2013, 7, 12, 12));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe('single mode', () => {
    it('renders the month of the selected value', () => {
      render(<Calendar locale="en-US" value="2013-08-12" />);
      expect(screen.getByText('August 2013')).toBeInTheDocument();
      expect(getDayButton('August 12, 2013')).toBeInTheDocument();
    });

    it('renders localized weekday headers', () => {
      render(<Calendar locale="en-US" value="2013-08-12" />);
      expect(
        screen.getByRole('columnheader', { name: 'Sunday' }),
      ).toHaveTextContent('Sun');
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
      const nav = container.querySelector('.rdp-months > .rdp-nav');
      expect(nav).toBeInTheDocument();
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

    it('disables navigation past the min and max bounds', () => {
      render(
        <Calendar
          locale="en-US"
          max="2013-08-20"
          min="2013-08-10"
          value="2013-08-12"
        />,
      );
      expect(
        screen.getByRole('button', { name: 'Previous month' }),
      ).toBeDisabled();
      expect(screen.getByRole('button', { name: 'Next month' })).toBeDisabled();
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
      render(
        <Calendar locale="en-US" showOutsideDays={false} value="2013-08-12" />,
      );
      const outsideDay = getDayButton('July 28, 2013');
      expect(outsideDay.parentElement).toHaveClass('rdp-hidden');
      expect(outsideDay).toBeDisabled();
    });

    it('always renders six weeks by default', () => {
      const { container } = render(
        <Calendar locale="en-US" value="2015-02-01" />,
      );
      expect(container.querySelectorAll('.rdp-week')).toHaveLength(6);
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
      expect(getDayButton('August 13, 2013')).toHaveFocus();
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
        'rdp-selected',
      );
      expect(getDayButton('August 13, 2013').parentElement).toHaveClass(
        'rdp-range_middle',
      );
      expect(getDayButton('August 13, 2013').parentElement).not.toHaveClass(
        'rdp-selected',
      );
      expect(getDayButton('August 15, 2013').parentElement).toHaveClass(
        'rdp-range_end',
        'rdp-selected',
      );
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
            <output>
              {value.from !== null ? formatISODate(value.from) : ''}
              {' to '}
              {value.to !== null ? formatISODate(value.to) : ''}
            </output>
          </>
        );
      };
      render(<RangeCalendar />);
      await user.click(getDayButton('August 12, 2013'));
      expect(screen.getByRole('status')).toHaveTextContent('2013-08-12 to');
      await user.click(getDayButton('August 15, 2013'));
      expect(screen.getByRole('status')).toHaveTextContent(
        '2013-08-12 to 2013-08-15',
      );
      expect(getSelectedCells()).toHaveLength(4);
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
});
