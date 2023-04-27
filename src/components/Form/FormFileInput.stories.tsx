import { Story, Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { Form } from './Form';
import { FormFileInput, FormFileInputProps } from './FormFileInput';

export default {
  title: 'FormFileInput',
  component: FormFileInput,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta;

interface FormValues {
  field1: string;
}

export const Default: Story<FormFileInputProps<FormValues>> = args => {
  const methods = useForm({
    defaultValues: {
      field1: null,
    },
  });
  return (
    <Form methods={methods} onFormSubmit={() => null}>
      <FormFileInput {...args} />
    </Form>
  );
};

Default.args = {
  name: 'field1',
};
