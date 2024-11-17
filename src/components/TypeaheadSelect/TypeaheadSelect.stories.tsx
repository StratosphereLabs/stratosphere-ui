import { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { Form } from '../Form';
import { TypeaheadSelect } from '.';

interface DataItem {
  [x: string]: string;
  id: string;
  label: string;
}

interface FormValues {
  field1: string;
}

const meta: Meta<typeof TypeaheadSelect<DataItem, FormValues>> = {
  title: 'TypeaheadSelect',
  component: TypeaheadSelect,
  decorators: [
    Story => {
      const methods = useForm();
      return (
        <Form className="h-80 w-64" methods={methods} onFormSubmit={() => null}>
          <Story />
        </Form>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof TypeaheadSelect<DataItem, FormValues>>;

export const SingleSelect: Story = {
  args: {
    labelText: 'Field Label',
    name: 'field1',
    getItemText: ({ label }: DataItem) => label,
    options: [
      { id: '1', label: 'Item 1' },
      { id: '2', label: 'Item 2' },
      { id: '3', label: 'Item 3' },
    ],
    placeholder: 'Select...',
  },
};

export const SingleSelectWithoutBadge: Story = {
  args: {
    disableSingleSelectBadge: true,
    labelText: 'Field Label',
    name: 'field1',
    getItemText: ({ label }: DataItem) => label,
    options: [
      { id: '1', label: 'Item 1' },
      { id: '2', label: 'Item 2' },
      { id: '3', label: 'Item 3' },
    ],
    placeholder: 'Select...',
  },
};

export const SingleSelectWithDefaultValue: Story = {
  args: {
    labelText: 'Field Label',
    name: 'field1',
    getItemText: ({ label }: DataItem) => label,
    options: [
      { id: '1', label: 'Item 1' },
      { id: '2', label: 'Item 2' },
      { id: '3', label: 'Item 3' },
    ],
    placeholder: 'Select...',
  },
};

export const MultiSelect: Story = {
  args: {
    className: 'min-w-[250px] max-w-[400px]',
    labelText: 'Field Label',
    name: 'field1',
    getItemText: ({ label }: DataItem) => label,
    options: [
      { id: '1', label: 'Item 1' },
      { id: '2', label: 'Item 2' },
      { id: '3', label: 'Item 3' },
    ],
    multi: true,
    placeholder: 'Select...',
  },
};

export const MultiSelectWithDefaultValues: Story = {
  args: {
    className: 'min-w-[250px] max-w-[400px]',
    labelText: 'Field Label',
    name: 'field1',
    getItemText: ({ label }: DataItem) => label,
    options: [
      { id: '1', label: 'Item 1' },
      { id: '2', label: 'Item 2' },
      { id: '3', label: 'Item 3' },
    ],
    multi: true,
    placeholder: 'Select...',
  },
};
