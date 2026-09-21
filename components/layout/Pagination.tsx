interface IProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (n: number) => void;
}
function Pagination({ totalPages, currentPage, setCurrentPage }: IProps) {
  const pages = (() => {
    if (totalPages <= 5) {
      return [...Array(totalPages)].map((_, i) => i + 1);
    }

    if (totalPages > 5 && currentPage < 5) {
      return [1, 2, 3, 4, 5, "...", totalPages];
    }

    return [
      1,
      "...",
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
      "...",
      totalPages,
    ];
  })();
  return (
    <div className="flex gap-0">
      {pages.map((page) =>
        page === "..." ? (
          <div className="self-end">...</div>
        ) : (
          <div
            onClick={() => setCurrentPage(page as number)}
            className="text-[15px] font-semibold text-[#888888] px-4.5 py-3 rounded-[15px] border border-[#EDEDED] bg-white"
          >
            {page}
          </div>
        ),
      )}
    </div>
  );
}

export default Pagination;
