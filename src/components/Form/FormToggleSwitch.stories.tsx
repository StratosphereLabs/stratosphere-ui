import { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { Form } from './Form';
import { FormToggleSwitch } from './FormToggleSwitch';

const meta: Meta<typeof FormToggleSwitch> = {
  title: 'FormToggleSwitch',
  component: FormToggleSwitch,
};

export default meta;

type Story = StoryObj<typeof FormToggleSwitch>;

export const Default: Story = {
  args: {
    name: 'field1',
    labelText: 'Label Text',
  },
  render: args => {
    const methods = useForm();
    return (
      <Form
        className="flex w-full items-center gap-2"
        methods={methods}
        onFormSubmit={() => null}
      >
        <FormToggleSwitch {...args} />
      </Form>
    );
  },
};
