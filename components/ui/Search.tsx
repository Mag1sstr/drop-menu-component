import { useEffect, useRef, useState } from "react";

function Search() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);
  return (
    <>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="cursor-pointer mr-3"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 18C24 21.3137 21.3137 24 18 24C14.6863 24 12 21.3137 12 18C12 14.6863 14.6863 12 18 12C21.3137 12 24 14.6863 24 18ZM22.8941 26.7226C21.4474 27.536 19.7779 28 18 28C12.4772 28 8 23.5228 8 18C8 12.4772 12.4772 8 18 8C23.5228 8 28 12.4772 28 18C28 20.2954 27.2266 22.4101 25.9263 24.0979L33.4142 31.5858L30.5858 34.4142L22.8941 26.7226Z"
            fill={open ? "#C53720" : "white"}
            className="transition-all"
          />
        </svg>
      </button>
      <div
        className={`absolute left-0 right-0 top-25 py-4 bg-[#1D1D1D]/75 transition-all ${open ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        <div className="container">
          <div className="flex gap-3">
            <div className="flex-1 flex gap-2 bg-white px-3 py-2">
              <svg
                width="26"
                height="27"
                viewBox="0 0 26 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10ZM14.8941 18.7226C13.4474 19.536 11.7779 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 12.2954 19.2266 14.4101 17.9263 16.0979L25.4142 23.5858L22.5858 26.4142L14.8941 18.7226Z"
                    fill="#A5A5A5"
                  />
                </g>
              </svg>
              <input
                ref={inputRef}
                className="w-full outline-none"
                type="text"
              />
            </div>
            <button className="py-3 px-5 border-4 border-(--prime) uppercase font-bold text-[12px] leading-1 text-white cursor-pointer">
              НАЙТИ
            </button>
            <button className="cursor-pointer" onClick={() => setOpen(false)}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 4L16 16" stroke="#A5A5A5" strokeWidth="4" />
                <path d="M16 4L4 16" stroke="#A5A5A5" strokeWidth="4" />
              </svg>
            </button>
          </div>

          <div className="max-h-45 overflow-y-auto no-srl  text-white">
            <ul className="pt-4">
              <li className="px-4 py-3 transition-all hover:bg-(--prime)">
                Гелиевые Аккумуляторы OPTIMA
              </li>
              <li className="px-4 py-3 transition-all hover:bg-(--prime)">
                Гелиевые Аккумуляторы OPTIMA
              </li>
              <li className="px-4 py-3 transition-all hover:bg-(--prime)">
                Гелиевые Аккумуляторы OPTIMA
              </li>
              <li className="px-4 py-3 transition-all hover:bg-(--prime)">
                Гелиевые Аккумуляторы OPTIMA
              </li>
              <li className="px-4 py-3 transition-all hover:bg-(--prime)">
                Гелиевые Аккумуляторы OPTIMA
              </li>
              <li className="px-4 py-3 transition-all hover:bg-(--prime)">
                Гелиевые Аккумуляторы OPTIMA
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
