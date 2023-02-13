export interface PaginationMetadata {
  page: number;
  pageCount: number;
  limit: number;
  itemCount: number;
  pages: Array<number | null>;
}

export interface PaginatedResults<Data> {
  metadata: PaginationMetadata;
  results: Data[];
}
