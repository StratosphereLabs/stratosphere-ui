import { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { Form } from '../Form';
import { DatePicker } from './DatePicker';

interface FormValues {
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

const meta: Meta<typeof DatePicker> = {
  title: 'DatePicker',
  component: DatePicker,
};

export default meta;

type Story = StoryObj<typeof DatePicker<FormValues>>;

/** Shows the current form state so each story doubles as a value reference. */
const FormWrapper = ({
  children,
  defaultValues,
}: {
  children: React.ReactNode;
  defaultValues?: Partial<FormValues>;
}) => {
  const methods = useForm<FormValues>({
    defaultValues: { ...DEFAULT_VALUES, ...defaultValues },
  });
  const values = methods.watch();
  return (
    <Form
      className="flex h-96 w-72 flex-col gap-4"
      methods={methods}
      onFormSubmit={() => null}
    >
      {children}
      <pre className="text-xs opacity-60">
        {JSON.stringify(values, null, 2)}
      </pre>
    </Form>
  );
};

export const SingleDate: Story = {
  args: {
    labelText: 'Departure Date',
    name: 'singleDate',
  },
  render: args => (
    <FormWrapper>
      <DatePicker<FormValues> {...args} />
    </FormWrapper>
  ),
};

export const WithDefaultValue: Story = {
  args: {
    labelText: 'Departure Date',
    name: 'singleDate',
  },
  render: args => (
    <FormWrapper defaultValues={{ singleDate: '2013-08-12' }}>
      <DatePicker<FormValues> {...args} />
    </FormWrapper>
  ),
};

export const DateAndTime: Story = {
  args: {
    labelText: 'Departure',
    mode: 'datetime',
    name: 'dateTime',
  },
  render: args => (
    <FormWrapper defaultValues={{ dateTime: '2013-08-12T14:30' }}>
      <DatePicker<FormValues> {...args} />
    </FormWrapper>
  ),
};

export const DateAndTimeWithSeconds: Story = {
  args: {
    isClearable: true,
    labelText: 'Departure',
    mode: 'datetime',
    name: 'dateTime',
    showSeconds: true,
    timeLabel: 'Departure time',
  },
  render: args => (
    <FormWrapper defaultValues={{ dateTime: '2013-08-12T14:30:45' }}>
      <DatePicker<FormValues> {...args} />
    </FormWrapper>
  ),
};

/** Two months are shown side by side from 40rem up, and one below it. */
export const DateRangeWithTwoFields: Story = {
  args: {
    endName: 'toDate',
    labelText: 'Flight Dates',
    mode: 'range',
    name: 'fromDate',
  },
  render: args => (
    <FormWrapper
      defaultValues={{ fromDate: '2013-08-12', toDate: '2013-08-20' }}
    >
      <DatePicker<FormValues> {...args} />
    </FormWrapper>
  ),
};

export const DateRangeAsObject: Story = {
  args: {
    labelText: 'Flight Dates',
    mode: 'range',
    name: 'singleDate',
  },
  render: args => (
    <FormWrapper>
      <DatePicker<FormValues> {...args} />
    </FormWrapper>
  ),
};

export const SingleMonth: Story = {
  args: {
    labelText: 'Month',
    mode: 'month',
    name: 'month',
  },
  render: args => (
    <FormWrapper defaultValues={{ month: '2013-08' }}>
      <DatePicker<FormValues> {...args} />
    </FormWrapper>
  ),
};

export const Clearable: Story = {
  args: {
    isClearable: true,
    labelText: 'Departure Date',
    name: 'singleDate',
  },
  render: args => (
    <FormWrapper defaultValues={{ singleDate: '2013-08-12' }}>
      <DatePicker<FormValues> {...args} />
    </FormWrapper>
  ),
};

export const WithMinAndMax: Story = {
  args: {
    labelText: 'Departure Date',
    max: '2013-08-20',
    min: '2013-08-05',
    name: 'singleDate',
  },
  render: args => (
    <FormWrapper defaultValues={{ singleDate: '2013-08-12' }}>
      <DatePicker<FormValues> {...args} />
    </FormWrapper>
  ),
};

/** The arrows on their own, i.e. the caption of the calendar before dropdowns. */
export const WithCaptionLabel: Story = {
  args: {
    captionLayout: 'label',
    labelText: 'Departure Date',
    name: 'singleDate',
  },
  render: args => (
    <FormWrapper defaultValues={{ singleDate: '2013-08-12' }}>
      <DatePicker<FormValues> {...args} />
    </FormWrapper>
  ),
};

export const Small: Story = {
  args: {
    labelText: 'Departure Date',
    name: 'singleDate',
    size: 'sm',
  },
  render: args => (
    <FormWrapper defaultValues={{ singleDate: '2013-08-12' }}>
      <DatePicker<FormValues> {...args} />
    </FormWrapper>
  ),
};

export const WithError: Story = {
  args: {
    isRequired: true,
    labelText: 'Departure Date',
    name: 'singleDate',
  },
  render: args => {
    const methods = useForm<FormValues>({ defaultValues: DEFAULT_VALUES });
    methods.setError('singleDate', { message: 'Please select a date' });
    return (
      <Form
        className="flex h-96 w-72 flex-col"
        methods={methods}
        onFormSubmit={() => null}
      >
        <DatePicker<FormValues> {...args} />
      </Form>
    );
  },
};
