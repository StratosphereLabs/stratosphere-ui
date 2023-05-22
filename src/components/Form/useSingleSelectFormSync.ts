import { useState } from 'react';
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
  const [isDefaultLoaded, setIsDefaultLoaded] = useState(false);
  const value = watch(name);
  const selectedItem = selectedItems[0] ?? null;
  useValueChangeEffect(value, () => {
    if (valueMode === 'id') {
      const id = value as DataItem['id'];
      setSelectedItems(id ? (options[id] ? [options[id][0]] : []) : []);
    } else {
      setSelectedItems((value as DataItem) ? [value] : []);
    }
    setIsDefaultLoaded(true);
  });
  useValueChangeEffect(selectedItem, () => {
    if (isDefaultLoaded) {
      const itemValue =
        valueMode === 'id' ? selectedItem?.id ?? '' : selectedItem;
      setValue<string>(name, itemValue, {
        shouldTouch: true,
        shouldDirty: true,
      });
      onItemSelect?.([selectedItem]);
    }
  });
};
