import { ButtonProps } from '../Button';
export interface FormRadioGroupOptionProps extends Omit<ButtonProps, 'color'> {
    activeColor?: ButtonProps['color'];
    inactiveColor?: ButtonProps['color'];
    value: string;
}
export declare const FormRadioGroupOption: ({ activeColor, children, className, disabled, inactiveColor, value, ...props }: FormRadioGroupOptionProps) => import("react/jsx-runtime").JSX.Element;
