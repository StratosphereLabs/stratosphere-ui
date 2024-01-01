import { zodResolver } from '@hookform/resolvers/zod';
import { Story, Meta } from '@storybook/react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from './Form';
import { FormControl, FormControlProps } from './FormControl';
import { InfoIcon } from '../Icons';

export default {
  title: 'FormControl',
  component: FormControl,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta;

interface FormValues {
  field1: string;
}

export const Default: Story<FormControlProps<FormValues, string>> = args => {
  const methods = useForm();
  return (
    <Form methods={methods} onFormSubmit={() => null}>
      <FormControl {...args} />
    </Form>
  );
};

Default.args = {
  name: 'field1',
};

export const WithLabel: Story<FormControlProps<FormValues, string>> = args => {
  const methods = useForm();
  return (
    <Form methods={methods} onFormSubmit={() => null}>
      <FormControl {...args} />
    </Form>
  );
};

WithLabel.args = {
  name: 'field1',
  labelText: 'Field Label',
};

export const Required: Story<FormControlProps<FormValues, string>> = args => {
  const methods = useForm();
  return (
    <Form methods={methods} onFormSubmit={() => null}>
      <FormControl {...args} />
    </Form>
  );
};

Required.args = {
  ...WithLabel.args,
  isRequired: true,
};

export const WithPlaceholder: Story<
  FormControlProps<FormValues, string>
> = args => {
  const methods = useForm();
  return (
    <Form methods={methods} onFormSubmit={() => null}>
      <FormControl {...args} />
    </Form>
  );
};

WithPlaceholder.args = {
  name: 'field1',
  placeholder: 'Placeholder Text...',
};

export const WithError: Story<FormControlProps<FormValues, string>> = args => {
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
    <Form methods={methods} onFormSubmit={() => null}>
      <FormControl {...args} />
    </Form>
  );
};

WithError.args = {
  name: 'field1',
};

export const WithElementOnLeft: Story<
  FormControlProps<FormValues, string>
> = args => {
  const methods = useForm();
  return (
    <Form methods={methods} onFormSubmit={() => null}>
      <FormControl {...args} />
    </Form>
  );
};

WithElementOnLeft.args = {
  name: 'field1',
  elementLeft: <InfoIcon className="h-6 w-6" />,
  inputClassName: 'pl-10',
};

export const WithElementOnRight: Story<
  FormControlProps<FormValues, string>
> = args => {
  const methods = useForm();
  return (
    <Form methods={methods} onFormSubmit={() => null}>
      <FormControl {...args} />
    </Form>
  );
};

WithElementOnRight.args = {
  name: 'field1',
  elementRight: <InfoIcon className="h-6 w-6" />,
  inputClassName: 'pr-10',
};
