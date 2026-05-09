import { create } from "zustand";

interface ICartStore {
  cart: [];
}

export const useCart = create((set) => ({
  cart: [],
}));
