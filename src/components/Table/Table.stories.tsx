import { Story, Meta } from '@storybook/react';
import { getCoreRowModel } from '@tanstack/react-table';
import { Table, TableProps } from './Table';

export default {
  title: 'Table',
  component: Table,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta;

export const Default: Story<
  TableProps<{ id: string; name: string }>
> = args => <Table {...args} />;

Default.args = {
  columns: [
    {
      id: 'name',
      accessorKey: 'name',
      header: () => 'Name',
      footer: () => null,
    },
  ],
  data: [
    {
      id: '1',
      name: 'Row 1',
    },
    {
      id: '2',
      name: 'Row 2',
    },
    {
      id: '3',
      name: 'Row 3',
    },
  ],
  getCoreRowModel: getCoreRowModel(),
};
