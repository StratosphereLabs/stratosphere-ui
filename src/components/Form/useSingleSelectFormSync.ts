import { FieldValues, useFormContext } from 'react-hook-form';
import { GenericDataType } from '../../common';
import { useValueChangeEffect } from '../../hooks';
import { SelectSyncOptions } from './types';

export const useSingleSelectFormSync = <
  Values extends FieldValues,
  DataItem extends GenericDataType,
>({
  name,
  onItemSelect,
  options,
  selectedItems,
  setSelectedItems,
  valueMode,
}: SelectSyncOptions<Values, DataItem>) => {
  const { watch, setValue } = useFormContext();
  const value = watch(name);
  const selectedItem = selectedItems[0] ?? null;
  useValueChangeEffect(
    value,
    () => {
      if (valueMode === 'item') {
        setSelectedItems((value as DataItem) ? [value] : []);
      } else {
        const id = value as DataItem['id'];
        setSelectedItems(id ? (options[id] ? [options[id][0]] : []) : []);
      }
    },
    [valueMode, options],
  );
  useValueChangeEffect(
    selectedItem,
    () => {
      const itemValue =
        valueMode === 'item' ? selectedItem : selectedItem?.id ?? '';
      setValue<string>(name, itemValue, {
        shouldTouch: true,
        shouldDirty: true,
      });
      onItemSelect?.([selectedItem]);
    },
    [onItemSelect, valueMode],
  );
};
