import { Story, Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { Form } from './Form';
import { FormToggleSwitch, FormToggleSwitchProps } from './FormToggleSwitch';

export default {
  title: 'FormToggleSwitch',
  component: FormToggleSwitch,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta;

interface FormValues {
  field1: boolean;
}

export const Default: Story<FormToggleSwitchProps<FormValues>> = args => {
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
};

Default.args = {
  name: 'field1',
  labelText: 'Label Text',
};
