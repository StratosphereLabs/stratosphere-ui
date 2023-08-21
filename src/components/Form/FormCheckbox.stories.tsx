import { Story, Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { Form } from './Form';
import { FormCheckbox, FormCheckboxProps } from './FormCheckbox';

export default {
  title: 'FormCheckbox',
  component: FormCheckbox,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta;

interface FormValues {
  field1: boolean;
}

export const Default: Story<FormCheckboxProps<FormValues>> = args => {
  const methods = useForm();
  return (
    <Form methods={methods} onFormSubmit={() => null}>
      <FormCheckbox {...args} />
    </Form>
  );
};

Default.args = {
  labelText: 'Label Text',
  name: 'field1',
};

export const WithDefaultValue: Story<FormCheckboxProps<FormValues>> = args => {
  const methods = useForm({
    defaultValues: {
      field1: true,
    },
  });
  return (
    <Form methods={methods} onFormSubmit={() => null}>
      <FormCheckbox {...args} />
    </Form>
  );
};

WithDefaultValue.args = {
  labelText: 'Label Text',
  name: 'field1',
};
