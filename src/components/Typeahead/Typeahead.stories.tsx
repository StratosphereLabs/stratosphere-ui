import { zodResolver } from '@hookform/resolvers/zod';
import { Story, Meta } from '@storybook/react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from '../Form';
import { TypeaheadSelect, TypeaheadSelectProps } from '../Typeahead';

export default {
  title: 'TypeaheadSelect',
  component: TypeaheadSelect,
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

export const SingleSelect: Story<
  TypeaheadSelectProps<DataItem, FormValues>
> = args => {
  const methods = useForm();
  return (
    <Form className="w-64 h-64" methods={methods} onFormSubmit={() => {}}>
      <TypeaheadSelect {...args} />
    </Form>
  );
};

SingleSelect.args = {
  labelText: 'Field Label',
  name: 'field1',
  getItemText: ({ label }) => label,
  getItemValue: ({ value }) => value,
  options: [
    { id: '1', label: 'Item 1' },
    { id: '2', label: 'Item 2' },
    { id: '3', label: 'Item 3' },
  ],
  placeholder: 'Search...',
};

export const MultiSelect: Story<
  TypeaheadSelectProps<DataItem, FormValues>
> = args => {
  const methods = useForm();
  return (
    <Form className="w-64 h-80" methods={methods} onFormSubmit={() => {}}>
      <TypeaheadSelect {...args} />
    </Form>
  );
};

MultiSelect.args = {
  labelText: 'Field Label',
  name: 'field1',
  getItemText: ({ label }) => label,
  getItemValue: ({ id }) => id,
  options: [
    { id: '1', label: 'Item 1' },
    { id: '2', label: 'Item 2' },
    { id: '3', label: 'Item 3' },
  ],
  multi: true,
  placeholder: 'Select...',
};
