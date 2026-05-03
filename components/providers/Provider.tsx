"use client";

import { store } from "@/store/store";
import { Provider } from "react-redux";
import AuthModal from "../modals/AuthModal";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <AuthModal />
      {children}
    </Provider>
  );
}

export default Providers;
