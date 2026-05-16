"use client";
import { useParams } from "next/navigation";

function SingleProductPage() {
  const { id } = useParams();
  return (
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
  );
}

export default SingleProductPage;
