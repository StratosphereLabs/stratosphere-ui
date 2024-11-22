import { HTMLProps, ReactNode, RefObject } from '../../../node_modules/react';
import { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form';
export interface FormProps<Values extends FieldValues> extends Omit<HTMLProps<HTMLFormElement>, 'ref'> {
    children?: ReactNode;
    formRef?: RefObject<HTMLFormElement>;
    methods: UseFormReturn<Values>;
    onFormSubmit?: SubmitHandler<Values>;
}
export declare const Form: <Values extends FieldValues>({ children, formRef, methods, onFormSubmit, ...props }: FormProps<Values>) => import("react/jsx-runtime").JSX.Element;
