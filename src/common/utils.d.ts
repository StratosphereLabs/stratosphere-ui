import { Dictionary } from 'lodash';
import { GenericDataType } from './types';
export declare const dataItemComparator: <DataItem extends GenericDataType>(a: DataItem, b: DataItem) => boolean;
export declare const getGroupedDataItems: <DataItem extends GenericDataType>(items: DataItem[]) => Dictionary<DataItem[]>;
