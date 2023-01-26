import { useEffect, useRef, useState } from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { TypeaheadSelectProps } from './TypeaheadSelect';
import { GenericDataType } from '../../common';
import { useOutsideClick, useTypeaheadQuery } from '../../hooks';

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
    dropdownRef,
    error,
    isLoading,
    query,
    showDropdown,
    searchInputRef,
    selectedItems,
    setShowDropdown,
    setSelectedItems,
    setQuery,
  };
};
