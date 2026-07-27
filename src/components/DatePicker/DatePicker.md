# DatePicker

The `DatePicker` component is a form field that opens a calendar in a popover. It supports three selection modes:

- `single` - a single date, e.g. `Aug 12, 2013`
- `range` - a start and end date, e.g. `Aug 12, 2013 – Aug 20, 2013`
- `month` - a single month, e.g. `Aug 2013`

Both `DatePicker` and the standalone `Calendar` component render the markup that daisyUI's [calendar component](https://daisyui.com/components/calendar/) styles (the `react-day-picker` class names), so every color, radius and size comes from the active daisyUI theme. No calendar library or extra CSS is required.

## Form values

With the default `valueMode` of `'iso'`, values are stored as strings that match the native `date` and `month` inputs, which makes `DatePicker` a drop-in replacement for `<FormControl type="date" />`:

| Mode     | Stored value                                              |
| -------- | --------------------------------------------------------- |
| `single` | `'2013-08-12'`                                            |
| `range`  | `'2013-08-12'` in `name`, `'2013-08-20'` in `endName`     |
| `range`  | `{ from: '2013-08-12', to: '2013-08-20' }` (no `endName`) |
| `month`  | `'2013-08'`                                               |

Cleared values are stored as `''`. Pass `valueMode="date"` to store `Date` objects instead (`null` when empty); in `month` mode the `Date` is the first of the month.

## Props

- `anchor?: AnchorProps`: Where the popover is anchored. Defaults to `{ gap: 4, to: 'bottom start' }`.
- `buttonClassName?: string`: Class name applied to the popover trigger.
- `calendarClassName?: string`: Class name applied to the calendar.
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
- `max?: DateInput | null`: Latest selectable date. Accepts a `Date`, a timestamp, `yyyy-MM-dd` or `yyyy-MM`.
- `min?: DateInput | null`: Earliest selectable date.
- `mode?: 'single' | 'range' | 'month'`: Selection mode. Defaults to `'single'`.
- `name: Path<Values>`: Name of the field in the form.
- `onChange?: (value: Date | DateRange | null) => void`: Called after the form value is updated.
- `panelClassName?: string`: Class name applied to the popover panel.
- `placeholder?: string`: Text shown when nothing is selected.
- `portal?: boolean`: Renders the popover in a portal.
- `showDirty?: boolean`: Colors the trigger when the field is dirty.
- `showOutsideDays?: boolean`: Shows the days of the surrounding months. Defaults to `true`.
- `size?: InputSize`: Size of the trigger.
- `valueMode?: 'iso' | 'date'`: How the value is stored in form state. Defaults to `'iso'`.
- `weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6`: First day of the week. Defaults to `0` (Sunday).

## Usage

```tsx
import { useForm } from 'react-hook-form';
import { DatePicker, Form } from 'stratosphere-ui';

interface FormValues {
  fromDate: string;
  month: string;
  toDate: string;
}

export const FlightFilters = () => {
  const methods = useForm<FormValues>({
    defaultValues: { fromDate: '', month: '', toDate: '' },
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

Its `value` accepts `Date` objects, timestamps and ISO strings, and `onChange` always receives `Date` objects (a `{ from, to }` object in `range` mode, where `to` is `null` until the range is complete).

## Keyboard support

The calendar grid is a single tab stop. Once focused:

- **Arrow keys** move by one day, or one week vertically. In `month` mode they move by one month, or one row of months vertically.
- **Page Up / Page Down** move by one month, or by one year in `month` mode.
- **Home / End** move to the start or end of the week, or to January and December in `month` mode.
- **Enter / Space** select the focused date.

Focus follows the selection into the neighboring month or year, and never moves past `min` or `max`.
