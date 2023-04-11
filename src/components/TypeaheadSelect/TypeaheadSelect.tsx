import { Combobox, Transition } from '@headlessui/react';
import classNames from 'classnames';
import isEqual from 'lodash.isequal';
import { Fragment, KeyboardEvent, RefObject, useEffect, useRef } from 'react';
import { FieldValues } from 'react-hook-form';
import { Input, Progress } from 'react-daisyui';
import { useTypeaheadSelect } from './useTypeaheadSelect';
import { Badge } from '../Badge';
import { DropdownMenuItem } from '../DropdownMenu';
import { FormError, FormFieldProps, FormLabel } from '../Form';
import { ComboboxMulti } from '../Form/FormComboboxMulti';
import { ComboboxSingle } from '../Form/FormComboboxSingle';
import { GenericDataType } from '../../common';
import { useFieldColor, UseTypeaheadQueryOptions } from '../../hooks';

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
  menuClassName?: string;
  multi?: true;
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
  menuClassName,
  multi,
  name,
  onDebouncedChange,
  options,
  placeholder,
  showDirty,
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
  } = useTypeaheadSelect<HTMLUListElement, DataItem, Values>({
    controllerProps,
    debounceTime,
    name,
    onDebouncedChange,
    options,
  });
  const fieldColor = useFieldColor(name, showDirty);
  const currentDefaultOptions = useRef<DataItem[]>();
  const enableBadges = disableSingleSelectBadge === undefined || multi === true;
  const Component = multi === true ? ComboboxMulti : ComboboxSingle;
  useEffect(() => {
    if (
      defaultOptions?.length &&
      !isEqual(defaultOptions, currentDefaultOptions.current)
    ) {
      setSelectedItems(multi === true ? defaultOptions : [defaultOptions[0]]);
      currentDefaultOptions.current = defaultOptions;
    }
  }, [defaultOptions]);
  return (
    <Component
      className={classNames('relative', className)}
      getItemValue={getItemValue}
      name={name}
      selectedItems={selectedItems}
      setShowDropdown={setShowDropdown}
      setSelectedItems={items => {
        setSelectedItems(items);
        if (multi === undefined) ref.current?.focus();
      }}
    >
      <div className="form-control">
        {labelText !== undefined ? (
          <Combobox.Label as={FormLabel} isRequired={isRequired}>
            {labelText}
          </Combobox.Label>
        ) : null}
        {enableBadges ? (
          <div
            className={classNames(
              'input-bordered input flex cursor-pointer items-center gap-1 overflow-x-scroll scrollbar-none',
              `input-${fieldColor ?? 'ghost'}`,
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
            ref={ref}
          />
        )}
      </div>
      <Transition
        as={Fragment}
        show={showDropdown}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Combobox.Options
          as="ul"
          className={classNames(
            'menu rounded-box absolute z-50 bg-base-100 p-2 shadow-xl',
            menuClassName,
          )}
          ref={dropdownRef}
          static
        >
          {enableBadges ? (
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
          {isLoading ? (
            <Progress className={classNames(enableBadges && 'mt-2')} />
          ) : null}
          {!isLoading && options?.length === 0 ? (
            <DropdownMenuItem disabled>No Results</DropdownMenuItem>
          ) : null}
          {!isLoading &&
            options?.map((option, index) => (
              <Combobox.Option as={Fragment} key={option.id} value={option}>
                {({ active, disabled, selected }) => (
                  <DropdownMenuItem
                    active={active}
                    className={classNames(
                      index === 0 && enableBadges && 'mt-2',
                    )}
                    disabled={disabled}
                    selected={multi === true ? selected : undefined}
                  >
                    {getItemText(option)}
                  </DropdownMenuItem>
                )}
              </Combobox.Option>
            ))}
        </Combobox.Options>
      </Transition>
      {error?.message !== undefined ? (
        <FormError>{error.message}</FormError>
      ) : null}
    </Component>
  );
};
