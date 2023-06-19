import { Combobox } from '@headlessui/react';
import classNames from 'classnames';
import { Fragment, KeyboardEvent, KeyboardEventHandler } from 'react';
import { FieldValues, useController, useFormContext } from 'react-hook-form';
import { GenericDataType, getGroupedDataItems } from '../../common';
import { useFieldColor, UseTypeaheadQueryOptions } from '../../hooks';
import { Badge, BadgeColor } from '../Badge';
import { FormError, FormFieldProps, FormLabel, FormValueMode } from '../Form';
import { ComboboxMulti } from '../Form/FormComboboxMulti';
import { ComboboxSingle } from '../Form/FormComboboxSingle';
import { useSelectFormSync } from '../Form/useSelectFormSync';
import { Menu, MenuItem, MenuSize } from '../Menu';
import { useTypeaheadSelect } from './useTypeaheadSelect';

export interface TypeaheadSelectProps<
  DataItem extends GenericDataType,
  Values extends FieldValues,
> extends UseTypeaheadQueryOptions<DataItem>,
    FormFieldProps<Values> {
  badgeColor?: BadgeColor;
  className?: string;
  disabled?: boolean;
  disableSingleSelectBadge?: true;
  formValueMode?: FormValueMode;
  getBadgeText?: (item: DataItem) => string;
  getItemText: (data: DataItem) => string;
  inputPlaceholder?: string;
  menuClassName?: string;
  menuSize?: MenuSize;
  multi?: true;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
}

export const TypeaheadSelect = <
  DataItem extends GenericDataType,
  Values extends FieldValues,
>({
  badgeColor,
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
  menuSize,
  multi,
  name,
  onDebouncedChange,
  onKeyDown,
  options: optionsArray,
  placeholder,
  showDirty,
}: TypeaheadSelectProps<DataItem, Values>) => {
  const {
    fieldState: { error },
    field: { ref },
  } = useController({
    ...controllerProps,
    name,
  });
  const {
    clearSelectedItem,
    dropdownRef,
    isLoading,
    query,
    showDropdown,
    searchInputRef,
    selectedItems,
    setShowDropdown,
    setSelectedItems,
    setQuery,
  } = useTypeaheadSelect<HTMLUListElement, DataItem, Values>({
    debounceTime,
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
              fieldColor && `input-${fieldColor}`,
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
                    color={badgeColor ?? 'neutral'}
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
            className="input-bordered input w-full"
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
          as={Menu}
          className={classNames(
            'rounded-box absolute z-50 bg-base-100 p-2 shadow-xl',
            menuClassName,
          )}
          ref={dropdownRef}
          size={menuSize}
          static
        >
          {enableBadges ? (
            <Combobox.Input
              className="input-bordered input w-full"
              onChange={({ target: { value } }) => {
                setQuery(value);
              }}
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
            <progress
              className={classNames('progress w-full', enableBadges && 'mt-2')}
            />
          ) : null}
          {!isLoading && optionsArray?.length === 0 ? (
            <MenuItem disabled>No Results</MenuItem>
          ) : null}
          {!isLoading
            ? optionsArray?.map((option, index) => (
                <Combobox.Option as={Fragment} key={option.id} value={option}>
                  {({ active, disabled, selected }) => (
                    <MenuItem
                      className={classNames(
                        index === 0 && enableBadges && 'mt-2',
                      )}
                      disabled={disabled}
                      focus={active}
                      selected={multi === true ? selected : undefined}
                    >
                      {getItemText(option)}
                    </MenuItem>
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
