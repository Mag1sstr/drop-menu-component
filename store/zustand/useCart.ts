import { IProduct } from "@/app/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";
interface ICart extends IProduct {
  count: number;
}
interface ICartStore {
  cart: ICart[];
  addCartItem: (item: ICart) => void;
  deleteCartItem: (id: number) => void;
  increaseCartItem: (id: number) => void;
  decreaseCartItem: (id: number) => void;
  clearCart: () => void;
  getCartLength: () => number;
}

export const useCart = create<ICartStore>()(
  persist(
    (set, get) => ({
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
      getCartLength: () => get().cart.length,
      getCartTotalPrice: () =>
        get().cart.reduce((acc, el) => acc + el.price * el.count, 0),
    }),
    {
      name: "cart",
      partialize: (state) => ({
        cart: state.cart,
      }),
    },
  ),
);
