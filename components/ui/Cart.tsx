"use client";
import { useRef, useState } from "react";
import Button from "./Button";
import { useCart } from "@/store/zustand/useCart";
import { toast } from "react-toastify";
import { useClickOutside } from "@/hooks/useClickOutside";
import {
  useAddCartItemMutation,
  useDeleteCartItemMutation,
  useGetCartQuery,
} from "@/store/frostApi";
import { useRouter } from "next/navigation";
import { useFiltersRedux } from "@/store/slices/filterSlice";

function Cart() {
  const [open, setOpen] = useState(false);
  const [isDragEnter, setIsDragEnter] = useState(false);
  // const { cart, getCartLength, getCartTotalPrice, deleteCartItem } = useCart();
  const [deleteCartItem] = useDeleteCartItemMutation();
  const [addCartItem] = useAddCartItemMutation();
  const { data: cartData } = useGetCartQuery();
  const ref = useRef<HTMLDivElement>(null);
  const rouder = useRouter();
  const { dragItem } = useFiltersRedux();

  console.log(dragItem);

  const handleDeleteCartItem = (id: number) => {
    deleteCartItem(id);
  };
  useClickOutside(ref, () => setOpen(false));

  return (
    <div ref={ref} className="relative flex items-center gap-2">
      <button
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragEnter(true);
        }}
        onDragLeave={(e) => {
          setIsDragEnter(false);
        }}
        onDrop={async (e) => {
          e.preventDefault();
          setIsDragEnter(false);
          if (!dragItem) return;
          await addCartItem({ productId: dragItem.id, count: 1 });
          toast.success("Добавлено в корзину!");
        }}
        className="cursor-pointer"
        onClick={() =>
          !cartData?.items.length
            ? rouder.push("/cart")
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
            strokeWidth="4"
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
      <div
        className={`absolute transition-all duration-300 ${isDragEnter ? "scale-100 top-20 opacity-100" : "scale-40 opacity-0 top-17"} left-1/2 -translate-x-1/2 w-max p-2 -z-1 flex items-center justify-center  bg-green-500 rounded-xl text-white `}
      >
        <span className="text-3xl">+</span> Добавить в корзину
      </div>
      {!!cartData?.items.length && (
        <div className="w-8 h-8 rounded-full bg-[#C53720] flex items-center justify-center text-white font-bold">
          {cartData.items.length}
        </div>
      )}

      <div
        className={`absolute right-0  w-[622px]   border-t-4 border-(--prime) top-25 bg-white transition-all shadow-2xl ${open ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        {cartData?.items.map(({ product: item, count }) => (
          <div
            key={item.id}
            className="relative p-6 flex gap-6 border-b-2 border-[#A5A5A5]"
          >
            <button
              onClick={() => {
                if (cartData.items.length > 1) {
                  handleDeleteCartItem(item.id);
                } else {
                  (async () => {
                    await deleteCartItem(item.id).unwrap();
                    setOpen(false);
                  })();
                }
              }}
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
            <img className="w-25 h-21.5 object-contain" src="/pr.png" alt="" />
            <div className="flex-1">
              <h3 className="text-(--prime) font-medium text-[20px] mb-4 max-w-[calc(100%-40px)]">
                {item.name}

                {count}
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
            <strong className="text-[48px]">
              {cartData?.items.reduce(
                (acc, el) => acc + el.product.price * el.count,
                0,
              )}{" "}
              тг.
            </strong>
            <Button
              onClick={() => {
                setOpen(false);
                rouder.push("/cart");
              }}
              className="text-(--prime)! py-4.5 px-5"
            >
              ПЕРЕЙТИ В КОРЗИНУ
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
