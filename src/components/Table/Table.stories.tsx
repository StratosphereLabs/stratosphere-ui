import { Meta, StoryObj } from '@storybook/react';
import { getCoreRowModel } from '@tanstack/react-table';

import { Table } from './Table';

const meta: Meta<typeof Table> = {
  title: 'Table',
  component: Table,
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
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
  },
};
