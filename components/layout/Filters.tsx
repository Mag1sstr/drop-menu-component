"use client";
import { useFilters } from "@/store/zustand/useFilters";
import { useEffect, useRef, useState } from "react";
import FilterItem from "../ui/FilterItem";
import { useGetCategoriesQuery } from "@/store/api";

function Filters() {
  const { setMaxPrice, setMinPrice, rangePrice } = useFilters();
  const { data: categories } = useGetCategoriesQuery();

  return (
    <aside className="w-66 py-3 bg-black">
      <FilterItem label="Категории">
        {categories?.map(({ name, slug }) => (
          <div
            key={slug}
            className="bg-[#1d1d1d]  p-2 pr-3 text-white/50 uppercase text-[12px] font-medium flex items-center justify-between transition-all hover:bg-[#2D2D2D]"
          >
            {name}
          </div>
        ))}
      </FilterItem>
      <input
        className="bg-white p-3 m-3"
        value={rangePrice.price_min}
        onChange={(e) => setMinPrice(e.target.value)}
        type="number"
        placeholder="min"
      />
      <input
        className="bg-white p-3 m-3"
        value={rangePrice.price_max}
        onChange={(e) => setMaxPrice(e.target.value)}
        type="number"
        placeholder="max"
      />
    </aside>
  );
}

export default Filters;
