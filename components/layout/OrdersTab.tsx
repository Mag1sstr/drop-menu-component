"use client";
import { useGetOrdersQuery } from "@/store/frostApi";

function OrdersTab() {
  const { data: orders } = useGetOrdersQuery();
  return (
    <div className="flex-1 pt-16 pb-12.5  border border-[#E5E5E5] bg-white font-sans">
      <h2 className="font-semibold text-[24px] px-13.5 mb-11.25">
        История заказов
      </h2>
      <div className="px-7.75 text-[#383838] mb-7.5">
        <div className="border-b border-[#E5E5E5]  pb-4 px-5 grid grid-cols-[148px_minmax(0,1fr)_131px_100px] font-semibold">
          <div>Номер заказа</div>
          <div>Наименование товара</div>
          <div>Дата заказа</div>
          <div>Стоимость</div>
        </div>
      </div>
      <div className="px-7.75 text-[#383838]">
        {orders?.map((item) => (
          <div className="border-b border-[#E5E5E5] pb-7.5 px-5 grid grid-cols-[148px_minmax(0,1fr)_131px_100px] mb-7.5">
            <div className="font-semibold ">№{item.id}</div>
            <div className="flex flex-col gap-7.5 text-[14px] pr-7.5">
              {item.items.map(({ count, product }) => (
                <div>
                  <p className="mb-2.5">{product.name}</p>
                  <p>
                    {count} X {product.price} тг
                  </p>
                </div>
              ))}
            </div>
            <div>{new Date(item.created_at).toLocaleDateString()}</div>
            <div>
              {item.items.reduce(
                (acc, el) => acc + el.count * el.product.price,
                0,
              )}{" "}
              тг
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OrdersTab;
