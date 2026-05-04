import { IUser } from "@/app/types";
import { getLocalStorageValue } from "@/helpers/getLocalStorageValue";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAuthSlice {
  token: string | null;
  user: IUser | null;
}

const initialState: IAuthSlice = {
  token: getLocalStorageValue("token"),
  user: null,
};
export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      localStorage.setItem("token", JSON.stringify(action.payload));
    },
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
    logout(state) {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
    },
  },
});

export const { setToken, setUser, logout } = authSlice.actions;
export default authSlice.reducer;
