"use client";
import { useEffect, useRef, useState } from "react";

function Catalog() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
    <section className="bg-white text-[#1D1D1D]">
      <div className="container">
        <h1 className="text-[36px] font-bold mb-9 uppercase">Каталог</h1>
        <div className="flex gap-6">
          <aside className="w-[264px] py-3 bg-black">
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
                >
                  <path d="M16 8L10 12L4 8" stroke="white" strokeWidth="4" />
                </svg>
              </div>
              <div
                ref={ref}
                className="transition-all duration-300 overflow-hidden"
              >
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
            </>
          </aside>
          <div className="flex-1"></div>
        </div>
      </div>
    </section>
  );
}

export default Catalog;
