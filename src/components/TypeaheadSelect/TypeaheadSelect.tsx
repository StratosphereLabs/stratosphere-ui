import { Combobox } from '@headlessui/react';
import classNames from 'classnames';
import { Fragment, KeyboardEvent, KeyboardEventHandler } from 'react';
import { FieldValues, useFormContext } from 'react-hook-form';
import { Input, Progress } from 'react-daisyui';
import { GenericDataType, getGroupedDataItems } from '../../common';
import { useFieldColor, UseTypeaheadQueryOptions } from '../../hooks';
import { Badge } from '../Badge';
import { DropdownMenuItem } from '../DropdownMenu';
import { FormError, FormFieldProps, FormLabel, FormValueMode } from '../Form';
import { ComboboxMulti } from '../Form/FormComboboxMulti';
import { ComboboxSingle } from '../Form/FormComboboxSingle';
import { useSelectFormSync } from '../Form/useSelectFormSync';
import { useTypeaheadSelect } from './useTypeaheadSelect';

export interface TypeaheadSelectProps<
  DataItem extends GenericDataType,
  Values extends FieldValues,
> extends UseTypeaheadQueryOptions<DataItem>,
    FormFieldProps<Values> {
  className?: string;
  disabled?: boolean;
  disableSingleSelectBadge?: true;
  formValueMode?: FormValueMode;
  getBadgeText?: (item: DataItem) => string;
  getItemText: (data: DataItem) => string;
  inputPlaceholder?: string;
  menuClassName?: string;
  multi?: true;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
}

export const TypeaheadSelect = <
  DataItem extends GenericDataType,
  Values extends FieldValues,
>({
  className,
  controllerProps,
  debounceTime,
  disabled,
  disableSingleSelectBadge,
  formValueMode,
  getBadgeText,
  getItemText,
  inputPlaceholder,
  isRequired,
  labelText,
  menuClassName,
  multi,
  name,
  onDebouncedChange,
  onKeyDown,
  options: optionsArray,
  placeholder,
  showDirty,
}: TypeaheadSelectProps<DataItem, Values>): JSX.Element => {
  const {
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
  } = useTypeaheadSelect<HTMLUListElement, DataItem, Values>({
    controllerProps,
    debounceTime,
    name,
    onDebouncedChange,
    options: optionsArray,
  });
  const options = getGroupedDataItems(optionsArray ?? []);
  useSelectFormSync({
    multi,
    name,
    onItemSelect: () => multi !== true && setShowDropdown(false),
    options,
    selectedItems,
    setSelectedItems,
    valueMode: formValueMode,
  });
  const { setFocus } = useFormContext();
  const fieldColor = useFieldColor(name, showDirty);
  const enableBadges = disableSingleSelectBadge === undefined || multi === true;
  const Component = multi === true ? ComboboxMulti : ComboboxSingle;
  return (
    <Component
      className={classNames('relative', className)}
      disabled={disabled}
      name={name}
      selectedItems={selectedItems}
      setSelectedItems={items => {
        setSelectedItems(items);
        if (multi === undefined) setFocus(name);
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
              'input-bordered input flex items-center gap-1 overflow-x-scroll scrollbar-none',
              !disabled && 'cursor-pointer',
              `input-${fieldColor ?? 'ghost'}`,
            )}
            onBlur={event => {
              if (event.relatedTarget === null) setShowDropdown(false);
            }}
            onClick={() => !disabled && setShowDropdown(true)}
            onKeyDown={event => {
              if (event.key === 'Enter') {
                event.preventDefault();
                setShowDropdown(true);
              } else if (event.key.length === 1) {
                setShowDropdown(true);
              }
            }}
            ref={ref}
            tabIndex={disabled ? -1 : 0}
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
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            ref={ref}
          />
        )}
      </div>
      {showDropdown ? (
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
              onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => {
                if (event.key === 'Tab') setShowDropdown(false);
                onKeyDown?.(event);
              }}
              placeholder={inputPlaceholder}
              ref={searchInputRef}
              value={query}
            />
          ) : null}
          {isLoading ? (
            <Progress className={classNames(enableBadges && 'mt-2')} />
          ) : null}
          {!isLoading && optionsArray?.length === 0 ? (
            <DropdownMenuItem disabled>No Results</DropdownMenuItem>
          ) : null}
          {!isLoading
            ? optionsArray?.map((option, index) => (
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
              ))
            : null}
        </Combobox.Options>
      ) : null}
      {error?.message !== undefined ? (
        <FormError>{error.message}</FormError>
      ) : null}
    </Component>
  );
};
