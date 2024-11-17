import { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { FormRadioGroup } from './FormRadioGroup';
import { FormRadioGroupOption } from './FormRadioGroupOption';
import { Form } from '../Form';

const meta: Meta<typeof FormRadioGroup> = {
  title: 'FormRadioGroup',
  component: FormRadioGroup,
};

export default meta;

type Story = StoryObj<typeof FormRadioGroup>;

export const Default: Story = {
  args: {
    name: 'field1',
    labelText: 'Field Label',
  },
  render: args => {
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
  },
};
