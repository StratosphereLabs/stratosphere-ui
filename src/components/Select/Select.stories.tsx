import { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { Select } from './Select';
import { Form } from '../Form';

const meta: Meta<typeof Select> = {
  title: 'Select',
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    labelText: 'Field Label',
    name: 'field1',
    getItemText: ({ id, label }) => `${id} - ${label}`,
    formValueMode: 'item',
    options: [
      {
        id: '1',
        label: 'Item 1',
      },
      {
        id: '2',
        label: 'Item 2',
      },
      {
        id: '3',
        label: 'Item 3',
      },
    ],
  },
  render: args => {
    const methods = useForm();
    return (
      <Form className="h-60 w-60" methods={methods} onFormSubmit={() => null}>
        <Select {...args} />
      </Form>
    );
  },
};

export const WithDefaultValue: Story = {
  args: {
    labelText: 'Field Label',
    name: 'field1',
    getItemText: ({ id, label }) => `${id} - ${label}`,
    options: [
      {
        id: '1',
        label: 'Item 1',
      },
      {
        id: '2',
        label: 'Item 2',
      },
      {
        id: '3',
        label: 'Item 3',
      },
    ],
  },
  render: args => {
    const methods = useForm({
      defaultValues: {
        field1: {
          id: '2',
          label: 'Item 2',
        },
      },
    });
    return (
      <Form className="h-60 w-60" methods={methods} onFormSubmit={() => null}>
        <Select {...args} />
      </Form>
    );
  },
};

export const SelectMultiple: Story = {
  args: {
    labelText: 'Field Label',
    multi: true,
    name: 'field1',
    getItemText: ({ id, label }) => `${id} - ${label}`,
    options: [
      {
        id: '1',
        label: 'Item 1',
      },
      {
        id: '2',
        label: 'Item 2',
      },
      {
        id: '3',
        label: 'Item 3',
      },
    ],
  },
  render: args => {
    const methods = useForm();
    return (
      <Form className="h-60 w-60" methods={methods} onFormSubmit={() => null}>
        <Select {...args} />
      </Form>
    );
  },
};

export const WithMultipleDefaultValues: Story = {
  args: {
    labelText: 'Field Label',
    multi: true,
    name: 'field1',
    getItemText: ({ id, label }) => `${id} - ${label}`,
    options: [
      {
        id: '1',
        label: 'Item 1',
      },
      {
        id: '2',
        label: 'Item 2',
      },
      {
        id: '3',
        label: 'Item 3',
      },
    ],
  },
  render: args => {
    const methods = useForm({
      defaultValues: {
        field1: [
          {
            id: '2',
            label: 'Item 2',
          },
          {
            id: '3',
            label: 'Item 3',
          },
        ],
      },
    });
    return (
      <Form className="h-60 w-60" methods={methods} onFormSubmit={() => null}>
        <Select {...args} />
      </Form>
    );
  },
};
