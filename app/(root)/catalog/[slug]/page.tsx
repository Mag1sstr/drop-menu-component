"use client";
import { useGetSingleProductQuery } from "@/store/api";
import { useParams } from "next/navigation";

function SingleProductPage() {
  const { slug } = useParams();
  const { data, isLoading } = useGetSingleProductQuery(slug as string);

  // const inStock = Math.round(Math.random());
  const inStock = true;

  if (isLoading) return <div className="text-3xl">Загрузка...</div>;

  return (
    <>
      {!!inStock ? (
        <div className="p-10 border-4 border-[#A5A5A5] bg-white font-medium flex flex-col gap-12.5 justify-between">
          <div className="flex gap-14.5">
            <img className="w-[358px] object-contain" src="/pr.png" alt="" />
            <div className="flex-1">
              <p className="text-[12px] font-bold mb-6 text-[#3CC051] uppercase">
                в наличии
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex gap-4">
              <button className="rotate-180">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="-2"
                    y="2"
                    width="36"
                    height="36"
                    transform="matrix(-1 0 0 1 36 0)"
                    stroke="#C53720"
                    strokeWidth="4"
                  />
                  <path
                    d="M15.3845 9.23077L24.6152 20L15.3845 30.7692"
                    stroke="#C53720"
                    strokeWidth="4"
                  />
                </svg>
              </button>
              <button>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="-2"
                    y="2"
                    width="36"
                    height="36"
                    transform="matrix(-1 0 0 1 36 0)"
                    stroke="#C53720"
                    strokeWidth="4"
                  />
                  <path
                    d="M15.3845 9.23077L24.6152 20L15.3845 30.7692"
                    stroke="#C53720"
                    strokeWidth="4"
                  />
                </svg>
              </button>
            </div>
            <div className="flex border-2 border-[#A5A5A5] text-[14px] text-[#A5A5A5]">
              <button className="w-10 h-10 grid place-content-center border-2 border-[#A5A5A5] cursor-pointer">
                -
              </button>
              <p className="w-21 grid place-content-center border-2 border-[#A5A5A5]">
                01
              </p>
              <button className="w-10 h-10 grid place-content-center border-2 border-[#A5A5A5] cursor-pointer">
                +
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[url(/ns.png)] bg-cover bg-no-repeat h-[292px] pl-10 pb-10 flex flex-col justify-end">
          <h2 className="text-[32px] text-white font-medium mb-7 max-w-110 uppercase">
            В ДАННЫЙ МОМЕНТ ТОВАР ОТСУТСТВУЕТ
          </h2>
          <div className="flex gap-4">
            <button className="py-3 px-5 border-4 border-white text-white font-bold text-[12px] uppercase cursor-pointer hover:text-black hover:bg-white transition-all">
              ВЕРНУТЬСЯ
            </button>
            <button className="py-3 px-5 border-4 border-black text-black font-bold text-[12px] uppercase cursor-pointer hover:text-white hover:bg-black transition-all">
              ОБРАТИТЬСЯ К МЕНЕДЖЕРУ
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleProductPage;
