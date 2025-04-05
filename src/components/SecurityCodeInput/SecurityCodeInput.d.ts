import { RefObject } from '../../../node_modules/react';
export interface SecurityCodeInputProps<NextElement> {
    className?: string;
    inputRef: RefObject<HTMLInputElement>;
    inputClassName?: string;
    name: string;
    nextFocusRef?: RefObject<NextElement>;
}
export declare const SecurityCodeInput: <NextElement extends HTMLElement>({ className, inputRef, inputClassName, name, nextFocusRef, }: SecurityCodeInputProps<NextElement>) => import("react/jsx-runtime").JSX.Element;
