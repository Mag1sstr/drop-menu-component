"use client";

import { store } from "@/store/store";
import { Provider } from "react-redux";
import AuthModal from "../modals/AuthModal";
import AuthContextProvider from "./AuthContext";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthContextProvider>
      <Provider store={store}>
        {/* <AuthModal /> */}
        {children}
      </Provider>
    </AuthContextProvider>
  );
}

export default Providers;
