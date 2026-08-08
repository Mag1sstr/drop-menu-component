"use client";
import { ICart } from "@/app/frostTypes";
import { useState } from "react";
import CounterBtn from "./CounterBtn";

interface IProps extends ICart {}
function CartItem({ product, count }: IProps) {
  const [quantity, setQuantity] = useState(count);

  const handleIncrease = async () => {};
  const handleDecrease = async () => {};

  return (
    <li
      key={product.id}
      className="px-8 py-10 flex items-center flex-wrap  bg-white border-4 border-b-0 border-[#A5A5A5] border-collapse"
    >
      <img
        className="w-39 h-39 object-contain mr-7"
        src="/pr.png"
        alt="product-img"
      />
      <div className="flex flex-col items-start gap-4 mr-14">
        <h2 className="text-(--prime) text-xl font-medium max-w-47 overflow-hidden whitespace-nowrap text-ellipsis">
          {product.name}
        </h2>
        <div className="bg-(--green) leading-2  py-3 px-4.5 uppercase text-white text-[10px]">
          В НАЛИЧИИ
        </div>
      </div>

      <div className="flex flex-col gap-2 mr-13">
        {/* <p className="text-[32px] font-bold">2199 руб.</p> */}
        <p className="text-xl text-[#A5A5A5]  font-bold">
          {product.price} тг. x {count} шт.
        </p>
      </div>

      <CounterBtn count={quantity} />

      <p className="text-[32px] font-bold ml-auto">
        {product.price * count} тг.
      </p>
    </li>
  );
}
export default CartItem;
