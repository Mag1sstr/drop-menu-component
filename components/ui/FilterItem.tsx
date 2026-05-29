"use client";
import { useEffect, useRef, useState } from "react";
interface IProps {
  label: string;
  children?: React.ReactNode;
}
function FilterItem({ label, children }: IProps) {
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
    <div>
      <div
        onClick={() => setOpen(!open)}
        className="bg-(--prime) p-2 pr-3 text-white uppercase text-[14px] font-bold flex items-center justify-between"
      >
        {label}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${open && "rotate-180"} ml-auto`}
        >
          <path d="M16 8L10 12L4 8" stroke="white" strokeWidth="4" />
        </svg>
      </div>
      <div ref={ref} className="transition-all duration-300 overflow-hidden">
        {children}
        {/* <div className="bg-(--prime) p-2 pr-3 text-white uppercase text-[14px] font-bold flex items-center justify-between">
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
        </div> */}
      </div>
    </div>
  );
}

export default FilterItem;
