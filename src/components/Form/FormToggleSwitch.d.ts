import { HTMLProps } from '../../../node_modules/react';
import { FieldValues } from 'react-hook-form';
import { FormFieldProps } from './types';
export declare const TOGGLE_COLORS: readonly ["primary", "secondary", "accent", "success", "warning", "info", "error"];
export declare const TOGGLE_SIZES: readonly ["xl", "lg", "md", "sm", "xs"];
export type ToggleColor = (typeof TOGGLE_COLORS)[number];
export type ToggleSize = (typeof TOGGLE_SIZES)[number];
export interface FormToggleSwitchProps<Values extends FieldValues> extends Omit<FormFieldProps<Values>, 'placeholder'>, Omit<HTMLProps<HTMLInputElement>, 'name' | 'size'> {
    color?: ToggleColor;
    inputClassName?: string;
    size?: ToggleSize;
}
export declare const FormToggleSwitch: <Values extends FieldValues>({ children, className, color, controllerProps, inputClassName, isRequired, labelText, name, showDirty, size, ...props }: FormToggleSwitchProps<Values>) => import("react/jsx-runtime").JSX.Element;
