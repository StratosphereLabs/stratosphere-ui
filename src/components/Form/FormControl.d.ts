import { HTMLProps, ReactNode } from '../../../node_modules/react';
import { FieldValues } from 'react-hook-form';
import { Transform } from '../../common';
import { FormFieldProps } from './types';
export declare const INPUT_COLORS: readonly ["ghost", "neutral", "primary", "secondary", "accent", "info", "success", "warning", "error"];
export declare const INPUT_SIZES: readonly ["xl", "lg", "md", "sm", "xs"];
export type InputColor = (typeof INPUT_COLORS)[number];
export type InputSize = (typeof INPUT_SIZES)[number];
export interface FormControlProps<Values extends FieldValues, TOutput> extends FormFieldProps<Values>, Omit<HTMLProps<HTMLInputElement>, 'name' | 'size'> {
    bordered?: boolean;
    color?: InputColor;
    elementLeft?: ReactNode;
    elementRight?: ReactNode;
    hideErrorMessage?: boolean;
    inputClassName?: string;
    size?: InputSize;
    transform?: Transform<TOutput>;
}
export declare const FormControl: <Values extends FieldValues, TOutput>({ bordered, className, color, controllerProps, elementLeft, elementRight, hideErrorMessage, inputClassName, isRequired, labelText, name, showDirty, size, transform, ...props }: FormControlProps<Values, TOutput>) => import("react/jsx-runtime").JSX.Element;
