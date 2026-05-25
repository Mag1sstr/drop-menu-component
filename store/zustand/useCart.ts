import { IProduct } from "@/app/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";
interface ICart extends IProduct {
  count: number;
}
interface ICartStore {
  cart: ICart[];
}

export const useCart = create<ICartStore>()(
  persist(
    (set) => ({
      cart: [],
      addCartItem: (item: ICart) =>
        set((state) => ({ cart: [...state.cart, item] })),
      deleteCartItem: (id: number) =>
        set((state) => ({ cart: state.cart.filter((el) => el.id !== id) })),
      increaseCartItem: (id: number) =>
        set((state) => ({
          cart: state.cart.map((el) =>
            el.id === id ? { ...el, count: el.count + 1 } : el,
          ),
        })),
      decreaseCartItem: (id: number) =>
        set((state) => ({
          cart: state.cart.map((el) =>
            el.id === id && el.count > 1 ? { ...el, count: el.count - 1 } : el,
          ),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    { name: "cart" },
  ),
);
