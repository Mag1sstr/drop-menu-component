"use client";
import { ICart } from "@/app/frostTypes";
import { useState } from "react";
import CounterBtn from "./CounterBtn";
import {
  useDecreaseCartItemMutation,
  useDeleteCartItemMutation,
  useIncreaseCartItemMutation,
} from "@/store/frostApi";

interface IProps extends ICart {}
function CartItem({ product, count }: IProps) {
  const [quantity, setQuantity] = useState(count);
  const [increase] = useIncreaseCartItemMutation();
  const [decrease, { data }] = useDecreaseCartItemMutation();
  const [deleteItem] = useDeleteCartItemMutation();

  const errQ = () =>
    new Promise((res, rej) => {
      setTimeout(() => rej(), 2000);
    });
  const handleIncrease = async () => {
    try {
      setQuantity((prev) => prev + 1);
      await increase(product.id).unwrap();
    } catch {
      setQuantity((prev) => prev - 1);
    }
  };
  const handleDecrease = async () => {
    if (count <= 1) return deleteItem(product.id);
    try {
      setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
      await decrease(product.id).unwrap();
    } catch {
      setQuantity((prev) => prev + 1);
    }
  };

  console.log(data);

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
          {product.price} тг. x {quantity} шт.
        </p>
      </div>

      <CounterBtn
        increase={handleIncrease}
        decrease={handleDecrease}
        count={quantity}
        className="w-[164px]!"
      />

      <p className="text-[32px] font-bold ml-auto">
        {product.price * quantity} тг.
      </p>
    </li>
  );
}
export default CartItem;
