import { RadioGroupProps } from '@headlessui/react';
import { ReactNode } from '../../../node_modules/react';
import { FieldValues } from 'react-hook-form';
import { FormFieldProps } from './types';
export interface FormRadioGroupProps<Values extends FieldValues> extends Omit<FormFieldProps<Values>, 'placeholder' | 'showDirty'>, Omit<RadioGroupProps<'button', string>, 'children' | 'className' | 'name' | 'onChange' | 'value'> {
    children: ReactNode;
    className?: string;
}
export declare const FormRadioGroup: <Values extends FieldValues>({ children, className, controllerProps, isRequired, labelText, name, ...props }: FormRadioGroupProps<Values>) => import("react/jsx-runtime").JSX.Element;
