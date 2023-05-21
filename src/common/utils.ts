import { Dictionary, groupBy } from 'lodash';
import { GenericDataType } from './types';

export const getGroupedDataItems = <DataItem extends GenericDataType>(
  items: DataItem[],
): Dictionary<DataItem[]> => groupBy(items, ({ id }) => id);
