import { AlertMessagesList, AlertMessagesListProps } from './AlertMessagesList';
import {
  AlertMessagesProvider,
  AlertMessagesProviderProps,
} from './AlertMessagesProvider';

export interface AlertMessagesProps
  extends AlertMessagesListProps,
    Pick<AlertMessagesProviderProps, 'initialData'> {}

export const AlertMessages = ({
  initialData,
  maxMessages,
}: AlertMessagesProps) => (
  <AlertMessagesProvider initialData={initialData}>
    <AlertMessagesList maxMessages={maxMessages} />
  </AlertMessagesProvider>
);
