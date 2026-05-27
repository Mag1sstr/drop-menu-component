"use client";
import { useEffect, useState } from "react";
import Button from "./Button";
import { useCart } from "@/store/zustand/useCart";
import { toast } from "react-toastify";

function Cart() {
  const [open, setOpen] = useState(false);
  const { cart, getCartLength, getCartTotalPrice, deleteCartItem } = useCart();

  useEffect(() => {
    if (cart.length < 1) setOpen(false);
  }, [cart.length]);
  return (
    <div className="relative flex items-center gap-2">
      <button
        className="cursor-pointer"
        onClick={() =>
          !getCartLength()
            ? toast.error("В корзине пусто")
            : setOpen((prev) => !prev)
        }
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
        {cart.map((item) => (
          <div
            key={item.id}
            className="relative p-6 flex gap-6 border-b-2 border-[#A5A5A5]"
          >
            <button
              onClick={() => deleteCartItem(item.id)}
              className="cursor-pointer absolute top-4 right-6"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="20" height="20" fill="white" />
                <path d="M4 4L16 16" stroke="#A5A5A5" strokeWidth="4" />
                <path d="M16 4L4 16" stroke="#A5A5A5" strokeWidth="4" />
              </svg>
            </button>
            <img
              className="w-25 h-21.5 object-contain"
              src={item.images[0]}
              alt=""
            />
            <div className="flex-1">
              <h3 className="text-(--prime) font-medium text-[20px] mb-4">
                {item.title}
              </h3>
              <div className="flex justify-between items-center">
                <div className="py-3 px-4.5 bg-[#3CC051] text-white text-[10px] uppercase font-bold">
                  В НАЛИЧИИ
                </div>
                <p className="text-[32px] font-bold">{item.price} руб.</p>
              </div>
            </div>
          </div>
        ))}
        <div className="p-6">
          <p className="uppercase text-[14px] mb-3 font-medium text-[#A5A5A5]">
            ИТОГ:
          </p>
          <div className="flex items-center justify-between">
            <strong className="text-[48px]">{getCartTotalPrice()} руб.</strong>
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
