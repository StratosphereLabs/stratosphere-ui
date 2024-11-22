import { Column } from '@tanstack/react-table';
import { GenericDataType } from '../../common';
export interface HeaderSortIconProps<DataType extends GenericDataType> {
    column: Column<DataType, unknown>;
}
export declare const HeaderSortIcon: <DataType extends GenericDataType>({ column, }: HeaderSortIconProps<DataType>) => import("react/jsx-runtime").JSX.Element | null;
export default HeaderSortIcon;
