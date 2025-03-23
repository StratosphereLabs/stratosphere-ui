import { HTMLProps } from '../../../node_modules/react';
import { FieldValues } from 'react-hook-form';
import { FormFieldProps } from './types';
export interface RadioOption {
    className?: string;
    id: string | number;
    label: string;
    value: string;
}
export declare const RADIO_COLORS: readonly ["neutral", "primary", "secondary", "accent", "success", "warning", "info", "error"];
export declare const RADIO_SIZES: readonly ["xl", "lg", "md", "sm", "xs"];
export type RadioColor = (typeof RADIO_COLORS)[number];
export type RadioSize = (typeof RADIO_SIZES)[number];
export interface FormRadioProps<Values extends FieldValues> extends Omit<FormFieldProps<Values>, 'placeholder'>, Omit<HTMLProps<HTMLInputElement>, 'name' | 'size'> {
    color?: RadioColor;
    inputClassName?: string;
    options: RadioOption[];
    size?: RadioSize;
}
export declare const FormRadio: <Values extends FieldValues>({ className, color, controllerProps, inputClassName, isRequired, labelText, name, options, showDirty, size, ...props }: FormRadioProps<Values>) => import("react/jsx-runtime").JSX.Element;
