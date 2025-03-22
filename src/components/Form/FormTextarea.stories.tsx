import { zodResolver } from '@hookform/resolvers/zod';
import { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Form } from './Form';
import { FormTextarea } from './FormTextarea';

const meta: Meta<typeof FormTextarea> = {
  title: 'FormTextarea',
  component: FormTextarea,
};

export default meta;

type Story = StoryObj<typeof FormTextarea>;

export const Default: Story = {
  args: {
    name: 'field1',
  },
  render: args => {
    const methods = useForm();
    return (
      <Form methods={methods} onFormSubmit={() => null}>
        <FormTextarea {...args} />
      </Form>
    );
  },
};

export const WithLabel: Story = {
  args: {
    name: 'field1',
    labelText: 'Field Label',
  },
  render: args => {
    const methods = useForm();
    return (
      <Form methods={methods} onFormSubmit={() => null}>
        <FormTextarea {...args} />
      </Form>
    );
  },
};

export const Required: Story = {
  args: {
    ...WithLabel.args,
    isRequired: true,
  },
  render: args => {
    const methods = useForm();
    return (
      <Form methods={methods} onFormSubmit={() => null}>
        <FormTextarea {...args} />
      </Form>
    );
  },
};

export const WithPlaceholder: Story = {
  args: {
    name: 'field1',
    placeholder: 'Placeholder Text...',
  },
  render: args => {
    const methods = useForm();
    return (
      <Form methods={methods} onFormSubmit={() => null}>
        <FormTextarea {...args} />
      </Form>
    );
  },
};

export const WithError: Story = {
  args: {
    name: 'field1',
  },
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
      <Form methods={methods} onFormSubmit={() => null}>
        <FormTextarea {...args} />
      </Form>
    );
  },
};
