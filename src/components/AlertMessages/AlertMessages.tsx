import classNames from 'classnames';
import { Alert } from '../Alert';
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
        const color = alertMessages[index].color ?? 'success';
        const Icon = statusToIconMap[color];
        return (
          <Alert
            actionButtons={[
              {
                id: 'close',
                'aria-label': 'Close Alert',
                color: 'ghost',
                onClick: () => dismissAlertMessage(index),
                shape: 'circle',
                size: 'xs',
                children: '✕',
              },
            ]}
            className={classNames('flex w-full', alertClassName)}
            color={color}
            description={alertMessages[index].description}
            icon={Icon}
            key={`error_message_${index}`}
            title={alertMessages[index].title}
          />
        );
      })}
    </>
  );
};
