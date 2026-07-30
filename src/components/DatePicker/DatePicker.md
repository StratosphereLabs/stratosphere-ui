# DatePicker

The `DatePicker` component is a form field that opens a calendar in a popover. It supports four selection modes:

- `single` - a single date, e.g. `Aug 12, 2013`
- `datetime` - a date and a time, e.g. `Aug 12, 2013, 2:30 PM`
- `range` - a start and end date, e.g. `Aug 12, 2013 – Aug 20, 2013`
- `month` - a single month, e.g. `Aug 2013`

`DatePicker` follows shadcn/ui's [date picker](https://ui.shadcn.com/docs/components/base/date-picker) composition of a popover and a [calendar](https://ui.shadcn.com/docs/components/base/calendar), so the day grid is rendered by [React DayPicker](https://daypicker.dev). It keeps React DayPicker's default class names instead of shadcn's Tailwind ones, which is exactly the markup daisyUI's [calendar component](https://daisyui.com/components/calendar/) styles - every color, radius and size comes from the active daisyUI theme, and no extra CSS is required.

## Form values

With the default `valueMode` of `'iso'`, values are stored as strings that match the native `date`, `datetime-local` and `month` inputs, which makes `DatePicker` a drop-in replacement for `<FormControl type="date" />`:

| Mode       | Stored value                                                |
| ---------- | ----------------------------------------------------------- |
| `single`   | `'2013-08-12'`                                              |
| `datetime` | `'2013-08-12T14:30'` (`'2013-08-12T14:30:45'` with seconds) |
| `range`    | `'2013-08-12'` in `name`, `'2013-08-20'` in `endName`       |
| `range`    | `{ from: '2013-08-12', to: '2013-08-20' }` (no `endName`)   |
| `month`    | `'2013-08'`                                                 |

Cleared values are stored as `''`. Pass `valueMode="date"` to store `Date` objects instead (`null` when empty); in `month` mode the `Date` is the first of the month, and in `datetime` mode it keeps its time of day.

## Props

- `anchor?: AnchorProps`: Where the popover is anchored. Defaults to `{ gap: 4, to: 'bottom start' }`.
- `buttonClassName?: string`: Class name applied to the popover trigger.
- `calendarClassName?: string`: Class name applied to the calendar.
- `captionLayout?: 'label' | 'dropdown' | 'dropdown-months' | 'dropdown-years'`: Navigate the caption with dropdowns instead of the arrows. Defaults to `'label'`.
- `className?: string`: Class name applied to the field.
- `color?: InputColor`: Color of the trigger. Overridden by the error and dirty colors.
- `disabled?: boolean`: Prevents the calendar from opening.
- `endName?: Path<Values>`: In `range` mode, a second field that stores the end date. When omitted, the range is stored as a `{ from, to }` object on `name`.
- `fixedWeeks?: boolean`: Always render six weeks so the calendar height stays the same. Defaults to `true`.
- `hideCalendarIcon?: true`: Hides the calendar icon in the trigger.
- `hideErrorMessage?: boolean`: Hides the validation message.
- `isClearable?: boolean`: Renders a **Clear** button in the calendar footer.
- `isDateDisabled?: (date: Date) => boolean`: Disables individual dates. In `month` mode it receives the first of the month.
- `isRequired?: boolean`: Adds the required marker to the label.
- `labelText?: string`: Label of the field.
- `locale?: string`: BCP 47 locale tag used for all date formatting. Defaults to the runtime locale.
- `max?: DateInput | null`: Latest selectable date. Accepts a `Date`, a timestamp, `yyyy-MM-dd`, `yyyy-MM-ddTHH:mm` or `yyyy-MM`. In `datetime` mode a time of day other than midnight also bounds the time field on that day.
- `min?: DateInput | null`: Earliest selectable date, with the same time of day handling as `max`.
- `mode?: 'single' | 'datetime' | 'range' | 'month'`: Selection mode. Defaults to `'single'`.
- `name: Path<Values>`: Name of the field in the form.
- `numberOfMonths?: number`: How many months are rendered side by side. Defaults to two in `range` mode on screens of 40rem or wider, and to one everywhere else.
- `onChange?: (value: Date | DateRange | null) => void`: Called after the form value is updated.
- `panelClassName?: string`: Class name applied to the popover panel.
- `placeholder?: string`: Text shown when nothing is selected.
- `portal?: boolean`: Renders the popover in a portal.
- `showDirty?: boolean`: Colors the trigger when the field is dirty.
- `showOutsideDays?: boolean`: Shows the days of the surrounding months. Defaults to `true`.
- `showSeconds?: boolean`: Adds seconds to the time field of `datetime` mode.
- `showWeekNumber?: boolean`: Adds a column with the week numbers.
- `size?: InputSize`: Size of the trigger.
- `timeLabel?: string`: Label of the time field of `datetime` mode. Defaults to `Time`.
- `valueMode?: 'iso' | 'date'`: How the value is stored in form state. Defaults to `'iso'`.
- `weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6`: First day of the week. Defaults to `0` (Sunday).

## Usage

```tsx
import { useForm } from 'react-hook-form';
import { DatePicker, Form } from 'stratosphere-ui';

interface FormValues {
  departure: string;
  fromDate: string;
  month: string;
  toDate: string;
}

export const FlightFilters = () => {
  const methods = useForm<FormValues>({
    defaultValues: { departure: '', fromDate: '', month: '', toDate: '' },
  });
  return (
    <Form methods={methods} onFormSubmit={values => console.log(values)}>
      {/* Stores '2013-08-12' in fromDate and '2013-08-20' in toDate */}
      <DatePicker<FormValues>
        endName="toDate"
        isClearable
        labelText="Flight Dates"
        mode="range"
        name="fromDate"
        size="sm"
      />
      {/* Stores '2013-08-12T14:30' in departure */}
      <DatePicker<FormValues>
        labelText="Departure"
        mode="datetime"
        name="departure"
        size="sm"
      />
      {/* Stores '2013-08' in month */}
      <DatePicker<FormValues>
        labelText="Month"
        max={new Date()}
        mode="month"
        name="month"
        size="sm"
      />
    </Form>
  );
};
```

## Selection behavior

- `single` closes the popover as soon as a date is picked.
- `datetime` keeps it open after the date is picked so that the time can be set, and closes on **Done**. The time defaults to midnight and is kept when another date is picked.

  `min` and `max` are date bounds, so the earliest and latest day stay selectable, and a time of day on either bound restricts that day only - `max="2013-08-20T17:00"` allows all of August 20 up to 17:00. Midnight is read as a date-only bound, since that is what `'2013-08-20'` and `new Date(2013, 7, 20)` both resolve to, which keeps them meaning the whole day. The time field is bounded natively, so the browser validates it and its steppers stop at the bound, and a time carried over from another day is clamped into the bounds of the day it lands on.

- `range` needs two clicks: the first sets the start, the second sets the end and closes the popover. Clicking a day before the start flips the range around, and clicking the start again clears it. A range that is already complete, including one the calendar opened with, is replaced rather than edited, so the two clicks are always the same two. Two months are shown side by side when the screen is wide enough for them.
- `month` closes the popover as soon as a month is picked.

## Calendar

`Calendar` is the controlled calendar used inside `DatePicker`, and can be rendered on its own - for example inline in a filter panel:

```tsx
import { useState } from 'react';
import { Calendar, DateRange } from 'stratosphere-ui';

export const InlineRangeCalendar = () => {
  const [range, setRange] = useState<DateRange>({ from: null, to: null });
  return <Calendar mode="range" onChange={setRange} value={range} />;
};
```

Its `value` accepts `Date` objects, timestamps and ISO strings, and `onChange` always receives `Date` objects (a `{ from, to }` object in `range` mode, where `to` is `null` until the range is complete). It also takes `defaultMonth`, `month` and `onMonthChange` to control the displayed month, `footer` to render content below the grid, and `autoFocus` to move focus into the day grid on mount.

The calendar opens on `month` if it is controlled, then on `defaultMonth`, then on the month of the selection - the start of it in `range` mode - and on the current month when nothing is selected. Once it is open, a selection that changes from outside the calendar brings its month back into view, unless it is already one of the months on screen.

`Calendar` renders `DayCalendar` for the day modes and `MonthCalendar` for `month` mode; both are exported for the rare case that only one of them is needed.

## Keyboard support

The day grid is a single tab stop, and its keyboard support comes from React DayPicker: **arrow keys** move by one day or week, **Page Up / Page Down** by one month, **Home / End** to the start or end of the week, and **Enter / Space** select the focused day.

The `month` grid follows the same pattern, one month at a time:

- **Arrow keys** move by one month, or one row of months vertically.
- **Page Up / Page Down** move by one year.
- **Home / End** move to January and December.
- **Enter / Space** select the focused month.

Focus follows the selection into the neighboring month or year, and never moves past `min` or `max`.
