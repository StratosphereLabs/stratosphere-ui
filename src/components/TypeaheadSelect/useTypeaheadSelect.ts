import { useEffect, useRef, useState } from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { TypeaheadSelectProps } from './TypeaheadSelect';
import { useTypeaheadQuery } from './useTypeaheadQuery';
import { GenericDataType } from '../../common';
import { useOutsideClick } from '../../hooks';

export type UseTypeaheadSelectOptions<
  DataItem extends GenericDataType,
  Values extends FieldValues,
> = Pick<
  TypeaheadSelectProps<DataItem, Values>,
  | 'controllerProps'
  | 'debounceTime'
  | 'multi'
  | 'name'
  | 'onDebouncedChange'
  | 'options'
>;

export const useTypeaheadSelect = <
  DataItem extends GenericDataType,
  Values extends FieldValues,
>({
  controllerProps,
  debounceTime,
  multi,
  name,
  onDebouncedChange,
  options,
}: UseTypeaheadSelectOptions<DataItem, Values>) => {
  const {
    field: { value },
    fieldState: { error },
  } = useController({
    ...controllerProps,
    name,
  });
  const [selectedItems, setSelectedItems] = useState<DataItem[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const { isLoading, query, setQuery } = useTypeaheadQuery<DataItem>({
    debounceTime,
    onDebouncedChange,
    options,
  });
  useOutsideClick(dropdownRef, () => setShowDropdown(false));
  useEffect(() => {
    if (multi !== true) setShowDropdown(false);
  }, [multi, selectedItems]);
  useEffect(() => {
    setQuery('');
    if (showDropdown) searchInputRef.current?.focus();
  }, [showDropdown]);
  return {
    error,
    isLoading,
    query,
    dropdownRef,
    searchInputRef,
    selectedItems,
    setShowDropdown,
    setSelectedItems,
    showDropdown,
    setQuery,
    value,
  };
};
