import { Story, Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { Select, SelectProps } from './Select';
import { Form } from '../Form';

export default {
  title: 'Select',
  component: Select,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta;

interface DataItem {
  [x: string]: string;
  id: string;
  label: string;
}

interface FormValues {
  field1: string;
}

export const Default: Story<SelectProps<DataItem, FormValues>> = args => {
  const methods = useForm();
  return (
    <Form className="h-60 w-60" methods={methods} onFormSubmit={() => null}>
      <Select {...args} />
    </Form>
  );
};

Default.args = {
  labelText: 'Field Label',
  name: 'field1',
  getItemText: ({ id, label }) => `${id} - ${label}`,
  formValueMode: 'item',
  options: [
    {
      id: '1',
      label: 'Item 1',
    },
    {
      id: '2',
      label: 'Item 2',
    },
    {
      id: '3',
      label: 'Item 3',
    },
  ],
};

export const WithDefaultValue: Story<
  SelectProps<DataItem, FormValues>
> = args => {
  const methods = useForm({
    defaultValues: {
      field1: {
        id: '2',
        label: 'Item 2',
      },
    },
  });
  return (
    <Form className="h-60 w-60" methods={methods} onFormSubmit={() => null}>
      <Select {...args} />
    </Form>
  );
};

WithDefaultValue.args = {
  labelText: 'Field Label',
  name: 'field1',
  getItemText: ({ id, label }) => `${id} - ${label}`,
  options: [
    {
      id: '1',
      label: 'Item 1',
    },
    {
      id: '2',
      label: 'Item 2',
    },
    {
      id: '3',
      label: 'Item 3',
    },
  ],
};

export const SelectMultiple: Story<
  SelectProps<DataItem, FormValues>
> = args => {
  const methods = useForm();
  return (
    <Form className="h-60 w-60" methods={methods} onFormSubmit={() => null}>
      <Select {...args} />
    </Form>
  );
};

SelectMultiple.args = {
  labelText: 'Field Label',
  multi: true,
  name: 'field1',
  getItemText: ({ id, label }) => `${id} - ${label}`,
  options: [
    {
      id: '1',
      label: 'Item 1',
    },
    {
      id: '2',
      label: 'Item 2',
    },
    {
      id: '3',
      label: 'Item 3',
    },
  ],
};

export const WithMultipleDefaultValues: Story<
  SelectProps<DataItem, FormValues>
> = args => {
  const methods = useForm({
    defaultValues: {
      field1: [
        {
          id: '2',
          label: 'Item 2',
        },
        {
          id: '3',
          label: 'Item 3',
        },
      ],
    },
  });
  return (
    <Form className="h-60 w-60" methods={methods} onFormSubmit={() => null}>
      <Select {...args} />
    </Form>
  );
};

WithMultipleDefaultValues.args = {
  labelText: 'Field Label',
  multi: true,
  name: 'field1',
  getItemText: ({ id, label }) => `${id} - ${label}`,
  options: [
    {
      id: '1',
      label: 'Item 1',
    },
    {
      id: '2',
      label: 'Item 2',
    },
    {
      id: '3',
      label: 'Item 3',
    },
  ],
};
