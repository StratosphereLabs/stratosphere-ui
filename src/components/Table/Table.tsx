import {
  flexRender,
  Row,
  TableOptions,
  useReactTable,
} from '@tanstack/react-table';
import classNames from 'classnames';
import { GenericDataType } from '../../common';
import { FullScreenLoader } from '../FullScreenLoader';
import { Pagination } from '../Pagination';
import { PaginationMetadata } from '../Pagination/types';
import { HeaderSortIcon } from './HeaderSortIcon';

export const TABLE_SIZES = ['lg', 'md', 'sm', 'xs'] as const;

export type TableSize = (typeof TABLE_SIZES)[number];

export interface TableProps<DataType extends GenericDataType>
  extends Omit<TableOptions<DataType>, 'getRowId'> {
  bodyClassName?: string;
  cellClassNames?: Record<string, string>;
  className?: string;
  enableRowHover?: boolean | ((row: Row<DataType>) => boolean);
  enableSelectAll?: boolean;
  enableZebra?: boolean;
  headerClassName?: string;
  hideHeader?: boolean;
  highlightWhenSelected?: boolean;
  isLoading?: boolean;
  metadata?: PaginationMetadata;
  pinCols?: boolean;
  pinRows?: boolean;
  size?: TableSize;
}

export const Table = <DataType extends GenericDataType>({
  bodyClassName,
  cellClassNames,
  className,
  enableGlobalFilter,
  enableRowHover,
  enableRowSelection,
  enableSelectAll,
  enableZebra,
  headerClassName,
  hideHeader,
  highlightWhenSelected,
  initialState,
  isLoading,
  metadata,
  pinCols,
  pinRows,
  size,
  ...props
}: TableProps<DataType>) => {
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
            size && `table-${size}`,
            {
              'table-zebra': enableZebra,
              'table-pin-cols': pinCols,
              'table-pin-rows': pinRows,
            },
            className,
          )}
        >
          {hideHeader !== true ? (
            <thead className={headerClassName}>
              {getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                  {enableRowSelection ? (
                    <th className="w-[40px]">
                      {enableSelectAll ? (
                        <input
                          className="checkbox"
                          type="checkbox"
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
          ) : null}
          {isLoading !== true ? (
            <tbody className={bodyClassName}>
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
                        <input
                          className="checkbox"
                          type="checkbox"
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
        size={size}
      />
    </div>
  );
};
