import {
  flexRender,
  Row,
  TableOptions,
  useReactTable,
} from '@tanstack/react-table';
import classNames from 'classnames';
import { Checkbox } from 'react-daisyui';
import { HeaderSortIcon } from './HeaderSortIcon';
import { FullScreenLoader } from '../FullScreenLoader';
import { Pagination } from '../Pagination';
import { PaginationMetadata } from '../Pagination/types';
import { GenericDataType } from '../../common';

export interface TableProps<DataType extends GenericDataType>
  extends Omit<TableOptions<DataType>, 'getRowId'> {
  cellClassNames?: Record<string, string>;
  className?: string;
  compact?: boolean;
  enableFixedWidth?: boolean;
  enableRowHover?: boolean | ((row: Row<DataType>) => boolean);
  enableSelectAll?: boolean;
  enableZebra?: boolean;
  highlightWhenSelected?: boolean;
  isLoading?: boolean;
  metadata?: PaginationMetadata;
}

export const Table = <DataType extends GenericDataType>({
  cellClassNames,
  className,
  compact,
  enableFixedWidth,
  enableGlobalFilter,
  enableRowHover,
  enableRowSelection,
  enableSelectAll,
  enableZebra,
  highlightWhenSelected,
  initialState,
  isLoading,
  metadata,
  ...props
}: TableProps<DataType>): JSX.Element => {
  const tableInstance = useReactTable<DataType>({
    enableGlobalFilter,
    enableRowSelection,
    getRowId: ({ id }) => id.toString(),
    globalFilterFn: 'includesString',
    initialState: {
      globalFilter: '',
      ...initialState,
    },
    ...props,
  });
  const {
    getHeaderGroups,
    getIsSomeRowsSelected,
    getRowModel,
    setPageIndex,
    toggleAllRowsSelected,
  } = tableInstance;
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex-1">
        <table
          className={classNames(
            'table w-full',
            {
              'table-compact': compact,
              'table-fixed': enableFixedWidth,
              'table-zebra': enableZebra,
            },
            className,
          )}
        >
          <thead>
            {getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {enableRowSelection ? (
                  <th className="w-[40px]">
                    {enableSelectAll ? (
                      <Checkbox
                        checked={getIsSomeRowsSelected()}
                        onChange={() => toggleAllRowsSelected()}
                      />
                    ) : null}
                  </th>
                ) : null}
                {headerGroup.headers.map(
                  ({ column, getContext, id, isPlaceholder }) => (
                    <th
                      key={id}
                      className={classNames(
                        {
                          'cursor-pointer': column.getCanSort(),
                        },
                        cellClassNames?.[column.id],
                      )}
                      onClick={
                        column.getCanSort()
                          ? column.getToggleSortingHandler()
                          : undefined
                      }
                    >
                      {isPlaceholder ? null : (
                        <div className="flex items-center">
                          {flexRender(column.columnDef.header, getContext())}
                          <HeaderSortIcon column={column} />
                        </div>
                      )}
                    </th>
                  ),
                )}
              </tr>
            ))}
          </thead>
          {isLoading !== true ? (
            <tbody>
              {getRowModel().rows.map(row => (
                <tr
                  className={classNames({
                    hover:
                      typeof enableRowHover === 'function'
                        ? enableRowHover(row)
                        : enableRowHover,
                    active: highlightWhenSelected && row.getIsSelected(),
                  })}
                  key={row.id}
                >
                  {enableRowSelection ? (
                    <td>
                      <div className="flex h-full w-[40px] items-center">
                        <Checkbox
                          checked={row.getIsSelected()}
                          disabled={!row.getCanSelect()}
                          onChange={() => row.toggleSelected()}
                        />
                      </div>
                    </td>
                  ) : null}
                  {row.getVisibleCells().map(({ column, getContext }) => (
                    <td className={cellClassNames?.[column.id]} key={column.id}>
                      {flexRender(column.columnDef.cell, getContext())}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          ) : null}
        </table>
        {isLoading === true ? <FullScreenLoader /> : null}
      </div>
      <Pagination
        metadata={metadata}
        onPaginationChange={number => setPageIndex(number - 1)}
        size={compact === true ? 'sm' : undefined}
      />
    </div>
  );
};
