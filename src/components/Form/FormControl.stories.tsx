import { zodResolver } from '@hookform/resolvers/zod';
import { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { InfoIcon } from '../Icons';
import { Form } from './Form';
import { FormControl } from './FormControl';

const meta: Meta<typeof FormControl> = {
  title: 'FormControl',
  component: FormControl,
};

export default meta;

type Story = StoryObj<typeof FormControl>;

export const Default: Story = {
  args: {
    name: 'field1',
  },
  render: args => {
    const methods = useForm();
    return (
      <Form methods={methods} onFormSubmit={() => null}>
        <FormControl {...args} />
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
        <FormControl {...args} />
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
        <FormControl {...args} />
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
        <FormControl {...args} />
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
        <FormControl {...args} />
      </Form>
    );
  },
};

export const WithElementOnLeft: Story = {
  args: {
    name: 'field1',
    elementLeft: <InfoIcon className="h-6 w-6" />,
    inputClassName: 'pl-10',
  },
  render: args => {
    const methods = useForm();
    return (
      <Form methods={methods} onFormSubmit={() => null}>
        <FormControl {...args} />
      </Form>
    );
  },
};

export const WithElementOnRight: Story = {
  args: {
    name: 'field1',
    elementRight: <InfoIcon className="h-6 w-6" />,
    inputClassName: 'pr-10',
  },
  render: args => {
    const methods = useForm();
    return (
      <Form methods={methods} onFormSubmit={() => null}>
        <FormControl {...args} />
      </Form>
    );
  },
};
