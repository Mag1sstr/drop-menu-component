"use client";
import { useFilters } from "@/store/zustand/useFilters";
import { useEffect, useRef, useState } from "react";
import FilterItem from "../ui/FilterItem";
import { useGetCategoriesQuery } from "@/store/api";
import Dropdown from "../ui/Dropdown";
import {
  useGetBrandsQuery,
  useGetGenerationsQuery,
  useGetModelsQuery,
} from "@/store/frostApi";
import { IItems } from "@/app/frostTypes";

function Filters() {
  // const [selectItem, setSelectItem] = useState<IItems[]>([]);

  const {
    brandId,
    modelId,
    generationId,
    setBrandId,
    setModelId,
    setGenerationId,
  } = useFilters();
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
    skip: brandId === 0,
    refetchOnMountOrArgChange: true,
  });
  const { data: generations = [] } = useGetGenerationsQuery(modelId, {
    skip: modelId === 0,
    refetchOnMountOrArgChange: true,
  });

  return (
    <aside className="w-66 py-3 bg-black">
      <Dropdown
        label="Марка"
        data={brands}
        value={brandId}
        onChange={(item) => {
          setBrandId(brandId === item.id ? 0 : item.id);
          setModelId(0);
          setGenerationId(0);
        }}
      />
      <Dropdown
        label="Модель"
        data={models}
        value={modelId}
        onChange={(item) => {
          setModelId(modelId === item.id ? 0 : item.id);
          setGenerationId(0);
        }}
      />
      <Dropdown
        label="Поколение"
        data={generations}
        value={generationId}
        onChange={(item) => {
          setGenerationId(generationId === item.id ? 0 : item.id);
        }}
      />

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
