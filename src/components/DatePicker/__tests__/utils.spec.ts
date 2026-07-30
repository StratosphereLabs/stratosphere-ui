import {
  clampDate,
  formatDateText,
  formatDateTimeText,
  formatISODate,
  formatISODateTime,
  formatISOMonth,
  formatMonthText,
  formatTimeValue,
  getDropdownMonthRange,
  getMonthLabels,
  isDateUnavailable,
  isMonthBeforeDay,
  isMonthUnavailable,
  parseDate,
  parseDateRange,
  parseDateRangeText,
  parseDateText,
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
    expect(parseDateTime('2013-08')?.getHours()).toBe(0);
  });

  it('keeps the time of strings the Date constructor understands', () => {
    // A zoned date-time is not an ISO date-time input value, so it is parsed by
    // the `Date` constructor and is only shifted by the local UTC offset.
    const utc = parseDateTime('2013-08-12T14:30:45Z');
    expect(utc?.getTime()).toBe(Date.UTC(2013, 7, 12, 14, 30, 45));
    expect(parseDateTime('Aug 12, 2013 14:30:45')?.getHours()).toBe(14);
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

describe('parseDateText', () => {
  const REFERENCE = new Date(2013, 7, 12);
  const options = { locale: 'en-US', referenceDate: REFERENCE };

  it('reads numeric dates in the order of the locale', () => {
    expect(parseDateText('8/20/2013', options)).toEqual(new Date(2013, 7, 20));
    expect(parseDateText('8-20-2013', options)).toEqual(new Date(2013, 7, 20));
    expect(parseDateText('20/8/2013', { ...options, locale: 'en-GB' })).toEqual(
      new Date(2013, 7, 20),
    );
  });

  it('reads named months, in full or abbreviated', () => {
    expect(parseDateText('August 20, 2013', options)).toEqual(
      new Date(2013, 7, 20),
    );
    expect(parseDateText('20 aug 2013', options)).toEqual(
      new Date(2013, 7, 20),
    );
    expect(parseDateText('sept 5 2013', options)).toEqual(new Date(2013, 8, 5));
    expect(parseDateText('2013 Aug 20', options)).toEqual(
      new Date(2013, 7, 20),
    );
  });

  it('reads ISO and compact values', () => {
    expect(parseDateText('2013-08-20', options)).toEqual(new Date(2013, 7, 20));
    expect(parseDateText('20130820', options)).toEqual(new Date(2013, 7, 20));
  });

  it('fills in the parts the text leaves out', () => {
    expect(parseDateText('8/20', options)).toEqual(new Date(2013, 7, 20));
    expect(parseDateText('aug 20', options)).toEqual(new Date(2013, 7, 20));
    expect(parseDateText('20', options)).toEqual(new Date(2013, 7, 20));
  });

  it('reads two digit years as the closest century', () => {
    expect(parseDateText('8/20/13', options)).toEqual(new Date(2013, 7, 20));
    expect(parseDateText('8/20/98', options)).toEqual(new Date(1998, 7, 20));
  });

  it('reads a month and a year in month mode', () => {
    const monthOptions = { ...options, mode: 'month' as const };
    expect(parseDateText('Aug 2013', monthOptions)).toEqual(
      new Date(2013, 7, 1),
    );
    expect(parseDateText('8/2013', monthOptions)).toEqual(new Date(2013, 7, 1));
    expect(parseDateText('2013-08', monthOptions)).toEqual(
      new Date(2013, 7, 1),
    );
    expect(parseDateText('201308', monthOptions)).toEqual(new Date(2013, 7, 1));
  });

  it('reads a 12 or 24 hour time in datetime mode', () => {
    const dateTimeOptions = { ...options, mode: 'datetime' as const };
    expect(parseDateText('Aug 20, 2013, 2:30 PM', dateTimeOptions)).toEqual(
      new Date(2013, 7, 20, 14, 30),
    );
    expect(parseDateText('8/20/2013 14:30', dateTimeOptions)).toEqual(
      new Date(2013, 7, 20, 14, 30),
    );
    expect(parseDateText('8/20/2013 12:05 am', dateTimeOptions)).toEqual(
      new Date(2013, 7, 20, 0, 5),
    );
    expect(parseDateText('2013-08-20T14:30:45', dateTimeOptions)).toEqual(
      new Date(2013, 7, 20, 14, 30, 45),
    );
  });

  it('keeps the time of the reference date when none is typed', () => {
    expect(
      parseDateText('8/20/2013', {
        ...options,
        mode: 'datetime',
        referenceDate: new Date(2013, 7, 12, 14, 30),
      }),
    ).toEqual(new Date(2013, 7, 20, 14, 30));
    expect(
      parseDateText('8/20/2013', { ...options, mode: 'datetime' }),
    ).toEqual(new Date(2013, 7, 20));
  });

  it('returns null for text that is not a date', () => {
    expect(parseDateText('', options)).toBeNull();
    expect(parseDateText('not a date', options)).toBeNull();
    expect(parseDateText('13/20/2013', options)).toBeNull();
    expect(parseDateText('2/30/2013', options)).toBeNull();
    expect(
      parseDateText('8/20/2013 25:00', { ...options, mode: 'datetime' }),
    ).toBeNull();
    expect(parseDateText('ju 20 2013', options)).toBeNull();
  });
});

describe('parseDateText and the formatted value', () => {
  it('reads back the text each locale is given', () => {
    const date = new Date(2013, 7, 20);
    ['en-US', 'en-GB', 'de-DE', 'fr-FR', 'ja-JP'].forEach(locale => {
      expect(parseDateText(formatDateText(date, locale), { locale })).toEqual(
        date,
      );
      expect(
        parseDateText(
          formatDateTimeText(new Date(2013, 7, 20, 14, 30), locale),
          { locale, mode: 'datetime' },
        ),
      ).toEqual(new Date(2013, 7, 20, 14, 30));
      expect(
        parseDateText(formatMonthText(date, locale), { locale, mode: 'month' }),
      ).toEqual(new Date(2013, 7, 1));
    });
  });
});

describe('parseDateRangeText', () => {
  const options = { locale: 'en-US', referenceDate: new Date(2013, 7, 12) };

  it('reads the two dates of a range', () => {
    expect(parseDateRangeText('8/12/2013 - 8/20/2013', options)).toEqual({
      from: new Date(2013, 7, 12),
      to: new Date(2013, 7, 20),
    });
    expect(parseDateRangeText('Aug 12, 2013 – Aug 20, 2013', options)).toEqual({
      from: new Date(2013, 7, 12),
      to: new Date(2013, 7, 20),
    });
    expect(parseDateRangeText('8/12/2013 to 8/20/2013', options)).toEqual({
      from: new Date(2013, 7, 12),
      to: new Date(2013, 7, 20),
    });
  });

  it('reads a hyphen written tight against the dates', () => {
    expect(parseDateRangeText('8/12/2013-8/20/2013', options)).toEqual({
      from: new Date(2013, 7, 12),
      to: new Date(2013, 7, 20),
    });
    expect(parseDateRangeText('Aug 12-Aug 20', options)).toEqual({
      from: new Date(2013, 7, 12),
      to: new Date(2013, 7, 20),
    });
  });

  // A hyphen also separates the parts of a single date, so the ones that carry
  // more than one of them stay a lone start rather than being split apart.
  it('keeps a hyphenated single date whole', () => {
    expect(parseDateRangeText('8-12-2013', options)).toEqual({
      from: new Date(2013, 7, 12),
      to: null,
    });
    expect(parseDateRangeText('2013-08-12', options)).toEqual({
      from: new Date(2013, 7, 12),
      to: null,
    });
  });

  it('flips a range that is typed backwards', () => {
    expect(parseDateRangeText('8/20/2013 - 8/12/2013', options)).toEqual({
      from: new Date(2013, 7, 12),
      to: new Date(2013, 7, 20),
    });
  });

  it('leaves the end empty while only the start is typed', () => {
    expect(parseDateRangeText('8/12/2013', options)).toEqual({
      from: new Date(2013, 7, 12),
      to: null,
    });
    expect(parseDateRangeText('Aug 12, 2013 – …', options)).toEqual({
      from: new Date(2013, 7, 12),
      to: null,
    });
  });

  it('returns null when either end is not a date', () => {
    expect(parseDateRangeText('', options)).toBeNull();
    expect(parseDateRangeText('nope - 8/20/2013', options)).toBeNull();
    expect(parseDateRangeText('8/12/2013 - nope', options)).toBeNull();
  });
});

describe('isMonthBeforeDay', () => {
  it('follows the numeric date format of the locale', () => {
    expect(isMonthBeforeDay('en-US')).toBe(true);
    expect(isMonthBeforeDay('en-GB')).toBe(false);
    expect(isMonthBeforeDay('de-DE')).toBe(false);
  });
});

describe('getDropdownMonthRange', () => {
  const today = new Date(2013, 7, 12);

  it('spans the years around today when there are no bounds', () => {
    const { end, start } = getDropdownMonthRange({}, today);
    expect(start.getFullYear()).toBe(1913);
    expect(end.getFullYear()).toBe(2023);
  });

  it('uses the bounds it is given', () => {
    const { end, start } = getDropdownMonthRange(
      { max: new Date(2015, 5, 10), min: new Date(2010, 2, 4) },
      today,
    );
    expect(start).toEqual(new Date(2010, 2, 4));
    expect(end).toEqual(new Date(2015, 5, 10));
  });
});
