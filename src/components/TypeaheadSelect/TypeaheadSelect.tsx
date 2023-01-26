import { Combobox } from '@headlessui/react';
import classNames from 'classnames';
import { Fragment, RefObject } from 'react';
import { FieldValues } from 'react-hook-form';
import { Input, Progress } from 'react-daisyui';
import { useTypeaheadSelect } from './useTypeaheadSelect';
import { Badge } from '../Badge';
import { Dropdown, DropdownMenu, DropdownOption } from '../Dropdown';
import { FormError, FormFieldProps, FormLabel } from '../Form';
import { ComboboxMulti } from '../Form/FormComboboxMulti';
import { ComboboxSingle } from '../Form/FormComboboxSingle';
import { GenericDataType } from '../../common';
import { UseTypeaheadQueryOptions } from '../../hooks';

export interface TypeaheadSelectProps<
  DataItem extends GenericDataType,
  Values extends FieldValues,
> extends UseTypeaheadQueryOptions<DataItem>,
    FormFieldProps<Values> {
  className?: string;
  getBadgeText?: (item: DataItem) => string;
  getItemText: (data: DataItem) => string;
  getItemValue?: (data: DataItem) => string;
  inputRef?: RefObject<HTMLInputElement>;
  multi?: true;
}

export const TypeaheadSelect = <
  DataItem extends GenericDataType,
  Values extends FieldValues,
>({
  className,
  controllerProps,
  debounceTime,
  getBadgeText,
  getItemText,
  getItemValue,
  inputRef,
  isRequired,
  labelText,
  multi,
  name,
  onDebouncedChange,
  options,
  placeholder,
}: TypeaheadSelectProps<DataItem, Values>): JSX.Element => {
  const {
    dropdownRef,
    error,
    isLoading,
    showDropdown,
    selectedItems,
    setSelectedItems,
    setShowDropdown,
    setQuery,
    query,
    value,
  } = useTypeaheadSelect<DataItem, Values>({
    controllerProps,
    debounceTime,
    multi,
    name,
    onDebouncedChange,
    options,
  });
  const Component = multi === true ? ComboboxMulti : ComboboxSingle;
  return (
    <Component<DataItem, Values>
      className={className}
      getItemValue={getItemValue}
      name={name}
      selectedItems={selectedItems}
      setSelectedItems={setSelectedItems}
      value={value}
    >
      {labelText !== undefined ? (
        <Combobox.Label as={FormLabel} isRequired={isRequired}>
          {labelText}
        </Combobox.Label>
      ) : null}
      <div
        className="input-bordered input-ghost input flex cursor-pointer items-center gap-2 overflow-y-scroll"
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
                {getBadgeText?.(item) ?? item.id}
              </Badge>
            ))
          : placeholder}
      </div>
      <Dropdown
        className="text-left"
        onKeyDown={({ key }) => {
          if (key === 'Escape') setShowDropdown(false);
        }}
        ref={dropdownRef}
      >
        {showDropdown === undefined || showDropdown ? (
          <Combobox.Options
            as={DropdownMenu}
            className="bg-base-100 shadow-xl"
            static={showDropdown !== undefined}
          >
            <Combobox.Input
              as={Input}
              color={error === undefined ? 'ghost' : 'error'}
              displayValue={(item: DataItem | null) =>
                item !== null ? getItemText(item) : ''
              }
              onChange={({ target: { value } }) => setQuery(value)}
              placeholder={placeholder}
              ref={inputRef}
              value={query}
            />
            {error?.message !== undefined ? (
              <FormError>{error.message}</FormError>
            ) : null}
            {isLoading ? <Progress className={classNames()} /> : null}
            {!isLoading && options?.length === 0 ? (
              <DropdownOption disabled>No Results</DropdownOption>
            ) : null}
            {!isLoading &&
              options?.map((option, index) => (
                <Combobox.Option as={Fragment} key={option.id} value={option}>
                  {({ active, disabled, selected }) => (
                    <DropdownOption
                      active={active}
                      className={classNames(index === 0 && 'mt-2')}
                      disabled={disabled}
                      selected={multi === true ? selected : undefined}
                    >
                      {getItemText(option)}
                    </DropdownOption>
                  )}
                </Combobox.Option>
              ))}
          </Combobox.Options>
        ) : null}
      </Dropdown>
    </Component>
  );
};
