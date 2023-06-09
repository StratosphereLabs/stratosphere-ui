import classNames from 'classnames';
import { HTMLAttributes } from 'react';

export type CardBodyProps = HTMLAttributes<HTMLDivElement>;

export const CardBody = ({ className, ...props }: CardBodyProps) => (
  <div className={classNames('card-body', className)} {...props} />
);
