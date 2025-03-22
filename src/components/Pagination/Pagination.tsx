import classNames from 'classnames';
import { HTMLProps } from 'react';

import { Button, ButtonProps } from '../Button';
import { PaginationMetadata } from './types';
import { getPageNumbers } from './utils';

export interface PaginationProps
  extends Omit<HTMLProps<HTMLDivElement>, 'size'> {
  metadata?: PaginationMetadata;
  onPaginationChange: (page: number) => void;
  size?: ButtonProps['size'];
}

export const Pagination = ({
  className,
  metadata,
  onPaginationChange,
  size,
  ...props
}: PaginationProps) => {
  const pages = getPageNumbers(metadata);
  return metadata ? (
    <div className={classNames('join', className)} {...props}>
      {pages.map((number, index) => (
        <Button
          key={index}
          active={number === metadata.page}
          className="join-item"
          onClick={
            number !== null ? () => onPaginationChange(number) : undefined
          }
          disabled={number === null}
          size={size}
        >
          {number ?? '...'}
        </Button>
      ))}
    </div>
  ) : null;
};
