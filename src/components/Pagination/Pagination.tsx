import classNames from 'classnames';
import {
  Button,
  ButtonProps,
  Pagination as DaisyUIPagination,
  PaginationProps as DaisyUIPaginationProps,
} from 'react-daisyui';
import { PaginationMetadata } from './types';
import { getPageNumbers } from './utils';

export interface PaginationProps
  extends Omit<DaisyUIPaginationProps, 'children'> {
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
}: PaginationProps): JSX.Element | null => {
  const pages = getPageNumbers(metadata);
  return metadata ? (
    <DaisyUIPagination className={classNames('mt-4', className)} {...props}>
      {pages.map((number, index) => (
        <Button
          key={index}
          active={number === metadata.page}
          onClick={
            number !== null ? () => onPaginationChange(number) : undefined
          }
          disabled={number === null}
          size={size}
        >
          {number ?? '...'}
        </Button>
      ))}
    </DaisyUIPagination>
  ) : null;
};
