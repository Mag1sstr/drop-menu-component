import { IItems } from "@/app/frostTypes";
import { useEffect, useRef, useState } from "react";

interface IProps {
  label: string;
  data: IItems[];
  onChange?: (id: number) => void;
}
function Dropdown({ label, data, onChange }: IProps) {
  const [selectItem, setSelectItem] = useState<IItems | null>(null);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    if (open) {
      el.style.height = el.scrollHeight + "px";
    } else {
      el.style.height = "0px";
    }
  }, [open, ref, data]);
  return (
    <div>
      <button
        disabled={!data.length}
        onClick={() => setOpen((prev) => !prev)}
        className="relative w-full text-start p-2 bg-[#1D1D1D] text-white/50 text-[12px] font-medium flex items-center justify-between uppercase disabled:cursor-not-allowed"
      >
        <p>{label}</p>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all ${open && "rotate-90"}`}
        >
          <path d="M8 4L12 10.5L8 16" stroke="white" stroke-width="4" />
        </svg>
      </button>
      {data.length > 0 && (
        <div ref={ref} className="overflow-hidden transition-all">
          {data.map(({ id, name }) => (
            <div
              key={id}
              onClick={() => {
                if (onChange) {
                  onChange(id);
                }
                setSelectItem({ id, name });
              }}
              className={`p-2   text-[12px] font-medium flex items-center transition-all ${selectItem?.name === name ? "bg-(--prime) text-white" : "bg-[#2D2D2D] text-white/50"}`}
            >
              {name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
