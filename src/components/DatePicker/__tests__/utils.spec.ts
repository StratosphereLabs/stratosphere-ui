import {
  clampDate,
  formatISODate,
  formatISOMonth,
  getCalendarWeeks,
  getMonthLabels,
  getNextDateRange,
  getRangePosition,
  getWeekdayLabels,
  isDateUnavailable,
  isMonthUnavailable,
  parseDate,
  parseDateRange,
  serializeDateValue,
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

describe('getCalendarWeeks', () => {
  it('includes outside days to fill the first and last week', () => {
    const weeks = getCalendarWeeks(new Date(2013, 7, 1));
    expect(weeks[0][0].getMonth()).toBe(6);
    expect(weeks[0][0].getDate()).toBe(28);
    expect(weeks[0]).toHaveLength(7);
  });

  it('starts weeks on the requested weekday', () => {
    const weeks = getCalendarWeeks(new Date(2013, 7, 1), 1);
    expect(weeks[0][0].getDay()).toBe(1);
  });

  it('renders six weeks when fixedWeeks is set', () => {
    // February 2015 starts on a Sunday and is exactly four weeks long.
    expect(getCalendarWeeks(new Date(2015, 1, 1), 0, true)).toHaveLength(6);
    expect(getCalendarWeeks(new Date(2015, 1, 1))).toHaveLength(4);
  });
});

describe('getWeekdayLabels', () => {
  it('returns seven labels starting on the requested weekday', () => {
    expect(getWeekdayLabels(0, 'en-US').map(({ short }) => short)).toEqual([
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
    ]);
    expect(getWeekdayLabels(1, 'en-US')[0].long).toBe('Monday');
  });
});

describe('getMonthLabels', () => {
  it('returns all twelve months', () => {
    const labels = getMonthLabels('en-US');
    expect(labels).toHaveLength(12);
    expect(labels[7]).toEqual({ long: 'August', short: 'Aug' });
  });
});

describe('getNextDateRange', () => {
  it('starts a new range when nothing is selected', () => {
    const date = new Date(2013, 7, 12);
    expect(getNextDateRange({ from: null, to: null }, date)).toEqual({
      from: date,
      to: null,
    });
  });

  it('completes the range with a later date', () => {
    const from = new Date(2013, 7, 12);
    const to = new Date(2013, 7, 20);
    expect(getNextDateRange({ from, to: null }, to)).toEqual({ from, to });
  });

  it('flips the range when the second date is earlier', () => {
    const from = new Date(2013, 7, 12);
    const earlier = new Date(2013, 7, 5);
    expect(getNextDateRange({ from, to: null }, earlier)).toEqual({
      from: earlier,
      to: from,
    });
  });

  it('starts over once the range is complete', () => {
    const from = new Date(2013, 7, 12);
    const to = new Date(2013, 7, 20);
    const next = new Date(2013, 7, 25);
    expect(getNextDateRange({ from, to }, next)).toEqual({
      from: next,
      to: null,
    });
  });
});

describe('getRangePosition', () => {
  const range = { from: new Date(2013, 7, 12), to: new Date(2013, 7, 15) };

  it('identifies the start, middle and end of the range', () => {
    expect(getRangePosition(new Date(2013, 7, 12), range)).toBe('start');
    expect(getRangePosition(new Date(2013, 7, 13), range)).toBe('middle');
    expect(getRangePosition(new Date(2013, 7, 15), range)).toBe('end');
    expect(getRangePosition(new Date(2013, 7, 16), range)).toBeNull();
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
  const date = new Date(2013, 7, 12);

  it('serializes ISO dates and months', () => {
    expect(serializeDateValue(date, 'single', 'iso')).toBe('2013-08-12');
    expect(serializeDateValue(date, 'range', 'iso')).toBe('2013-08-12');
    expect(serializeDateValue(date, 'month', 'iso')).toBe('2013-08');
  });

  it('serializes Date values', () => {
    expect(serializeDateValue(date, 'single', 'date')).toEqual(date);
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
