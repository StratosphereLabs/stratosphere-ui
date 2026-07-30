import {
  clampDate,
  formatISODate,
  formatISODateTime,
  formatISOMonth,
  formatTimeValue,
  getMonthLabels,
  isDateUnavailable,
  isMonthUnavailable,
  parseDate,
  parseDateRange,
  parseDateTime,
  serializeDateValue,
  withTimeValue,
} from '../utils';

describe('parseDate', () => {
  it('parses ISO date strings as local dates', () => {
    const date = parseDate('2013-08-12');
    expect(date?.getFullYear()).toBe(2013);
    expect(date?.getMonth()).toBe(7);
    expect(date?.getDate()).toBe(12);
  });

  it('parses ISO month strings as the first of the month', () => {
    const date = parseDate('2013-08');
    expect(date?.getMonth()).toBe(7);
    expect(date?.getDate()).toBe(1);
  });

  it('strips the time from Date and timestamp values', () => {
    const date = parseDate(new Date(2013, 7, 12, 23, 45));
    expect(date?.getHours()).toBe(0);
    expect(parseDate(new Date(2013, 7, 12, 23, 45).getTime())?.getDate()).toBe(
      12,
    );
  });

  it('returns null for empty and invalid values', () => {
    expect(parseDate('')).toBeNull();
    expect(parseDate(null)).toBeNull();
    expect(parseDate(undefined)).toBeNull();
    expect(parseDate('not a date')).toBeNull();
    expect(parseDate(new Date('nope'))).toBeNull();
  });
});

describe('parseDateTime', () => {
  it('parses ISO date and time strings as local times', () => {
    const date = parseDateTime('2013-08-12T14:30');
    expect(date?.getDate()).toBe(12);
    expect(date?.getHours()).toBe(14);
    expect(date?.getMinutes()).toBe(30);
    expect(date?.getSeconds()).toBe(0);
  });

  it('parses seconds when they are included', () => {
    expect(parseDateTime('2013-08-12T14:30:45')?.getSeconds()).toBe(45);
    expect(parseDateTime('2013-08-12 14:30')?.getHours()).toBe(14);
  });

  it('keeps the time of Date and timestamp values', () => {
    const date = new Date(2013, 7, 12, 23, 45);
    expect(parseDateTime(date)?.getHours()).toBe(23);
    expect(parseDateTime(date.getTime())?.getMinutes()).toBe(45);
  });

  it('falls back to midnight for date-only values', () => {
    expect(parseDateTime('2013-08-12')?.getHours()).toBe(0);
  });

  it('returns null for empty and invalid values', () => {
    expect(parseDateTime('')).toBeNull();
    expect(parseDateTime(null)).toBeNull();
    expect(parseDateTime('not a date')).toBeNull();
  });

  it('returns null for out of range times', () => {
    // An out of range time would otherwise overflow into the following day.
    expect(parseDateTime('2013-08-12T12:60')).toBeNull();
    expect(parseDateTime('2013-08-12T99:99')).toBeNull();
  });

  it('resolves an ISO end of day to the next midnight', () => {
    // `24:00` is a valid ISO 8601 time, and the only overflow that is not a
    // malformed value, so it is left to the `Date` constructor to resolve.
    expect(parseDateTime('2013-08-12T24:00')).toEqual(new Date(2013, 7, 13));
  });
});

describe('parseDateRange', () => {
  it('parses both ends of the range', () => {
    const { from, to } = parseDateRange({
      from: '2013-08-12',
      to: '2013-08-20',
    });
    expect(from?.getDate()).toBe(12);
    expect(to?.getDate()).toBe(20);
  });

  it('returns nulls for a missing range', () => {
    expect(parseDateRange(null)).toEqual({ from: null, to: null });
  });
});

describe('formatISODate', () => {
  it('formats using local calendar values', () => {
    expect(formatISODate(new Date(2013, 7, 2))).toBe('2013-08-02');
  });
});

describe('formatISOMonth', () => {
  it('formats year and month only', () => {
    expect(formatISOMonth(new Date(2013, 7, 12))).toBe('2013-08');
  });
});

describe('formatISODateTime', () => {
  it('formats a local date and time without seconds', () => {
    expect(formatISODateTime(new Date(2013, 7, 12, 14, 30))).toBe(
      '2013-08-12T14:30',
    );
  });

  it('includes seconds when they are set', () => {
    expect(formatISODateTime(new Date(2013, 7, 12, 14, 30, 45))).toBe(
      '2013-08-12T14:30:45',
    );
  });
});

