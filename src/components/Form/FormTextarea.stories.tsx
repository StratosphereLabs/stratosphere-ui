import { zodResolver } from '@hookform/resolvers/zod';
import { Story, Meta } from '@storybook/react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from './Form';
import { FormTextarea, FormTextareaProps } from './FormTextarea';

export default {
  title: 'FormTextarea',
  component: FormTextarea,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta;

interface FormValues {
  field1: string;
}

export const Default: Story<FormTextareaProps<FormValues, string>> = args => {
  const methods = useForm();
  return (
    <Form methods={methods} onFormSubmit={() => null}>
      <FormTextarea {...args} />
    </Form>
  );
};

Default.args = {
  name: 'field1',
};

export const WithLabel: Story<FormTextareaProps<FormValues, string>> = args => {
  const methods = useForm();
  return (
    <Form methods={methods} onFormSubmit={() => null}>
      <FormTextarea {...args} />
    </Form>
  );
};

WithLabel.args = {
  name: 'field1',
  labelText: 'Field Label',
};

export const Required: Story<FormTextareaProps<FormValues, string>> = args => {
  const methods = useForm();
  return (
    <Form methods={methods} onFormSubmit={() => null}>
      <FormTextarea {...args} />
    </Form>
  );
};

Required.args = {
  ...WithLabel.args,
  isRequired: true,
};

export const WithPlaceholder: Story<
  FormTextareaProps<FormValues, string>
> = args => {
  const methods = useForm();
  return (
    <Form methods={methods} onFormSubmit={() => null}>
      <FormTextarea {...args} />
    </Form>
  );
};

WithPlaceholder.args = {
  name: 'field1',
  placeholder: 'Placeholder Text...',
};

export const WithError: Story<FormTextareaProps<FormValues, string>> = args => {
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
      <FormTextarea {...args} />
    </Form>
  );
};

WithError.args = {
  name: 'field1',
};
