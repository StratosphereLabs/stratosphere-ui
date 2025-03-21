import { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { Form } from './Form';
import { FormCheckbox } from './FormCheckbox';

const meta: Meta<typeof FormCheckbox> = {
  title: 'FormCheckbox',
  component: FormCheckbox,
};

export default meta;

type Story = StoryObj<typeof FormCheckbox>;

export const Default: Story = {
  args: {
    labelText: 'Label Text',
    name: 'field1',
  },
  render: args => {
    const methods = useForm();
    return (
      <Form methods={methods} onFormSubmit={() => null}>
        <FormCheckbox {...args} />
      </Form>
    );
  },
};

export const WithDefaultValue: Story = {
  args: {
    labelText: 'Label Text',
    name: 'field1',
  },
  render: args => {
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
  },
};
