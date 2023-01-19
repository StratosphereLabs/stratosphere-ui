import { Combobox } from '@headlessui/react';
import classNames from 'classnames';
import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { Input } from 'react-daisyui';
import { FieldValues, useController, useFormContext } from 'react-hook-form';
import { TypeaheadDropdown } from './TypeaheadDropdown';
import { TypeaheadSelectProps } from './TypeaheadSelect';
import { useTypeaheadInput } from './useTypeaheadInput';
import { Badge } from '../Badge';
import { FormError, FormLabel } from '../Form';
import { GenericDataType } from '../../common';

export type TypeaheadMultiSelectProps<
  DataItem extends GenericDataType,
  Values extends FieldValues,
> = Omit<TypeaheadSelectProps<DataItem, Values>, 'multi'>;

export const TypeaheadMultiSelect = <
  DataItem extends GenericDataType,
  Values extends FieldValues,
>({
  className,
  controllerProps,
  debounceTime,
  getItemText,
  getItemValue,
  inputRef,
  isRequired,
  labelText,
  name,
  onDebouncedChange,
  options,
  placeholder,
}: TypeaheadMultiSelectProps<DataItem, Values>): JSX.Element => {
  const { setValue } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController({
    ...controllerProps,
    name,
  });
  const [selectedItems, setSelectedItems] = useState<DataItem[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const { isLoading, query, setQuery } = useTypeaheadInput<DataItem>({
    debounceTime,
    onDebouncedChange,
    options,
  });
  useEffect(() => {
    const itemValues = selectedItems.map(getItemValue);
    setValue<string>(name, itemValues, {
      shouldValidate: true,
    });
  }, [selectedItems]);
  useEffect(() => {
    if (showDropdown) searchInputRef.current?.focus();
    else setQuery('');
  }, [showDropdown]);
  return (
    <Combobox
      as="div"
      className={classNames('form-control w-full', className)}
      multiple
      name={name}
      onChange={value => setSelectedItems(value)}
      value={selectedItems}
    >
      {labelText !== undefined ? (
        <Combobox.Label as={FormLabel} isRequired={isRequired}>
          {labelText}
        </Combobox.Label>
      ) : null}
      <div
        className={classNames(
          'input-bordered input-ghost input flex cursor-pointer items-center gap-2 overflow-y-scroll',
        )}
        onBlur={event => {
          if (event.relatedTarget === null) setShowDropdown(false);
        }}
        onClick={() => setShowDropdown(true)}
        onKeyDown={event => {
          if (event.key === 'Enter') {
            event.preventDefault();
            setShowDropdown(true);
          }
        }}
        ref={inputRef}
        tabIndex={0}
      >
        {selectedItems.length > 0
          ? selectedItems.map((item, index) => (
              <Badge
                dismissable
                key={item.id}
                onDismiss={() =>
                  setSelectedItems(items =>
                    items.filter((_, itemIndex) => index !== itemIndex),
                  )
                }
              >
                {getItemValue(item)}
              </Badge>
            ))
          : placeholder}
      </div>
      <TypeaheadDropdown
        isLoading={isLoading}
        getItemText={getItemText}
        onClose={() => setShowDropdown(false)}
        options={options}
        show={showDropdown}
        showSelected
      >
        <Combobox.Input
          {...field}
          as={Input}
          onChange={({ target: { value } }) => setQuery(value)}
          onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Tab') setShowDropdown(false);
          }}
          placeholder="Search..."
          ref={searchInputRef}
          value={query}
        />
      </TypeaheadDropdown>
      {error?.message !== undefined ? (
        <FormError>{error.message}</FormError>
      ) : null}
    </Combobox>
  );
};
