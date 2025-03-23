import {
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Label,
} from '@headlessui/react';
import classNames from 'classnames';
import {
  Fragment,
  KeyboardEvent,
  KeyboardEventHandler,
  ReactNode,
} from 'react';
import { FieldValues, useController, useFormContext } from 'react-hook-form';

import { GenericDataType, getGroupedDataItems } from '../../common';
import { UseTypeaheadQueryOptions, useFieldColor } from '../../hooks';
import { Badge, BadgeColor } from '../Badge';
import {
  FormError,
  FormFieldProps,
  FormLabelText,
  FormValueMode,
  InputColor,
  InputSize,
} from '../Form';
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
  bordered?: boolean;
  color?: InputColor;
  className?: string;
  dropdownInputClassName?: string;
  disabled?: boolean;
  disableSingleSelectBadge?: true;
  formValueMode?: FormValueMode;
  getBadgeClassName?: (item: DataItem) => string;
  getBadgeText?: (item: DataItem) => ReactNode;
  getItemText: (data: DataItem) => ReactNode;
  inputClassName?: string;
  inputPlaceholder?: string;
  menuClassName?: string;
  menuSize?: MenuSize;
  multi?: true;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  size?: InputSize;
}

export const TypeaheadSelect = <
  DataItem extends GenericDataType,
  Values extends FieldValues,
>({
  badgeColor,
  bordered,
  className,
  color,
  controllerProps,
  debounceTime,
  disabled,
  disableSingleSelectBadge,
  dropdownInputClassName,
  formValueMode,
  getBadgeClassName,
  getBadgeText,
  getItemText,
  inputClassName,
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
  size,
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
  const currentColor = fieldColor ?? color ?? undefined;
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
      <fieldset className="fieldset py-0">
        {labelText !== undefined ? (
          <Label as={FormLabelText} isRequired={isRequired}>
            {labelText}
          </Label>
        ) : null}
        {enableBadges ? (
          <div
            className={classNames(
              'input flex w-full items-center gap-1 overflow-x-scroll scrollbar-none',
              bordered && `input-bordered`,
              !disabled && 'cursor-pointer',
              currentColor && `input-${currentColor}`,
              size && `input-${size}`,
              inputClassName,
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
                    className={getBadgeClassName?.(item)}
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
          <ComboboxInput
            className={classNames(
              'input w-full',
              bordered && `input-bordered`,
              currentColor && `input-${currentColor}`,
              size && `input-${size}`,
              inputClassName,
            )}
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
      </fieldset>
      {showDropdown ? (
        <ComboboxOptions
          as={Menu}
          className={classNames(
            'absolute rounded-box p-2 shadow-xl',
            menuClassName,
          )}
          ref={dropdownRef}
          size={menuSize}
          static
        >
          {enableBadges ? (
            <ComboboxInput
              className={classNames('input w-full', dropdownInputClassName)}
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
                <ComboboxOption as={Fragment} key={option.id} value={option}>
                  {({ disabled, selected }) => (
                    <MenuItem
                      className={classNames(
                        index === 0 && enableBadges && 'mt-2',
                      )}
                      disabled={disabled}
                      selected={multi === true ? selected : undefined}
                    >
                      {getItemText(option)}
                    </MenuItem>
                  )}
                </ComboboxOption>
              ))
            : null}
        </ComboboxOptions>
      ) : null}
      {error?.message !== undefined ? (
        <FormError>{error.message}</FormError>
      ) : null}
    </Component>
  );
};
