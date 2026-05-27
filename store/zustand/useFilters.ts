import { create } from "zustand";
interface IFilters {
  rangePrice: {
    price_min: string;
    price_max: string;
  };
  setMaxPrice: (p: string) => void;
  setMinPrice: (p: string) => void;
}
export const useFilters = create<IFilters>((set) => ({
  rangePrice: {
    price_min: "",
    price_max: "",
  },
  setMaxPrice: (price: string) =>
    set((state) => ({ rangePrice: { ...state.rangePrice, price_max: price } })),
  setMinPrice: (price: string) =>
    set((state) => ({ rangePrice: { ...state.rangePrice, price_min: price } })),
}));