describe('formatTimeValue', () => {
  it('formats hours and minutes', () => {
    expect(formatTimeValue(new Date(2013, 7, 12, 9, 5))).toBe('09:05');
  });

  it('formats seconds when asked to', () => {
    expect(formatTimeValue(new Date(2013, 7, 12, 9, 5, 3), true)).toBe(
      '09:05:03',
    );
  });
});

describe('withTimeValue', () => {
  const date = new Date(2013, 7, 12, 14, 30, 45);

  it('applies a time to a date', () => {
    expect(withTimeValue(date, '09:15')).toEqual(new Date(2013, 7, 12, 9, 15));
    expect(withTimeValue(date, '09:15:30')).toEqual(
      new Date(2013, 7, 12, 9, 15, 30),
    );
    expect(withTimeValue(date, '9:15')).toEqual(new Date(2013, 7, 12, 9, 15));
    expect(withTimeValue(date, '23:59:59')).toEqual(
      new Date(2013, 7, 12, 23, 59, 59),
    );
  });

  it('leaves the date unchanged for values that are not a time', () => {
    expect(withTimeValue(date, '')).toBe(date);
    expect(withTimeValue(date, 'nope')).toBe(date);
  });

  it('leaves the date unchanged for out of range times', () => {
    // An out of range time would otherwise overflow into the following day.
    expect(withTimeValue(date, '24:00')).toBe(date);
    expect(withTimeValue(date, '12:60')).toBe(date);
    expect(withTimeValue(date, '12:30:60')).toBe(date);
    expect(withTimeValue(date, '99:99')).toBe(date);
  });
});

describe('getMonthLabels', () => {
  it('returns all twelve months', () => {
    const labels = getMonthLabels('en-US');
    expect(labels).toHaveLength(12);
    expect(labels[7]).toEqual({ long: 'August', short: 'Aug' });
  });
});

describe('isDateUnavailable', () => {
  it('respects the min and max bounds', () => {
    const bounds = { max: new Date(2013, 7, 20), min: new Date(2013, 7, 10) };
    expect(isDateUnavailable(new Date(2013, 7, 9), bounds)).toBe(true);
    expect(isDateUnavailable(new Date(2013, 7, 10), bounds)).toBe(false);
    expect(isDateUnavailable(new Date(2013, 7, 21), bounds)).toBe(true);
  });

  it('respects the isDateDisabled callback', () => {
    expect(
      isDateUnavailable(new Date(2013, 7, 12), {
        isDateDisabled: date => date.getDate() === 12,
      }),
    ).toBe(true);
  });
});

describe('isMonthUnavailable', () => {
  it('is only unavailable when no day of the month is in bounds', () => {
    const min = new Date(2013, 7, 31);
    expect(isMonthUnavailable(new Date(2013, 7, 1), { min })).toBe(false);
    expect(isMonthUnavailable(new Date(2013, 6, 1), { min })).toBe(true);
    const max = new Date(2013, 7, 1);
    expect(isMonthUnavailable(new Date(2013, 8, 1), { max })).toBe(true);
  });
});

describe('serializeDateValue', () => {
  const date = new Date(2013, 7, 12, 14, 30);

  it('serializes ISO dates, times and months', () => {
    expect(serializeDateValue(date, 'single', 'iso')).toBe('2013-08-12');
    expect(serializeDateValue(date, 'range', 'iso')).toBe('2013-08-12');
    expect(serializeDateValue(date, 'datetime', 'iso')).toBe(
      '2013-08-12T14:30',
    );
    expect(serializeDateValue(date, 'month', 'iso')).toBe('2013-08');
  });

  it('serializes Date values', () => {
    expect(serializeDateValue(date, 'single', 'date')).toEqual(
      new Date(2013, 7, 12),
    );
    expect(serializeDateValue(date, 'datetime', 'date')).toEqual(date);
    expect(serializeDateValue(date, 'month', 'date')).toEqual(
      new Date(2013, 7, 1),
    );
  });

  it('serializes empty selections', () => {
    expect(serializeDateValue(null, 'single', 'iso')).toBe('');
    expect(serializeDateValue(null, 'single', 'date')).toBeNull();
  });
});

describe('clampDate', () => {
  it('keeps dates within the bounds', () => {
    const min = new Date(2013, 7, 10);
    const max = new Date(2013, 7, 20);
    expect(clampDate(new Date(2013, 7, 1), { max, min })).toEqual(min);
    expect(clampDate(new Date(2013, 7, 25), { max, min })).toEqual(max);
    expect(clampDate(new Date(2013, 7, 15), { max, min })).toEqual(
      new Date(2013, 7, 15),
    );
  });
});
