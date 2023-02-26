import { PaginationMetadata } from './types';

export const getPageNumbers = (
  metadata?: PaginationMetadata,
): Array<number | null> =>
  metadata
    ? [
        1,
        ...(metadata.page > 3 ? [null] : []),
        ...[...Array(3).keys()].flatMap(index => {
          const page = metadata.page + index - 1;
          return page > 1 && page < metadata.pageCount ? [page] : [];
        }),
        ...(metadata.page < metadata.pageCount - 2 ? [null] : []),
        metadata.pageCount,
      ]
    : [];
