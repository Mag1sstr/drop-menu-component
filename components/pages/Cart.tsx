"use client";
import { useGetCartQuery } from "@/store/frostApi";
import CounterBtn from "../ui/CounterBtn";
import CartItem from "../ui/CartItem";

function Cart() {
  const { data: cartData } = useGetCartQuery();

  return (
    <section className="py-22">
      <div className="container">
        <h1 className="text-4xl font-bold uppercase mb-12">Корзина</h1>
        <ul>
          {cartData?.items.map((item) => (
            // <li
            //   key={product.id}
            //   className="px-8 py-10 flex items-center flex-wrap  bg-white border-4 border-b-0 border-[#A5A5A5] border-collapse"
            // >
            //   <img
            //     className="w-39 h-39 object-contain mr-7"
            //     src="/pr.png"
            //     alt="product-img"
            //   />
            //   <div className="flex flex-col items-start gap-4 mr-14">
            //     <h2 className="text-(--prime) text-xl font-medium max-w-47 overflow-hidden whitespace-nowrap text-ellipsis">
            //       {product.name}
            //     </h2>
            //     <div className="bg-(--green) leading-2  py-3 px-4.5 uppercase text-white text-[10px]">
            //       В НАЛИЧИИ
            //     </div>
            //   </div>

            //   <div className="flex flex-col gap-2 mr-13">
            //     {/* <p className="text-[32px] font-bold">2199 руб.</p> */}
            //     <p className="text-xl text-[#A5A5A5]  font-bold">
            //       {product.price} тг. x {count} шт.
            //     </p>
            //   </div>

            //   <CounterBtn count={count} />

            //   <p className="text-[32px] font-bold ml-auto">
            //     {product.price * count} тг.
            //   </p>
            // </li>
            <CartItem key={item.product.id} {...item} />
          ))}
        </ul>
        <div className="border-4 border-[#A5A5A5] px-8 py-9.5 bg-white flex items-center justify-end">
          <div className="flex items-center gap-11.75">
            <p>Итого {cartData?.items.length} товаров</p>
            <p>
              {cartData?.items.reduce(
                (acc, el) => acc + el.product.price * el.count,
                0,
              )}{" "}
              тг.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
