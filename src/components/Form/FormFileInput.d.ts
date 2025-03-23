import { HTMLProps } from '../../../node_modules/react';
import { FieldValues } from 'react-hook-form';
import { FormFieldProps } from './types';
export declare const FILE_INPUT_COLORS: readonly ["ghost", "neutral", "primary", "secondary", "accent", "info", "warning", "success", "error"];
export declare const FILE_INPUT_SIZES: readonly ["xl", "lg", "md", "sm", "xs"];
export type FileInputColor = (typeof FILE_INPUT_COLORS)[number];
export type FileInputSize = (typeof FILE_INPUT_SIZES)[number];
export interface FormFileInputProps<Values extends FieldValues> extends FormFieldProps<Values>, Omit<HTMLProps<HTMLInputElement>, 'name' | 'size'> {
    bordered?: boolean;
    color?: FileInputColor;
    hideErrorMessage?: boolean;
    inputClassName?: string;
    size?: FileInputSize;
}
export declare const FormFileInput: <Values extends FieldValues>({ bordered, className, color, controllerProps, hideErrorMessage, inputClassName, isRequired, labelText, name, showDirty, size, ...props }: FormFileInputProps<Values>) => import("react/jsx-runtime").JSX.Element;
