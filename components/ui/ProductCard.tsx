import { useCart } from "@/store/zustand/useCart";
import Button from "./Button";
import { IProduct } from "@/app/types";
import { useRouter } from "next/navigation";
import CounterBtn from "./CounterBtn";

function ProductCard(props: IProduct) {
  const { title, description, price, id, slug } = props;
  const {
    cart,
    addCartItem,
    deleteCartItem,
    increaseCartItem,
    decreaseCartItem,
  } = useCart();
  const router = useRouter();

  const isInCart = cart.some((el) => el.id === id);
  const cartItemCount = cart.find((el) => el.id === props.id)?.count;
  return (
    <div className="relative px-5 py-6.75 border-4 border-[#3CC051] font-medium flex flex-col bg-(--bg-card) group">
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
          <div className="flex justify-between">
            <CounterBtn
              increase={() => increaseCartItem(props.id)}
              decrease={() => decreaseCartItem(id)}
              count={cartItemCount}
            />
            <button
              onClick={() =>
                isInCart
                  ? deleteCartItem(props.id)
                  : addCartItem({ ...props, count: 1 })
              }
              className={`relative w-10 h-10 border-4 border-(--prime) flex justify-center items-center cursor-pointer ${isInCart ? "bg-(--prime)" : "bg-white"}`}
            >
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`absolute left-1/2 top-1/2 -translate-1/2 transition-all ${isInCart ? "opacity-0" : "opacity-100"}`}
              >
                <path d="M20 1L17.1035 11H4" stroke="#C53720" strokeWidth="2" />
                <path d="M5 0L5 11.6667" stroke="#C53720" strokeWidth="2" />
                <path d="M5 1L0 1" stroke="#C53720" strokeWidth="2" />
                <circle
                  cx="14.4002"
                  cy="16.8"
                  r="2.2"
                  stroke="#C53720"
                  strokeWidth="2"
                />
                <circle
                  cx="7.2"
                  cy="16.8"
                  r="2.2"
                  stroke="#C53720"
                  strokeWidth="2"
                />
                <path d="M9 3L15 3" stroke="#C53720" strokeWidth="2" />
                <path d="M12 6V-1.78814e-07" stroke="#C53720" strokeWidth="2" />
              </svg>
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`absolute left-1/2 top-1/2 -translate-1/2 transition-all ${isInCart ? "opacity-100" : "opacity-0"}`}
              >
                <path
                  d="M20 1.68604L17.1035 11.686H4"
                  stroke="white"
                  strokeWidth="2"
                />
                <path
                  d="M5 0.686035L5 12.3527"
                  stroke="white"
                  strokeWidth="2"
                />
                <path d="M5 1.68604L0 1.68604" stroke="white" strokeWidth="2" />
                <circle
                  cx="14.4002"
                  cy="17.486"
                  r="2.2"
                  stroke="white"
                  strokeWidth="2"
                />
                <circle
                  cx="7.2"
                  cy="17.486"
                  r="2.2"
                  stroke="white"
                  strokeWidth="2"
                />
                <path
                  d="M9 2.68604L11.2286 4.68604L15 0.686035"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </button>
            {/* <Button
              disabled={isInCart}
              className="text-(--prime)! w-full mt-auto leading-3 mb-5 cursor-pointer"
              onClick={() => {
                addCartItem({ ...props, count: 1 });
              }}
            >
              {isInCart ? "в корзине" : "Добавить в корзину"}
            </Button> */}
          </div>

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
