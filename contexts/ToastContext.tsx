import ToastOverlay from "@/components/layout/ToastOverlay";
import { createContext, useState } from "react";

export type ToastTypes = "error" | "success";

export interface IToasts {
  type: ToastTypes;
  text: string;
}

interface IToastContext {
  toast: {
    success: (text: string) => void;
    error: (text: string) => void;
  };
}

export const ToastContext = createContext({} as IToastContext);

export default function ToastContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toasts, setToasts] = useState<IToasts[]>([]);

  const toast = {
    success: (v: string) => {
      setToasts((prev) => [...prev, { text: v, type: "success" }]);
    },
    error: (v: string) => {
      setToasts((prev) => [...prev, { text: v, type: "error" }]);
    },
  };

  return (
    <ToastContext.Provider value={{ toast }}>
      {toasts.length > 0 && <ToastOverlay toasts={toasts} />}
      {children}
    </ToastContext.Provider>
  );
}
