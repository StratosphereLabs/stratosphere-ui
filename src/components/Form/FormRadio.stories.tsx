import { zodResolver } from '@hookform/resolvers/zod';
import { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Form } from '../Form';
import { FormRadio } from './FormRadio';

const meta: Meta<typeof FormRadio> = {
  title: 'FormRadio',
  component: FormRadio,
};

export default meta;

type Story = StoryObj<typeof FormRadio>;

const radioOptions = [
  {
    id: 1,
    label: 'Label 1',
    value: '1',
  },
  {
    id: 2,
    label: 'Label 2',
    value: '2',
  },
  {
    id: 3,
    label: 'Label 3',
    value: '3',
  },
];

const NoDefaultsTemplate: Story = {
  render: args => {
    const methods = useForm();
    return (
      <Form className="w-60" methods={methods} onFormSubmit={() => null}>
        <FormRadio {...args} />
      </Form>
    );
  },
};

export const Default: Story = {
  ...NoDefaultsTemplate,
  args: {
    name: 'field1',
    labelText: 'Field Label',
    options: radioOptions,
  },
};

export const Required: Story = {
  ...NoDefaultsTemplate,
  args: {
    ...Default.args,
    isRequired: true,
  },
};

export const WithError: Story = {
  args: Required.args,
  render: args => {
    const methods = useForm({
      resolver: zodResolver(
        z.object({
          field1: z.string().min(1, 'Required'),
        }),
      ),
    });
    useEffect(() => {
      methods.trigger('field1');
    }, [methods]);
    return (
      <Form className="w-60" methods={methods} onFormSubmit={() => null}>
        <FormRadio {...args} />
      </Form>
    );
  },
};
