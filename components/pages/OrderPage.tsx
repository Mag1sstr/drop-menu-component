"use client";
import { useGetCartQuery } from "@/store/frostApi";
import { useRouter } from "next/navigation";

function OrderPage() {
  const { data: cartData } = useGetCartQuery();
  const router = useRouter();
  return (
    <section>
      <div className="container">
        <h1>ОФОРМЛЕНИЕ ЗАКАЗА</h1>

        <div className="flex">
          <div className="flex-1"></div>
          <div className="w-114 border-4 border-[#A5A5A5]">
            <div className="bg-(--text) text-white flex items-center justify-between p-6">
              <p className="text-[20px]">Ваш заказ</p>
              <button
                onClick={() => router.push("/cart")}
                className="border-4 border-white uppercase px-5 py-3 font-bold text-[12px] leading-2 transition-all cursor-pointer hover:bg-white hover:text-black "
              >
                ИЗМЕНИТЬ
              </button>
            </div>
            {cartData?.items.map(({ count, product }) => (
              <div
                key={product.id}
                className="bg-white not-last:border-b border-[#A5A5A5] py-4 px-5 flex items-end justify-between"
              >
                <div className="flex flex-col flex-1 gap-2">
                  <p className="text-(--prime) leading-4">{product.name}</p>
                  <p className="text-[#A5A5A5] leading-3">
                    {count} шт. х {product.price} тг.
                  </p>
                </div>
                <p className="font-medium">{count * product.price} тг.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderPage;
