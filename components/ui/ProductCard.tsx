import { useCart } from "@/store/zustand/useCart";
import Button from "./Button";
import { IProduct } from "@/app/types";
import { useRouter } from "next/navigation";

interface IProps extends IProduct {}

function ProductCard(props: IProps) {
  const { title, description, price, id, slug } = props;
  const { cart, addCartItem } = useCart();
  const router = useRouter();

  const isInCart = cart.some((el) => el.id === id);
  return (
    <div className="relative px-5 py-6.75 border-4 border-[#3CC051] font-medium flex flex-col bg-white group">
      <div className="uppercase text-[10px] text-white w-22 text-center py-2 absolute bg-[#3CC051] right-0 top-0">
        В НАЛИЧИИ
      </div>
      <div className="mt-4.25 h-37 mb-4.5">
        <img className="w-full h-full object-contain" src="/pr.png" alt="" />
      </div>
      <div className="flex-1 flex flex-col">
        <div>
          <h2
            onClick={() => router.push(`/catalog/${slug}`)}
            title={title}
            className="text-[20px] uppercase font-medium mb-5 transition-all group-hover:text-(--prime) overflow-hidden h-15 text-ellipsis line-clamp-2"
          >
            {title ?? "MAGNUM 60Ah"}
          </h2>
          <p className="font-bold text-[28px] mb-3">{price ?? 2100} руб.</p>
        </div>
        <p className="text-[#A5A5A5] text-[12px] mb-5">
          {description ??
            "Цена действительна при сдаче старого аккумулятора аналогичной емкости в лом"}
        </p>
        <div className="mt-auto">
          <Button
            disabled={isInCart}
            className="text-(--prime)! w-full mt-auto leading-3 mb-5 cursor-pointer"
            onClick={() => {
              addCartItem({ ...props, count: 1 });
            }}
          >
            {isInCart ? "в корзине" : "Добавить в корзину"}
          </Button>

          <Button
            onClick={() => router.push(`/catalog/${slug}`)}
            className="text-(--prime)! w-full "
          >
            ПОДРОБНЕЕ
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
