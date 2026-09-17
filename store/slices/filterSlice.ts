import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "../store";
import { IProduct, IProductData } from "@/app/frostTypes";
export type FrostSortTypes = "askP" | "descP" | "ascL" | "descL";
interface FilterSlice {
  sortTypes: FrostSortTypes[];
  dragItem: IProductData | null;
}
const initialState: FilterSlice = {
  sortTypes: [],
  dragItem: null,
};
export const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    setSortTypes(state, action: PayloadAction<FrostSortTypes[]>) {
      state.sortTypes = action.payload;
    },
    addSortType(state, action: PayloadAction<FrostSortTypes>) {
      if (!state.sortTypes.includes(action.payload)) {
        state.sortTypes.push(action.payload);
      }
    },
    deleteSortType(state, action: PayloadAction<FrostSortTypes>) {
      state.sortTypes = state.sortTypes.filter((el) => el !== action.payload);
    },
    setDragItem(state, action: PayloadAction<IProductData | null>) {
      state.dragItem = action.payload;
    },
  },
});

export const { setSortTypes, addSortType, deleteSortType, setDragItem } =
  filterSlice.actions;
export default filterSlice.reducer;

export const useFiltersRedux = () => useAppSelector((state) => state.filters);
