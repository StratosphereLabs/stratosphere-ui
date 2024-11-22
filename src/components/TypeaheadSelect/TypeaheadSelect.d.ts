import { KeyboardEventHandler, ReactNode } from '../../../node_modules/react';
import { FieldValues } from 'react-hook-form';
import { GenericDataType } from '../../common';
import { UseTypeaheadQueryOptions } from '../../hooks';
import { BadgeColor } from '../Badge';
import { FormFieldProps, FormValueMode, InputColor, InputSize } from '../Form';
import { MenuSize } from '../Menu';
export interface TypeaheadSelectProps<DataItem extends GenericDataType, Values extends FieldValues> extends UseTypeaheadQueryOptions<DataItem>, FormFieldProps<Values> {
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
export declare const TypeaheadSelect: <DataItem extends GenericDataType, Values extends FieldValues>({ badgeColor, bordered, className, color, controllerProps, debounceTime, disabled, disableSingleSelectBadge, dropdownInputClassName, formValueMode, getBadgeClassName, getBadgeText, getItemText, inputClassName, inputPlaceholder, isRequired, labelText, menuClassName, menuSize, multi, name, onDebouncedChange, onKeyDown, options: optionsArray, placeholder, showDirty, size, }: TypeaheadSelectProps<DataItem, Values>) => import("react/jsx-runtime").JSX.Element;
