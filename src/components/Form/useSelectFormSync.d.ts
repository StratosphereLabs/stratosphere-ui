import { FieldValues } from 'react-hook-form';
import { GenericDataType } from '../../common';
import { SelectSyncOptions } from './types';
export declare const useSelectFormSync: <Values extends FieldValues, DataItem extends GenericDataType>({ multi, name, onItemSelect, options, selectedItems, setSelectedItems, valueMode, }: SelectSyncOptions<Values, DataItem>) => void;
