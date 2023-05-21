import { useState } from 'react';
import { FieldValues, useFormContext } from 'react-hook-form';
import { GenericDataType } from '../../common';
import { useValueChangeEffect } from '../../hooks';
import { SelectSyncOptions } from './types';

export const useMultiSelectFormSync = <
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
  const values = watch(name);
  useValueChangeEffect(
    values,
    () => {
      if (valueMode === 'id') {
        const ids = values as DataItem['id'][];
        setSelectedItems(
          ids ? ids.flatMap(id => (options[id] ? options[id][0] : [])) : [],
        );
      } else {
        setSelectedItems((values as DataItem[]) ? values : []);
      }
      setIsDefaultLoaded(true);
    },
    [valueMode, options],
  );
  useValueChangeEffect(
    selectedItems,
    () => {
      if (isDefaultLoaded) {
        const itemValues =
          valueMode === 'id'
            ? selectedItems.map(({ id }) => id)
            : selectedItems;
        setValue<string>(name, itemValues, {
          shouldTouch: true,
          shouldDirty: true,
        });
        onItemSelect?.(selectedItems);
      }
    },
    [isDefaultLoaded, onItemSelect, valueMode],
  );
};
