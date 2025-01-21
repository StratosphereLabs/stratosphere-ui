import { useCallback, useState } from 'react';
import { FieldValues, SetValueConfig, useFormContext } from 'react-hook-form';
import { GenericDataType } from '../../common';
import { useValueChangeEffect } from '../../hooks';
import { SelectSyncOptions } from './types';

export const useSelectFormSync = <
  Values extends FieldValues,
  DataItem extends GenericDataType,
>({
  multi,
  name,
  onItemSelect,
  options,
  selectedItems,
  setSelectedItems,
  valueMode,
}: SelectSyncOptions<Values, DataItem>) => {
  const { watch, setValue } = useFormContext();
  const [isDefaultLoaded, setIsDefaultLoaded] = useState(false);
  const formValue = watch(name);
  const setValueConfig: SetValueConfig = {
    shouldTouch: true,
    shouldDirty: true,
  };
  const selectedItem = selectedItems[0] ?? null;
  const getOption = useCallback(
    (id?: DataItem['id']) => (id && options[id] ? [options[id][0]] : []),
    [options],
  );
  useValueChangeEffect(formValue, () => {
    if (valueMode === 'id') {
      if (multi === true) {
        const ids = (formValue as DataItem['id'][]) ?? [];
        setSelectedItems(ids.flatMap(getOption));
      } else {
        const id = (formValue as DataItem['id'] | undefined) ?? undefined;
        setSelectedItems(getOption(id));
      }
    } else {
      if (multi === true) {
        const items = (formValue as DataItem[]) ?? [];
        setSelectedItems(items);
      } else {
        const items = (formValue as DataItem) ? [formValue] : [];
        setSelectedItems(items);
      }
    }
    setIsDefaultLoaded(true);
  });
  useValueChangeEffect(selectedItems, () => {
    if (isDefaultLoaded) {
      if (valueMode === 'id') {
        const itemIds =
          multi === true
            ? selectedItems.map(({ id }) => id)
            : (selectedItem?.id ?? null);
        setValue<string>(name, itemIds, setValueConfig);
      } else {
        const items = multi === true ? selectedItems : selectedItem;
        setValue<string>(name, items, setValueConfig);
      }
      onItemSelect?.(selectedItems);
    }
  });
};
