import { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { Form } from '../Form';
import { SecurityCodeInput } from './SecurityCodeInput';
import { defaultSecurityCodeInputValues } from './constants';

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
        code: defaultSecurityCodeInputValues,
      },
    });
    return (
      <Form methods={methods} onFormSubmit={() => null}>
        <SecurityCodeInput {...args} />
      </Form>
    );
  },
};
