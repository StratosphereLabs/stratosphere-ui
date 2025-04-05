import { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { Form } from '../Form';
import { SecurityCodeInput } from './SecurityCodeInput';

const meta: Meta<typeof SecurityCodeInput> = {
  title: 'SecurityCodeInput',
  component: SecurityCodeInput,
};

export default meta;

type Story = StoryObj<typeof SecurityCodeInput>;

export const Default: Story = {
  args: {
    name: 'code',
  },
  render: args => {
    const methods = useForm({
      defaultValues: {
        code: {
          digit1: '',
          digit2: '',
          digit3: '',
          digit4: '',
          digit5: '',
          digit6: '',
        },
      },
    });
    return (
      <Form methods={methods} onFormSubmit={() => null}>
        <SecurityCodeInput {...args} />
      </Form>
    );
  },
};
