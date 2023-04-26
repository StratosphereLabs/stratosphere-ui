import { useEffect, useRef, useState } from 'react';
import { FieldValues, useController, useWatch } from 'react-hook-form';
import { TypeaheadSelectProps } from './TypeaheadSelect';
import { GenericDataType } from '../../common';
import { useOutsideClick, useTypeaheadQuery } from '../../hooks';

export type UseTypeaheadSelectOptions<
  DataItem extends GenericDataType,
  Values extends FieldValues,
> = Pick<
  TypeaheadSelectProps<DataItem, Values>,
  'controllerProps' | 'debounceTime' | 'name' | 'onDebouncedChange' | 'options'
>;

export const useTypeaheadSelect = <
  DropdownElement extends HTMLElement,
  DataItem extends GenericDataType,
  Values extends FieldValues,
>({
  controllerProps,
  debounceTime,
  name,
  onDebouncedChange,
  options,
}: UseTypeaheadSelectOptions<DataItem, Values>) => {
  const {
    fieldState: { error },
    field: { ref },
  } = useController({
    ...controllerProps,
    name,
  });
  const value = useWatch({ name });
  const [selectedItems, setSelectedItems] = useState<DataItem[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<DropdownElement>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const { isLoading, query, setQuery } = useTypeaheadQuery<DataItem>({
    debounceTime,
    onDebouncedChange,
    options,
  });
  const clearSelectedItem = (index: number) =>
    setSelectedItems(items =>
      items.filter((_, itemIndex) => index !== itemIndex),
    );
  useOutsideClick(dropdownRef, () => setShowDropdown(false));
  useEffect(() => {
    if (showDropdown) searchInputRef.current?.focus();
    else setQuery('');
  }, [showDropdown]);
  useEffect(() => {
    if (value === '' || value === null || value === undefined)
      setSelectedItems([]);
  }, [value]);
  return {
    clearSelectedItem,
    dropdownRef,
    error,
    isLoading,
    query,
    ref,
    showDropdown,
    searchInputRef,
    selectedItems,
    setShowDropdown,
    setSelectedItems,
    setQuery,
  };
};
