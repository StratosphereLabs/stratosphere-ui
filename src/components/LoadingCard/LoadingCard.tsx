import classNames from 'classnames';
import { HTMLProps } from 'react';
import { FullScreenLoader } from '../FullScreenLoader';

export interface LoadingCardProps extends HTMLProps<HTMLDivElement> {
  isLoading?: boolean;
}

export const LoadingCard = ({
  children,
  className,
  isLoading,
  ...props
}: LoadingCardProps): JSX.Element => (
  <div className={classNames('card', className)} {...props}>
    {isLoading === true ? <FullScreenLoader /> : children}
  </div>
);
