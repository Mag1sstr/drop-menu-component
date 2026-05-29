"use client";
import { useFilters } from "@/store/zustand/useFilters";
import { useEffect, useRef, useState } from "react";
import FilterItem from "../ui/FilterItem";

function Filters() {
  const { setMaxPrice, setMinPrice, rangePrice } = useFilters();

  return (
    <aside className="w-66 py-3 bg-black">
      <FilterItem label="Категории" />
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
