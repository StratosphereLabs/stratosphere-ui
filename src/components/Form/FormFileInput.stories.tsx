import { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { Form } from './Form';
import { FormFileInput } from './FormFileInput';

const meta: Meta<typeof FormFileInput> = {
  title: 'FormFileInput',
  component: FormFileInput,
};

export default meta;

type Story = StoryObj<typeof FormFileInput>;

export const Default: Story = {
  args: {
    name: 'field1',
  },
  render: args => {
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
  },
};
