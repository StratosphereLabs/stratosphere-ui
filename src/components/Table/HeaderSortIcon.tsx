import { Column } from '@tanstack/react-table';

import { GenericDataType } from '../../common';
import { SortAscendingIcon, SortDescendingIcon, SortIcon } from '../Icons';

export interface HeaderSortIconProps<DataType extends GenericDataType> {
  column: Column<DataType, unknown>;
}

export const HeaderSortIcon = <DataType extends GenericDataType>({
  column,
}: HeaderSortIconProps<DataType>) => {
  if (!column.getCanSort()) return null;
  if (column.getIsSorted() === 'asc') return <SortAscendingIcon />;
  if (column.getIsSorted() === 'desc') return <SortDescendingIcon />;
  return <SortIcon />;
};

export default HeaderSortIcon;
