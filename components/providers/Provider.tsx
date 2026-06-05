"use client";

import { store } from "@/store/store";
import { Provider } from "react-redux";
import AuthContextProvider from "./AuthContext";
import ScrollBtn from "../ui/ScrollBtn";
import ThemeContextProvider from "@/contexts/ThemeContext";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <ScrollBtn />
        <AuthContextProvider>{children}</AuthContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
}

export default Providers;
