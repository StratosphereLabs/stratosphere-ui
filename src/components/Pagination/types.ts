export interface PaginationMetadata {
  page: number;
  pageCount: number;
  limit: number;
  itemCount: number;
}

export interface PaginatedResults<Data> {
  metadata: PaginationMetadata;
  results: Data[];
}
