import classNames from 'classnames';
import { HTMLAttributes } from 'react';

export type CardTitleProps = HTMLAttributes<HTMLHeadingElement>;

export const CardTitle = ({ className, ...props }: CardTitleProps) => (
  <h2 className={classNames('card-title', className)} {...props} />
);
