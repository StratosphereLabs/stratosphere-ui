import { HTMLProps } from '../../../node_modules/react';
import { FieldValues } from 'react-hook-form';
import { FormFieldProps } from './types';
export declare const CHECKBOX_COLORS: readonly ["primary", "secondary", "accent", "success", "warning", "info", "error"];
export declare const CHECKBOX_SIZES: readonly ["lg", "md", "sm", "xs"];
export type CheckboxColor = (typeof CHECKBOX_COLORS)[number];
export type CheckboxSize = (typeof CHECKBOX_SIZES)[number];
export interface FormCheckboxProps<Values extends FieldValues> extends Omit<FormFieldProps<Values>, 'placeholder'>, Omit<HTMLProps<HTMLInputElement>, 'name' | 'size'> {
    color?: CheckboxColor;
    inputClassName?: string;
    size?: CheckboxSize;
}
export declare const FormCheckbox: <Values extends FieldValues>({ children, className, color, controllerProps, inputClassName, isRequired, labelText, name, showDirty, size, ...props }: FormCheckboxProps<Values>) => import("react/jsx-runtime").JSX.Element;
