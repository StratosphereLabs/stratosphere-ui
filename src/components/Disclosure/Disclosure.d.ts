import { ReactNode } from '../../../node_modules/react';
import { ButtonProps } from '../Button';
export interface DisclosureProps {
    buttonProps?: ButtonProps;
    children: ReactNode;
    className?: string;
    defaultOpen?: boolean;
    rounded?: boolean;
}
export declare const Disclosure: import('../../../node_modules/react').ForwardRefExoticComponent<DisclosureProps & import('../../../node_modules/react').RefAttributes<HTMLDivElement>>;
