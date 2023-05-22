import { Dictionary, groupBy } from 'lodash';
import { GenericDataType } from './types';

export const dataItemComparator = <DataItem extends GenericDataType>(
  a: DataItem,
  b: DataItem,
) => a.id === b.id;

export const getGroupedDataItems = <DataItem extends GenericDataType>(
  items: DataItem[],
): Dictionary<DataItem[]> => groupBy(items, ({ id }) => id);
