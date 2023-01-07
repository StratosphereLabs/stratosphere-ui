import { createContext, ReactNode, useContext, useState } from 'react';
import { AlertProps } from 'react-daisyui';

export interface AlertMessage {
  status: AlertProps['status'];
  message: string;
}

export interface AlertMessagesContextData {
  alertMessages: AlertMessage[];
  addAlertMessages: (messages: AlertMessage[]) => void;
  clearAlertMessages: () => void;
  dismissAlertMessage: (index?: number) => void;
}

interface AlertMessagesProviderProps {
  children: ReactNode;
}

const initialContext: AlertMessagesContextData = {
  alertMessages: [],
  addAlertMessages: () => undefined,
  clearAlertMessages: () => undefined,
  dismissAlertMessage: () => undefined,
};

const AlertMessagesContext =
  createContext<AlertMessagesContextData>(initialContext);

export const useAlertMessages = (): AlertMessagesContextData =>
  useContext(AlertMessagesContext);

export const AlertMessagesProvider = ({
  children,
}: AlertMessagesProviderProps): JSX.Element => {
  const [alertMessages, setAlertMessages] = useState<AlertMessage[]>(
    initialContext.alertMessages,
  );
  const addAlertMessages = (messages: AlertMessage[]): void =>
    setAlertMessages(prevMessages => [...prevMessages, ...messages]);
  const clearAlertMessages = (): void => setAlertMessages([]);
  const dismissAlertMessage = (index?: number): void =>
    setAlertMessages(prevMessages =>
      prevMessages.filter((_, i) => i !== index || 0),
    );
  return (
    <AlertMessagesContext.Provider
      value={{
        alertMessages,
        addAlertMessages,
        clearAlertMessages,
        dismissAlertMessage,
      }}
    >
      {children}
    </AlertMessagesContext.Provider>
  );
};
