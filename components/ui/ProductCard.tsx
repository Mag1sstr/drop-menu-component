import Button from "./Button";

interface IProps {
  title?: string;
  description?: string;
  price?: number;
}

function ProductCard({ title, description, price }: IProps) {
  return (
    <div className="relative px-5 py-6.75 border-4 border-[#3CC051] font-medium">
      <div className="uppercase text-[10px] text-white w-22 text-center py-2 absolute bg-[#3CC051] right-0 top-0">
        В НАЛИЧИИ
      </div>
      <div className="flex-1 mt-4.25 h-37 mb-4.5">
        <img className="w-full h-full object-cover" src="dwd" alt="" />
      </div>
      <h2 className="text-[20px] uppercase font-medium mb-5">
        {title ?? "MAGNUM 60Ah"}
      </h2>
      <p className="font-bold text-[28px] mb-3">{price ?? 2100} руб.</p>
      <p className="text-[#A5A5A5] text-[12px] mb-5">
        {description ??
          "Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом"}
      </p>
      <Button className="text-(--prime)! w-full">ПОДРОБНЕЕ</Button>
    </div>
  );
}

export default ProductCard;
