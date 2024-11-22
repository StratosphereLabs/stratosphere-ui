import { ReactNode } from '../../../node_modules/react';
import { AlertColor } from '../Alert';
export interface AlertMessage {
    color?: AlertColor;
    title: string;
    description?: string;
}
export interface AlertMessagesContextData {
    alertMessages: AlertMessage[];
    addAlertMessages: (messages: AlertMessage[]) => void;
    clearAlertMessages: () => void;
    dismissAlertMessage: (index?: number) => void;
}
export interface AlertMessagesProviderProps {
    children: ReactNode;
    initialData?: AlertMessage[];
}
export declare const useAlertMessages: () => AlertMessagesContextData;
export declare const AlertMessagesProvider: ({ children, initialData, }: AlertMessagesProviderProps) => import("react/jsx-runtime").JSX.Element;
