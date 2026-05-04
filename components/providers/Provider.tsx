"use client";

import { store } from "@/store/store";
import { Provider } from "react-redux";
import AuthContextProvider from "./AuthContext";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AuthContextProvider>{children}</AuthContextProvider>
    </Provider>
  );
}

export default Providers;
