"use client";
import { useEffect, useRef, useState } from "react";
import ProductCard from "../ui/ProductCard";
import { IProduct } from "@/app/types";
import { useFilters } from "@/store/zustand/useFilters";
import { useFetch } from "@/hooks/useFetch";
import { usePagination } from "@/hooks/usePagination";

function Catalog() {
  const { rangePrice, setMaxPrice, categorySlug } = useFilters();

  const initialized = useRef(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filters =
    "?" +
    new URLSearchParams({
      ...rangePrice,
      categorySlug: categorySlug || "",
    });

  const { data, isLoading, isError } = useFetch<IProduct[]>(
    "https://api.escuelajs.co/api/v1/products" + filters,
  );

  const { currentPage, setCurrentPage, startIndex, endIndex, totalPages } =
    usePagination({ data, pageSize: 9 });

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

  useEffect(() => {
    if (!initialized.current && data && data.length > 0) {
      setMaxPrice(Math.max(...data.map((el) => el.price)).toString());
      initialized.current = true;
    }
  }, [data]);

  return (
    <section ref={sectionRef} className="h-500">
      <div className="flex justify-between mb-5">
        <ul className="flex [&>li]:flex [&>li]:items-center [&>li]:gap-1 text-[14px] font-medium uppercase">
          <li className="uppercase mr-5 ">Сортировать</li>
          <li className="text-[#1D1D1D]/50 mr-2">
            Цене{" "}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 8L10 12L16 8" stroke="#C53720" strokeWidth="4" />
            </svg>
          </li>
          <li className="text-[#1D1D1D]/50">
            ПО НАЛИЧИЮ{" "}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 8L10 12L16 8" stroke="#C53720" strokeWidth="4" />
            </svg>
          </li>
        </ul>
      </div>
      {isLoading && <p className="text-3xl text-center">ЗАГРУЗКА...</p>}
      {isError && <p className="+text-3xl text-center">{isError}</p>}

      <div className="grid grid-cols-3 gap-6 mb-10">
        {data?.slice(startIndex, endIndex).map((card) => (
          <ProductCard key={card.id} {...card} />
        ))}
      </div>

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
              sectionRef.current?.scrollIntoView({
                block: "start",
                behavior: "smooth",
              });
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
    </section>
  );
}

export default Catalog;
