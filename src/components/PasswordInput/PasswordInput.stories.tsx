import { Story, Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { Form } from '../Form';
import { PasswordInput, PasswordInputProps } from './PasswordInput';

export default {
  title: 'PasswordInput',
  component: PasswordInput,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta;

interface FormValues {
  field1: string;
}

export const Default: Story<PasswordInputProps<FormValues, string>> = args => {
  const methods = useForm();
  return (
    <Form methods={methods} onFormSubmit={() => null}>
      <PasswordInput {...args} />
    </Form>
  );
};

Default.args = {
  isRequired: true,
  labelText: 'Password',
  name: 'field1',
};
