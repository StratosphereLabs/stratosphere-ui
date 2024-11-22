import { ReactNode } from '../../../../node_modules/react';
import { FieldValues, UseFormProps } from 'react-hook-form';
export interface FormProviderProps<Values extends FieldValues> extends UseFormProps<Values> {
    children: ReactNode;
}
export declare const FormProvider: <Values extends FieldValues>({ children, ...rest }: FormProviderProps<Values>) => import("react/jsx-runtime").JSX.Element;
export default FormProvider;
