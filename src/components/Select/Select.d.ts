import { AnchorProps } from '@headlessui/react/dist/internal/floating';
import { ReactNode } from '../../../node_modules/react';
import { FieldValues } from 'react-hook-form';
import { GenericDataType } from '../../common';
import { ButtonColor, ButtonProps } from '../Button';
import { FormFieldProps, FormValueMode } from '../Form';
import { MenuSize } from '../Menu';
export interface SelectProps<DataItem extends GenericDataType, Values extends FieldValues> extends Omit<FormFieldProps<Values>, 'controllerProps' | 'placeholder' | 'showDirty'> {
    anchor?: AnchorProps;
    buttonColor?: ButtonColor;
    buttonProps?: ButtonProps;
    className?: string;
    disabled?: boolean;
    dropdownIcon?: ReactNode;
    formValueMode?: FormValueMode;
    getItemText: (data: DataItem) => ReactNode;
    hideDropdownIcon?: true;
    menuClassName?: string;
    menuSize?: MenuSize;
    multi?: true;
    options?: DataItem[];
    showDirty?: boolean;
}
export declare const Select: <DataItem extends GenericDataType, Values extends FieldValues>({ anchor, buttonColor, buttonProps: { children: buttonChildren, className: buttonClassName, color: buttonPropsColor, ...buttonProps }, className, disabled, dropdownIcon, formValueMode, getItemText, hideDropdownIcon, isRequired, labelText, menuClassName, menuSize, multi, name, options: optionsArray, showDirty, }: SelectProps<DataItem, Values>) => import("react/jsx-runtime").JSX.Element;
