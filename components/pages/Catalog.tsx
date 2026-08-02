"use client";
import { useEffect, useRef, useState } from "react";
import ProductCard from "../ui/ProductCard";

import Pagination from "../layout/Pagination";
import { useGetProductsQuery } from "@/store/frostApi";
import { FrostSortTypes, useFiltersRedux } from "@/store/slices/filterSlice";
import { useFilters } from "@/store/zustand/useFilters";
import { IProductData } from "@/app/frostTypes";

function Catalog() {
  const {
    rangePrice,
    setMaxPrice,
    categorySlug,
    brandId,
    modelId,
    generationId,
  } = useFilters();

  const initialized = useRef(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { sortTypes } = useFiltersRedux();

  // const filters =
  //   "?" +
  //   new URLSearchParams({
  //     ...rangePrice,
  //     categorySlug: categorySlug || "",
  //   });

  // const { data, isLoading, isError } = useFetch<IProduct[]>(
  //   "https://api.escuelajs.co/api/v1/products",
  //   {
  //     params: {
  //       ...rangePrice,
  //       categorySlug: categorySlug || "",
  //     },
  //   },
  // );

  // const { currentPage, setCurrentPage, startIndex, endIndex, totalPages } =
  //   usePagination({ data, pageSize: 9 });

  // useEffect(() => {
  //   if (!initialized.current && data && data.length > 0) {
  //     setMaxPrice(Math.max(...data.map((el) => el.price)).toString());
  //     initialized.current = true;
  //   }
  // }, [data]);
  const [page, setPage] = useState(1);
  const {
    data = { items: [], totalPages: 1 },
    isLoading,
    isError,
  } = useGetProductsQuery({
    size: 17,
    brandId,
    modelId,
    generationId,
  });

  const sortHandlers: Record<
    FrostSortTypes,
    (a: IProductData, b: IProductData) => number
  > = {
    askP: (a, b) => a.price - b.price,
    descP: (a, b) => b.price - a.price,
    ascL: (a, b) => a.name.length - b.name.length,
    descL: (a, b) => b.name.length - a.name.length,
  };

  const products = !!sortTypes.length
    ? [...data.items].sort((a, b) => {
        for (const sort of sortTypes) {
          const result = sortHandlers[sort](a, b);

          if (result !== 0) {
            return result;
          }
        }

        return 0;
      })
    : data.items;

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
        {products.map((card) => (
          <ProductCard key={card.id} {...card} />
        ))}
      </div>

      <Pagination
        totalPages={data?.totalPages || 1}
        setCurrentPage={setPage}
        currentPage={page}
      />
    </section>
  );
}

export default Catalog;
