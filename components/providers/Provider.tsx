"use client";

import { store } from "@/store/store";
import { Provider } from "react-redux";
import ScrollBtn from "../ui/ScrollBtn";
import ThemeContextProvider from "@/contexts/ThemeContext";
import AuthContextProvider from "@/contexts/AuthContext";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <ScrollBtn />
          {children}
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
}

export default Providers;
