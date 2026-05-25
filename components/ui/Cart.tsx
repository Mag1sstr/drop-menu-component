"use client";
import { useState } from "react";
import Button from "./Button";
import { useCart } from "@/store/zustand/useCart";

function Cart() {
  const [open, setOpen] = useState(false);
  const { getCartLength } = useCart();
  return (
    <div className="relative flex items-center gap-2">
      <button
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="[&>path]:transition-all [&>circle]:transition-all"
        >
          <path
            d="M33.3594 11L29.9844 23H14V11H33.3594Z"
            stroke={open ? "#C53720" : "white"}
            stroke-width="4"
          />
          <path
            d="M14 4L14 24.5"
            stroke={open ? "#C53720" : "white"}
            strokeWidth="4"
          />
          <path
            d="M14 6H4"
            stroke={open ? "#C53720" : "white"}
            strokeWidth="4"
          />
          <circle
            cx="17"
            cy="31"
            r="3"
            stroke={open ? "#C53720" : "white"}
            strokeWidth="4"
          />
          <circle
            cx="28"
            cy="31"
            r="3"
            stroke={open ? "#C53720" : "white"}
            strokeWidth="4"
          />
        </svg>
      </button>
      <div className="w-8 h-8 rounded-full bg-[#C53720] flex items-center justify-center text-white font-bold">
        {getCartLength()}
      </div>

      <div
        className={`absolute right-0  w-[622px]   border-t-4 border-(--prime) top-25 bg-white transition-all ${open ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        <div className="p-6">
          <p className="uppercase text-[14px] mb-3 font-medium text-[#A5A5A5]">
            ИТОГ:
          </p>
          <div className="flex items-center justify-between">
            <strong className="text-[48px]">4398 руб.</strong>
            <Button className="text-(--prime)! py-4.5 px-5">
              ПЕРЕЙТИ В КОРЗИНУ
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
