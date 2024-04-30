# Table

The `Table` component is a flexible and customizable table component built on top of @tanstack/react-table. It supports pagination, sorting, filtering, and various table styling options. It takes in a generic type parameter `DataType` that specifies the shape of data being passed to the table.

The `Table` component renders a table element that contains a header row and a body with the table data. The header row contains column headers with sorting icons if sorting is enabled. The table body contains table rows with table data. If pagination is enabled, a `Pagination` component is rendered at the bottom of the table. If `isLoading` is true, a `FullScreenLoader` component is rendered.

## Props

The Table component accepts the following props:

- `bodyClassName?: string`: A string that allows custom classnames to be passed directly to the `<tbody>` element.
- `cellClassNames?: Record<string, string>`: An object that maps column IDs to CSS class names to apply to the corresponding table cells.
- `className?: string`: A string of additional CSS class names to apply to the table element.
- `compact?: boolean`: A boolean that determines whether the table should be rendered in a compact mode.
- `enableFixedWidth?: boolean`: A boolean that determines whether the table should have fixed width columns.
- `enableGlobalFilter?: boolean`: A boolean that determines whether to enable the global filter input.
- `enableRowHover?: boolean`: A boolean that determines whether to enable row hover highlighting.
- `enableRowSelection?: boolean`: A boolean that determines whether rows can be selected with checkboxes.
- `enableSelectAll?: boolean`: A boolean that determines whether a checkbox that toggles all rows should be displayed in the header.
- `enableZebra?: boolean`: A boolean that determines whether to enable zebra striping.
- `headerClassName?: string`: A string that allows custom classnames to be passed directly to the `<thead>` element.
- `initialState?: TableState`: An object that represents the initial state of the table. It can be used to specify the default page size, sorting, and filtering.
- `isLoading?: boolean`: A boolean that determines whether to show a full-screen loader while the table is being loaded.
- `metadata?: PaginationMetadata`: An object that contains pagination metadata such as the current page, total page count, item count, and limit.

## Usage

```tsx
import { Table } from 'stratosphere-ui';

const data = [
  { id: 1, name: 'John', age: 25 },
  { id: 2, name: 'Jane', age: 30 },
  { id: 3, name: 'Bob', age: 35 },
];

const columns = [
  { id: 'name', header: 'Name', cell: row => row.name },
  { id: 'age', header: 'Age', cell: row => row.age },
];

export const MyTable = () => (
  <Table
    data={data}
    columns={columns}
    metadata={{ page: 1, pageCount: 1, limit: 10, itemCount: 3 }}
  />
);
```
