import { Combobox } from '@headlessui/react';
import classNames from 'classnames';
import {
  Fragment,
  KeyboardEvent,
  MouseEvent,
  RefObject,
  useEffect,
  useRef,
} from 'react';
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
  disableSingleSelectBadge?: true;
  getBadgeText?: (item: DataItem) => string;
  getItemText: (data: DataItem) => string;
  getItemValue?: (data: DataItem) => string;
  inputPlaceholder?: string;
  inputRef?: RefObject<HTMLInputElement>;
  multi?: true;
  onItemClick?: (
    event: MouseEvent<HTMLAnchorElement>,
    option: DataItem,
  ) => void;
}

export const TypeaheadSelect = <
  DataItem extends GenericDataType,
  Values extends FieldValues,
>({
  className,
  controllerProps,
  debounceTime,
  defaultOptions,
  disableSingleSelectBadge,
  getBadgeText,
  getItemText,
  getItemValue,
  inputPlaceholder,
  inputRef,
  isRequired,
  labelText,
  multi,
  name,
  onDebouncedChange,
  onItemClick,
  options,
  placeholder,
}: TypeaheadSelectProps<DataItem, Values>): JSX.Element => {
  const ref = inputRef ?? useRef<HTMLInputElement>(null);
  const {
    clearSelectedItem,
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
  } = useTypeaheadSelect<DataItem, Values>({
    controllerProps,
    debounceTime,
    name,
    onDebouncedChange,
    options,
  });
  const Component = multi === true ? ComboboxMulti : ComboboxSingle;
  useEffect(() => {
    if (defaultOptions?.length)
      setSelectedItems(multi === true ? defaultOptions : [defaultOptions[0]]);
  }, [defaultOptions]);
  return (
    <Component
      className={className}
      getItemValue={getItemValue}
      name={name}
      selectedItems={selectedItems}
      setShowDropdown={setShowDropdown}
      setSelectedItems={items => {
        setSelectedItems(items);
        if (multi === undefined) ref.current?.focus();
      }}
    >
      {labelText !== undefined ? (
        <Combobox.Label as={FormLabel} isRequired={isRequired}>
          {labelText}
        </Combobox.Label>
      ) : null}
      {disableSingleSelectBadge === undefined || multi === true ? (
        <div
          className={classNames(
            'input-bordered input flex cursor-pointer items-center gap-1 overflow-x-scroll',
            error !== undefined ? 'input-error' : 'input-ghost',
          )}
          onBlur={event => {
            if (event.relatedTarget === null) setShowDropdown(false);
          }}
          onClick={() => setShowDropdown(true)}
          onKeyDown={event => {
            if (event.key === 'Enter') {
              event.preventDefault();
              setShowDropdown(true);
            } else if (event.key !== 'Tab' && event.key !== 'Shift') {
              setShowDropdown(true);
            }
          }}
          ref={ref}
          tabIndex={0}
        >
          {selectedItems.length > 0
            ? selectedItems.map((item, index) => (
                <Badge
                  dismissable
                  key={item.id}
                  onDismiss={() => clearSelectedItem(index)}
                >
                  {getBadgeText?.(item) ?? getItemText(item)}
                </Badge>
              ))
            : placeholder}
        </div>
      ) : (
        <Combobox.Input
          as={Input}
          className="w-full"
          displayValue={(item: DataItem | null) =>
            item ? getItemText(item) : ''
          }
          onChange={({ target: { value } }) => {
            setQuery(value);
            if (value.length > 0) {
              setShowDropdown(true);
            } else {
              setShowDropdown(false);
              setSelectedItems([]);
            }
          }}
          placeholder={placeholder}
          ref={inputRef}
        />
      )}
      <Dropdown
        className="text-left"
        onKeyDown={({ key }) => {
          if (key === 'Escape') setShowDropdown(false);
        }}
        ref={dropdownRef}
      >
        {showDropdown ? (
          <Combobox.Options
            as={DropdownMenu}
            className="bg-base-100 shadow-xl"
            static
          >
            {disableSingleSelectBadge === undefined || multi === true ? (
              <Combobox.Input
                as={Input}
                className="w-full"
                onChange={({ target: { value } }) => setQuery(value)}
                onKeyDown={({ key }: KeyboardEvent) => {
                  if (key === 'Tab') setShowDropdown(false);
                }}
                placeholder={inputPlaceholder}
                ref={searchInputRef}
                value={query}
              />
            ) : null}
            {isLoading ? <Progress className="mt-2" /> : null}
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
                      onClick={
                        onItemClick
                          ? event => onItemClick(event, option)
                          : undefined
                      }
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
      {error?.message !== undefined ? (
        <FormError>{error.message}</FormError>
      ) : null}
    </Component>
  );
};
