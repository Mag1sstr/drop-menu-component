"use client";

import { store } from "@/store/store";
import { Provider } from "react-redux";
import ScrollBtn from "../ui/ScrollBtn";
import ThemeContextProvider from "@/contexts/ThemeContext";
import AuthContextProvider from "@/contexts/AuthContext";
import ToastContextProvider from "@/contexts/ToastContext";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ToastContextProvider>
        <AuthContextProvider>
          <ThemeContextProvider>
            <ScrollBtn />
            {children}
          </ThemeContextProvider>
        </AuthContextProvider>
      </ToastContextProvider>
    </Provider>
  );
}

export default Providers;
