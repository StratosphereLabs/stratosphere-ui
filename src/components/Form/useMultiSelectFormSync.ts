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
  const values = watch(name);
  useValueChangeEffect(
    values,
    () => {
      if (valueMode === 'item') {
        setSelectedItems((values as DataItem[]) ? values : []);
      } else {
        const ids = values as DataItem['id'][];
        setSelectedItems(
          ids ? ids.flatMap(id => (options[id] ? options[id][0] : [])) : [],
        );
      }
    },
    [valueMode, options],
  );
  useValueChangeEffect(
    selectedItems,
    () => {
      const itemValues =
        valueMode === 'item'
          ? selectedItems
          : selectedItems.map(({ id }) => id);
      setValue<string>(name, itemValues, {
        shouldTouch: true,
        shouldDirty: true,
      });
      onItemSelect?.(selectedItems);
    },
    [onItemSelect, valueMode],
  );
};
