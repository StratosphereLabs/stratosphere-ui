import { zodResolver } from '@hookform/resolvers/zod';
import { Story, Meta } from '@storybook/react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from '../Form';
import { FormRadio, FormRadioProps } from '../FormRadio';

export default {
  title: 'FormRadio',
  component: FormRadio,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta;

const radioOptions = [
  {
    label: 'Label 1',
    value: '1',
  },
  {
    label: 'Label 2',
    value: '2',
  },
  {
    label: 'Label 3',
    value: '3',
  },
];

interface FormValues {
  field1: string;
}

export const Default: Story<FormRadioProps<FormValues>> = args => {
  const methods = useForm();
  return (
    <Form className="w-40" methods={methods} onFormSubmit={() => {}}>
      <FormRadio {...args} />
    </Form>
  );
};

Default.args = {
  name: 'field1',
  options: radioOptions,
};

export const WithLabel: Story<FormRadioProps<FormValues>> = args => {
  const methods = useForm();
  return (
    <Form className="w-40" methods={methods} onFormSubmit={() => {}}>
      <FormRadio {...args} />
    </Form>
  );
};

WithLabel.args = {
  name: 'field1',
  labelText: 'Field Label',
  options: radioOptions,
};

export const Required: Story<FormRadioProps<FormValues>> = args => {
  const methods = useForm();
  return (
    <Form className="w-40" methods={methods} onFormSubmit={() => {}}>
      <FormRadio {...args} />
    </Form>
  );
};

Required.args = {
  ...WithLabel.args,
  isRequired: true,
};

export const WithError: Story<FormRadioProps<FormValues>> = args => {
  const methods = useForm({
    resolver: zodResolver(
      z.object({
        field1: z.string().min(1, 'Required'),
      }),
    ),
  });
  useEffect(() => {
    methods.trigger('field1');
  }, []);
  return (
    <Form className="w-40" methods={methods} onFormSubmit={() => {}}>
      <FormRadio {...args} />
    </Form>
  );
};

WithError.args = Required.args;
