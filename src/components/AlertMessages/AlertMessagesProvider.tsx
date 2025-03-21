import { ReactNode, createContext, useContext, useState } from 'react';

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

const initialContext = {
  alertMessages: [],
  addAlertMessages: () => undefined,
  clearAlertMessages: () => undefined,
  dismissAlertMessage: () => undefined,
};

const AlertMessagesContext =
  createContext<AlertMessagesContextData>(initialContext);

export const useAlertMessages = () => useContext(AlertMessagesContext);

export const AlertMessagesProvider = ({
  children,
  initialData,
}: AlertMessagesProviderProps) => {
  const [alertMessages, setAlertMessages] = useState<AlertMessage[]>(
    initialData ?? initialContext.alertMessages,
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
