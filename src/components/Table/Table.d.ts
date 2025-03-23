import { Column, Row, TableOptions } from '@tanstack/react-table';
import { Argument } from 'classnames';
import { GenericDataType } from '../../common';
import { PaginationMetadata } from '../Pagination/types';
export declare const TABLE_SIZES: readonly ["xl", "lg", "md", "sm", "xs"];
export type TableSize = (typeof TABLE_SIZES)[number];
export interface TableProps<DataType extends GenericDataType> extends Omit<TableOptions<DataType>, 'getRowId'> {
    bodyClassName?: string;
    cellClassName?: Argument | ((row: Row<DataType>, col: Column<DataType, unknown>) => Argument);
    cellClassNames?: Record<string, string>;
    className?: string;
    enableRowHover?: boolean | ((row: Row<DataType>) => boolean);
    enableSelectAll?: boolean;
    headerClassName?: string;
    hideHeader?: boolean;
    highlightWhenSelected?: boolean;
    isLoading?: boolean;
    metadata?: PaginationMetadata;
    pinCols?: boolean;
    pinRows?: boolean;
    rowClassName?: Argument | ((row: Row<DataType>) => Argument);
    size?: TableSize;
    zebra?: boolean;
}
export declare const Table: <DataType extends GenericDataType>({ bodyClassName, cellClassName, cellClassNames, className, enableGlobalFilter, enableRowHover, enableRowSelection, enableSelectAll, headerClassName, hideHeader, highlightWhenSelected, initialState, isLoading, metadata, pinCols, pinRows, rowClassName, size, zebra, ...props }: TableProps<DataType>) => import("react/jsx-runtime").JSX.Element;
