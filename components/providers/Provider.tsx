"use client";

import { store } from "@/store/store";
import { Provider } from "react-redux";
import AuthContextProvider from "./AuthContext";
import ScrollBtn from "../ui/ScrollBtn";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ScrollBtn />
      <AuthContextProvider>{children}</AuthContextProvider>
    </Provider>
  );
}

export default Providers;
