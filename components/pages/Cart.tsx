"use client";
import { useGetCartQuery } from "@/store/frostApi";
import CounterBtn from "../ui/CounterBtn";

function Cart() {
  const { data: cart } = useGetCartQuery();

  console.log(cart);

  return (
    <section className="py-22">
      <div className="container">
        <h1 className="text-4xl font-bold uppercase mb-12">Корзина</h1>
        <ul>
          <li className="px-8 py-10 flex items-center flex-wrap  bg-white border-4 border-[#A5A5A5]">
            <img
              className="w-39 h-39 object-contain mr-7"
              src="/pr.png"
              alt="product-img"
            />
            <div className="flex flex-col items-start gap-4 mr-14">
              <h2 className="text-(--prime) text-xl font-medium max-w-47 overflow-hidden whitespace-nowrap text-ellipsis">
                MAGNUM 60Ah
              </h2>
              <div className="bg-(--green) leading-2  py-3 px-4.5 uppercase text-white text-[10px]">
                В НАЛИЧИИ
              </div>
            </div>

            <div className="flex flex-col gap-2 mr-13">
              <p className="text-[32px] font-bold">2199 руб.</p>
              <p className="text-xl text-[#A5A5A5] line-through font-bold">
                2199 руб.
              </p>
            </div>

            <CounterBtn />

            <p className="text-[32px] font-bold ml-auto">1313 руб.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Cart;
