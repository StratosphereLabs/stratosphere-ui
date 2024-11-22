import { HTMLProps } from '../../../node_modules/react';
import { FieldValues } from 'react-hook-form';
import { Transform } from '../../common';
import { FormFieldProps } from './types';
export declare const TEXTAREA_COLORS: readonly ["ghost", "primary", "secondary", "accent", "info", "success", "warning", "error"];
export declare const TEXTAREA_SIZES: readonly ["lg", "md", "sm", "xs"];
export type TextareaColor = (typeof TEXTAREA_COLORS)[number];
export type TextareaSize = (typeof TEXTAREA_SIZES)[number];
export interface FormTextareaProps<Values extends FieldValues, TOutput> extends FormFieldProps<Values>, Omit<HTMLProps<HTMLTextAreaElement>, 'name' | 'size'> {
    bordered?: boolean;
    color?: TextareaColor;
    hideErrorMessage?: boolean;
    inputClassName?: string;
    size?: TextareaSize;
    transform?: Transform<TOutput>;
}
export declare const FormTextarea: <Values extends FieldValues, TOutput>({ bordered, className, color, controllerProps, hideErrorMessage, inputClassName, isRequired, labelText, name, showDirty, size, transform, ...props }: FormTextareaProps<Values, TOutput>) => import("react/jsx-runtime").JSX.Element;
