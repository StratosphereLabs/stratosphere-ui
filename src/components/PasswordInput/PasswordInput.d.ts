import { ReactNode } from '../../../node_modules/react';
import { FieldValues } from 'react-hook-form';
import { FormControlProps } from '../Form';
export interface PasswordInputProps<Values extends FieldValues, TOutput> extends Omit<FormControlProps<Values, TOutput>, 'elementRight' | 'type'> {
    iconShow?: ReactNode;
    iconHide?: ReactNode;
}
export declare const PasswordInput: <Values extends FieldValues, TOutput>({ iconHide, iconShow, inputClassName, ...props }: PasswordInputProps<Values, TOutput>) => import("react/jsx-runtime").JSX.Element;
