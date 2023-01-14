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
            className="w-full flex mb-2"
            key={`error_message_${index}`}
            status={alertMessages[index].status}
            icon={<Icon />}
          >
            <div className="flex-1 flex justify-between gap-2">
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
