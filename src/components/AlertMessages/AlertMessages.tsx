import { Alert, Button } from 'react-daisyui';
import { useAlertMessages } from './AlertMessagesProvider';
import { statusToIconMap } from './constants';

export interface AlertMessagesProps {
  maxMessages?: number;
}

export const AlertMessages = ({
  maxMessages,
}: AlertMessagesProps): JSX.Element => {
  const { alertMessages, dismissAlertMessage } = useAlertMessages();
  return (
    <>
      {Array.from(Array(maxMessages ?? 1).keys()).map(index => {
        if (alertMessages[index] === undefined) return null;
        const status = alertMessages[index]?.status ?? 'success';
        const Icon = statusToIconMap[status];
        return (
          <Alert
            className="mb-2 flex w-full"
            key={`error_message_${index}`}
            status={alertMessages[index].status}
            icon={<Icon className="h-5 w-5" />}
          >
            <div className="flex flex-1 justify-between gap-2">
              {alertMessages[index].message}
            </div>
            <Button
              color="ghost"
              onClick={() => dismissAlertMessage(index)}
              shape="circle"
              size="xs"
              type="button"
            >
              ✕
            </Button>
          </Alert>
        );
      })}
    </>
  );
};
