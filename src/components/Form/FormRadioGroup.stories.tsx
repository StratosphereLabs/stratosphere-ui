import { Story, Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { FormRadioGroup, FormRadioGroupProps } from './FormRadioGroup';
import { FormRadioGroupOption } from './FormRadioGroupOption';
import { Form } from '../Form';

export default {
  title: 'FormRadioGroup',
  component: FormRadioGroup,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta;

interface FormValues {
  field1: string;
}

export const Default: Story<FormRadioGroupProps<FormValues>> = args => {
  const methods = useForm({
    defaultValues: {
      field1: '2',
    },
  });
  return (
    <Form className="w-60" methods={methods} onFormSubmit={() => null}>
      <FormRadioGroup {...args}>
        <FormRadioGroupOption disabled value="1">
          Option 1
        </FormRadioGroupOption>
        <FormRadioGroupOption value="2">Option 2</FormRadioGroupOption>
        <FormRadioGroupOption value="3">Option 3</FormRadioGroupOption>
      </FormRadioGroup>
    </Form>
  );
};

Default.args = {
  name: 'field1',
  labelText: 'Field Label',
};
