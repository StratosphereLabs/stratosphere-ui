import { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';

import { Form } from './Form';
import { FormRangeSlider } from './FormRangeSlider';
import './multi-range-slider.css';

const meta: Meta<typeof FormRangeSlider> = {
  title: 'FormRangeSlider',
  component: FormRangeSlider,
};

export default meta;

type Story = StoryObj<typeof FormRangeSlider>;

export const Default: Story = {
  args: {
    name: 'field1',
    labelText: 'Label Text',
    min: 0,
    max: 100,
  },
  render: args => {
    const methods = useForm({
      defaultValues: {
        field1: [0, 100],
      },
    });
    return (
      <Form className="w-full" methods={methods} onFormSubmit={() => null}>
        <FormRangeSlider {...args} />
      </Form>
    );
  },
};
