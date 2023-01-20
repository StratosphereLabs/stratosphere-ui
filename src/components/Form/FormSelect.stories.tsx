import { Story, Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { Form } from './Form';
import { FormSelect, FormSelectProps } from './FormSelect';

export default {
  title: 'FormSelect',
  component: FormSelect,
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

export const Default: Story<FormSelectProps<DataItem, FormValues>> = args => {
  const methods = useForm();
  return (
    <Form className="h-60 w-full" methods={methods} onFormSubmit={() => null}>
      <FormSelect {...args} />
    </Form>
  );
};

Default.args = {
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
