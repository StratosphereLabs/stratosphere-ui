import classNames from 'classnames';
import { Button } from '../Button';
import { useAlertMessages } from './AlertMessagesProvider';
import { statusToIconMap } from './constants';

export interface AlertMessagesProps {
  alertClassName?: string;
  maxMessages?: number;
}

export const AlertMessages = ({
  alertClassName,
  maxMessages,
}: AlertMessagesProps): JSX.Element => {
  const { alertMessages, dismissAlertMessage } = useAlertMessages();
  return (
    <>
      {Array.from(Array(maxMessages ?? 1).keys()).map(index => {
        if (alertMessages[index] === undefined) return null;
        const status = alertMessages[index].color ?? 'success';
        const description = alertMessages[index].description ?? '';
        const Icon = statusToIconMap[status];
        return (
          <div
            className={classNames(
              'alert flex w-full',
              `alert-${status}`,
              alertClassName,
            )}
            key={`error_message_${index}`}
          >
            <Icon className="h-5 w-5" />
            <div className="flex-1">
              <h3 className={description.length ? 'font-bold' : undefined}>
                {alertMessages[index].title}
              </h3>
              {description.length ? (
                <div className="text-xs">
                  {alertMessages[index].description}
                </div>
              ) : null}
            </div>
            <Button
              aria-label="Close Alert"
              color="ghost"
              onClick={() => dismissAlertMessage(index)}
              shape="circle"
              size="xs"
            >
              ✕
            </Button>
          </div>
        );
      })}
    </>
  );
};
