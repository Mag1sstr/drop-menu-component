import { useState } from "react";
interface IReturn {
  currentPage: number;
  setCurrentPage: (n: number | ((prev: number) => number)) => void;
  startIndex: number;
  endIndex: number;
  totalPages: number;
}
export const usePagination = ({
  data = [],
  pageSize = 9,
}: {
  data: any[] | null;
  pageSize: number;
}): IReturn => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = !!data ? Math.ceil(data.length / pageSize) : 1;

  const startIndex = currentPage * pageSize - pageSize;
  const endIndex = startIndex + pageSize;

  return { currentPage, setCurrentPage, startIndex, endIndex, totalPages };
};
