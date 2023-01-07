import { Alert, Button } from 'react-daisyui';
import { useAlertMessages } from './AlertMessagesProvider';
import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from '../Icons';

export interface AlertMessagesListProps {
  maxMessages?: number;
}

const statusToIconMap = {
  info: InfoIcon,
  success: SuccessIcon,
  warning: WarningIcon,
  error: ErrorIcon,
};

export const AlertMessagesList = ({
  maxMessages,
}: AlertMessagesListProps): JSX.Element => {
  const { alertMessages, dismissAlertMessage } = useAlertMessages();
  return (
    <>
      {Array.from(Array(maxMessages ?? 1).keys()).map(index => {
        if (alertMessages[index] === undefined) return null;
        const status = alertMessages[index]?.status ?? 'success';
        const Icon = statusToIconMap[status];
        return (
          <Alert
            className="min-w-[400px] mb-2"
            key={`error_message_${index}`}
            status={alertMessages[index].status}
            icon={<Icon />}
          >
            <div className="w-full flex-row justify-between gap-2">
              {alertMessages[index].message}
            </div>
            <Button
              color="ghost"
              onClick={() => dismissAlertMessage(index)}
              shape="circle"
              size="xs"
            >
              ✕
            </Button>
          </Alert>
        );
      })}
    </>
  );
};
