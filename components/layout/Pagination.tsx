interface IProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (p: number | ((prev: number) => number)) => void;
}

function Pagination({ totalPages, currentPage, setCurrentPage }: IProps) {
  const pages = (() => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, 4, "...", totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [
        1,
        "...",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  })();

  return (
    <div className="flex mb-10">
      {currentPage > 1 && (
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage <= 1}
          className={`border-4 border-[#A5A5A5] hover:bg-(--prime) hover:border-(--prime) cursor-pointer group transition-all text-[14px]  w-13 h-13 font-bold flex items-center justify-center border-collapse`}
        >
          <svg
            width="9"
            height="15"
            viewBox="0 0 9 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.4037 1.10938L2.4037 7.10938L6.4037 13.1094"
              stroke="#A5A5A5"
              strokeWidth="4"
              className="group-hover:stroke-white"
            />
          </svg>
        </button>
      )}
      {pages.map((page) => (
        <button
          key={page}
          disabled={page === "..."}
          onClick={() => {
            setCurrentPage(page as number);
          }}
          className={`border-4 ${page === currentPage ? "bg-(--prime) text-white border-(--prime)" : "text-[#A5A5A5] border-[#A5A5A5]"} ${page === "..." ? "cursor-default" : "cursor-pointer"} transition-all text-[14px]  w-13 h-13 font-bold flex items-center justify-center border-collapse`}
        >
          {page}
        </button>
      ))}
      {currentPage < totalPages && (
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage >= totalPages}
          className={`border-4 border-[#A5A5A5] hover:bg-(--prime) rotate-180 hover:border-(--prime) cursor-pointer group transition-all text-[14px]  w-13 h-13 font-bold flex items-center justify-center border-collapse`}
        >
          <svg
            width="9"
            height="15"
            viewBox="0 0 9 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.4037 1.10938L2.4037 7.10938L6.4037 13.1094"
              stroke="#A5A5A5"
              strokeWidth="4"
              className="group-hover:stroke-white"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

export default Pagination;
