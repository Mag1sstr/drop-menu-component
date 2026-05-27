"use client";
import { useFilters } from "@/store/zustand/useFilters";
import { useEffect, useRef, useState } from "react";

function Filters() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { setMaxPrice, setMinPrice, rangePrice } = useFilters();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (open && el) {
      el.style.height = el.scrollHeight + "px";
    } else {
      el.style.height = "0px";
    }
  }, [open]);
  return (
    <aside className="w-66 py-3 bg-black">
      <>
        <div
          onClick={() => setOpen(!open)}
          className="bg-(--prime) p-2 pr-3 text-white uppercase text-[14px] font-bold flex items-center justify-between"
        >
          АККУМУЛЯТОРЫ
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${open && "rotate-180"}`}
          >
            <path d="M16 8L10 12L4 8" stroke="white" strokeWidth="4" />
          </svg>
        </div>
        <div ref={ref} className="transition-all duration-300 overflow-hidden">
          <div className="bg-(--prime) p-2 pr-3 text-white uppercase text-[14px] font-bold flex items-center justify-between">
            1
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 8L10 12L4 8" stroke="white" strokeWidth="4" />
            </svg>
          </div>
          <div className="bg-(--prime) p-2 pr-3 text-white uppercase text-[14px] font-bold flex items-center justify-between">
            2
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 8L10 12L4 8" stroke="white" strokeWidth="4" />
            </svg>
          </div>
        </div>

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
      </>
    </aside>
  );
}

export default Filters;
