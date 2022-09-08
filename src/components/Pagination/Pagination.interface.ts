export interface PaginationProps {
  total: number;
  pageSize?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

export interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}
