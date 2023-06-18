import { Story, Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { Form } from '../Form';
import { TypeaheadSelect, TypeaheadSelectProps } from '.';

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
    <Form className="h-80 w-64" methods={methods} onFormSubmit={() => null}>
      <TypeaheadSelect {...args} />
    </Form>
  );
};

SingleSelect.args = {
  labelText: 'Field Label',
  name: 'field1',
  getItemText: ({ label }) => label,
  options: [
    { id: '1', label: 'Item 1' },
    { id: '2', label: 'Item 2' },
    { id: '3', label: 'Item 3' },
  ],
  placeholder: 'Select...',
};

export const SingleSelectWithoutBadge: Story<
  TypeaheadSelectProps<DataItem, FormValues>
> = args => {
  const methods = useForm();
  return (
    <Form className="h-80 w-64" methods={methods} onFormSubmit={() => null}>
      <TypeaheadSelect {...args} />
    </Form>
  );
};

SingleSelectWithoutBadge.args = {
  disableSingleSelectBadge: true,
  labelText: 'Field Label',
  name: 'field1',
  getItemText: ({ label }) => label,
  options: [
    { id: '1', label: 'Item 1' },
    { id: '2', label: 'Item 2' },
    { id: '3', label: 'Item 3' },
  ],
  placeholder: 'Select...',
};

export const SingleSelectWithDefaultValue: Story<
  TypeaheadSelectProps<DataItem, FormValues>
> = args => {
  const methods = useForm({
    defaultValues: {
      field1: { id: '2', label: 'Item 2' },
    },
  });
  return (
    <Form className="h-80 w-64" methods={methods} onFormSubmit={() => null}>
      <TypeaheadSelect {...args} />
    </Form>
  );
};

SingleSelectWithDefaultValue.args = {
  labelText: 'Field Label',
  name: 'field1',
  getItemText: ({ label }) => label,
  options: [
    { id: '1', label: 'Item 1' },
    { id: '2', label: 'Item 2' },
    { id: '3', label: 'Item 3' },
  ],
  placeholder: 'Select...',
};

export const MultiSelect: Story<
  TypeaheadSelectProps<DataItem, FormValues>
> = args => {
  const methods = useForm();
  return (
    <Form className="h-80 w-64" methods={methods} onFormSubmit={() => null}>
      <TypeaheadSelect {...args} />
    </Form>
  );
};

MultiSelect.args = {
  className: 'min-w-[250px] max-w-[400px]',
  labelText: 'Field Label',
  name: 'field1',
  getItemText: ({ label }) => label,
  options: [
    { id: '1', label: 'Item 1' },
    { id: '2', label: 'Item 2' },
    { id: '3', label: 'Item 3' },
  ],
  multi: true,
  placeholder: 'Select...',
};

export const MultiSelectWithDefaultValues: Story<
  TypeaheadSelectProps<DataItem, FormValues>
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
    <Form className="h-80 w-64" methods={methods} onFormSubmit={() => null}>
      <TypeaheadSelect {...args} />
    </Form>
  );
};

MultiSelectWithDefaultValues.args = {
  className: 'min-w-[250px] max-w-[400px]',
  labelText: 'Field Label',
  name: 'field1',
  getItemText: ({ label }) => label,
  options: [
    { id: '1', label: 'Item 1' },
    { id: '2', label: 'Item 2' },
    { id: '3', label: 'Item 3' },
  ],
  multi: true,
  placeholder: 'Select...',
};
