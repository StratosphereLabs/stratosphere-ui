import { Story, Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { Form } from './Form';
import { FormRangeSlider, FormRangeSliderProps } from './FormRangeSlider';

import './multi-range-slider.css';

export default {
  title: 'FormRangeSlider',
  component: FormRangeSlider,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta;

interface FormValues {
  field1: [number, number];
}

export const Default: Story<FormRangeSliderProps<FormValues>> = args => {
  const methods = useForm();
  return (
    <Form className="w-full" methods={methods} onFormSubmit={() => null}>
      <FormRangeSlider {...args} />
    </Form>
  );
};

Default.args = {
  name: 'field1',
  labelText: 'Label Text',
};
