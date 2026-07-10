import { create } from "zustand";
interface IFilters {
  rangePrice: {
    price_min: string;
    price_max: string;
  };
  setMaxPrice: (p: string) => void;
  setMinPrice: (p: string) => void;
  categorySlug: string | null;
  setCategorySlug: (categorySlug: string | null) => void;
  brandId: number;
  modelId: number;
  generationId: number;
  setBrandId: (id: number) => void;
  setModelId: (id: number) => void;
  setGenerationId: (id: number) => void;
}
export const useFilters = create<IFilters>((set) => ({
  rangePrice: {
    price_min: "1",
    price_max: "",
  },
  categorySlug: null,
  brandId: 0,
  modelId: 0,
  generationId: 0,
  setBrandId: (brandId) => ({ brandId }),
  setModelId: (modelId) => ({ modelId }),
  setGenerationId: (generationId) => ({ generationId }),

  setCategorySlug: (categorySlug) =>
    set({
      categorySlug,
    }),
  setMaxPrice: (price: string) =>
    set((state) => ({ rangePrice: { ...state.rangePrice, price_max: price } })),
  setMinPrice: (price: string) =>
    set((state) => ({ rangePrice: { ...state.rangePrice, price_min: price } })),
}));
