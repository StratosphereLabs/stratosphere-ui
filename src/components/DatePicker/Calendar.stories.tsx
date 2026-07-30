import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Calendar } from './Calendar';
import { DateRange } from './types';
import { formatISODate, formatISODateTime, formatMonthText } from './utils';

const meta: Meta<typeof Calendar> = {
  title: 'Calendar',
  component: Calendar,
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const SingleDate: Story = {
  render: () => {
    const [value, setValue] = useState<Date | null>(new Date());
    return (
      <div className="flex flex-col items-center gap-2">
        <Calendar mode="single" onChange={setValue} value={value} />
        <span className="text-sm opacity-60">
          {value !== null ? formatISODate(value) : 'No date selected'}
        </span>
      </div>
    );
  },
};

export const DateAndTime: Story = {
  render: () => {
    const [value, setValue] = useState<Date | null>(new Date());
    return (
      <div className="flex flex-col items-center gap-2">
        <Calendar mode="datetime" onChange={setValue} value={value} />
        <span className="text-sm opacity-60">
          {value !== null ? formatISODateTime(value) : 'No date selected'}
        </span>
      </div>
    );
  },
};

export const DateAndTimeWithSeconds: Story = {
  render: () => {
    const [value, setValue] = useState<Date | null>(new Date());
    return (
      <Calendar
        mode="datetime"
        onChange={setValue}
        showSeconds
        timeLabel="Departure time"
        value={value}
      />
    );
  },
};

/** Two months are shown side by side from 40rem up, and one below it. */
export const DateRangeSelection: Story = {
  render: () => {
    const [value, setValue] = useState<DateRange>({ from: null, to: null });
    return (
      <div className="flex flex-col items-center gap-2">
        <Calendar mode="range" onChange={setValue} value={value} />
        <span className="text-sm opacity-60">
          {[value.from, value.to]
            .map(date => (date !== null ? formatISODate(date) : '…'))
            .join(' – ')}
        </span>
      </div>
    );
  },
};

export const SingleMonth: Story = {
  render: () => {
    const [value, setValue] = useState<Date | null>(new Date(2013, 7, 1));
    return (
      <div className="flex flex-col items-center gap-2">
        <Calendar mode="month" onChange={setValue} value={value} />
        <span className="text-sm opacity-60">
          {value !== null ? formatMonthText(value) : 'No month selected'}
        </span>
      </div>
    );
  },
};

export const WithMinAndMax: Story = {
  render: () => {
    const today = new Date();
    const [value, setValue] = useState<Date | null>(today);
    return (
      <Calendar
        max={new Date(today.getFullYear(), today.getMonth(), 20)}
        min={new Date(today.getFullYear(), today.getMonth(), 5)}
        onChange={setValue}
        value={value}
      />
    );
  },
};

export const WithDisabledWeekends: Story = {
  render: () => {
    const [value, setValue] = useState<Date | null>(null);
    return (
      <Calendar
        isDateDisabled={date => [0, 6].includes(date.getDay())}
        onChange={setValue}
        value={value}
      />
    );
  },
};

export const WithDropdownNavigation: Story = {
  render: () => {
    const [value, setValue] = useState<Date | null>(new Date());
    return (
      <Calendar captionLayout="dropdown" onChange={setValue} value={value} />
    );
  },
};

export const WithWeekNumbers: Story = {
  render: () => {
    const [value, setValue] = useState<Date | null>(new Date());
    return <Calendar onChange={setValue} showWeekNumber value={value} />;
  },
};

export const StartingOnMonday: Story = {
  render: () => {
    const [value, setValue] = useState<Date | null>(new Date());
    return <Calendar onChange={setValue} value={value} weekStartsOn={1} />;
  },
};

export const WithFooter: Story = {
  render: () => {
    const [value, setValue] = useState<Date | null>(new Date());
    return (
      <Calendar
        footer={
          <div className="flex justify-end">
            <button
              className="btn btn-ghost btn-xs"
              onClick={() => setValue(null)}
              type="button"
            >
              Clear
            </button>
          </div>
        }
        onChange={setValue}
        value={value}
      />
    );
  },
};
