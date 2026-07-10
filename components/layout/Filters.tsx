"use client";
import { useFilters } from "@/store/zustand/useFilters";
import { useEffect, useRef, useState } from "react";
import FilterItem from "../ui/FilterItem";
import { useGetCategoriesQuery } from "@/store/api";
import Dropdown from "../ui/Dropdown";
import { useGetBrandsQuery, useGetModelsQuery } from "@/store/frostApi";

function Filters() {
  const { brandId, setBrandId } = useFilters();
  // const {
  //   setMaxPrice,
  //   setMinPrice,
  //   rangePrice,
  //   categorySlug,
  //   setCategorySlug,
  // } = useFilters();
  // const { data: categories } = useGetCategoriesQuery();
  const { data: brands = [] } = useGetBrandsQuery();
  const { data: models = [] } = useGetModelsQuery(brandId, {
    skip: !brandId,
    refetchOnMountOrArgChange: true,
  });

  console.log(brandId);

  return (
    <aside className="w-66 py-3 bg-black">
      {/* <FilterItem label="Категории">
        {categories?.map(({ name, slug }) => (
          <div
            onClick={() => setCategorySlug(categorySlug === slug ? null : slug)}
            key={slug}
            className={` p-2 pr-3 text-white/50 uppercase text-[12px] font-medium flex items-center justify-between transition-all hover:bg-[#2D2D2D] ${slug === categorySlug ? "bg-[#2D2D2D]" : "bg-[#1d1d1d]"}`}
          >
            {name}
          </div>
        ))}
      </FilterItem> */}
      <Dropdown
        label="Марки"
        data={brands}
        onChange={(id) => {
          setBrandId(id);
        }}
      />
      <Dropdown label="Модели" data={models} />

      {/* <input
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
      /> */}
    </aside>
  );
}

export default Filters;
