import { HTMLProps } from '../../../node_modules/react';
export interface FormLabelTextProps extends HTMLProps<HTMLSpanElement> {
    isRequired?: boolean;
}
export declare const FormLabelText: import('../../../node_modules/react').ForwardRefExoticComponent<Omit<FormLabelTextProps, "ref"> & import('../../../node_modules/react').RefAttributes<HTMLSpanElement>>;
