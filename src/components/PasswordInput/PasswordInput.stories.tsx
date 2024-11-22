import { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { Form } from '../Form';
import { PasswordInput } from './PasswordInput';

interface FormValues {
  field1: string;
}

const meta: Meta<typeof PasswordInput> = {
  title: 'PasswordInput',
  component: PasswordInput,
  decorators: [
    Story => {
      const methods = useForm<FormValues>();
      return (
        <Form<FormValues>
          className="w-60"
          methods={methods}
          onFormSubmit={() => null}
        >
          <Story />
        </Form>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {
  args: {
    isRequired: true,
    labelText: 'Password',
    name: 'field1',
  },
};
