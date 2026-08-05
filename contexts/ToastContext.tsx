"use client";
import ToastOverlay from "@/components/layout/ToastOverlay";
import { createContext, useContext, useState } from "react";

export type ToastTypes = "error" | "success";

export interface IToasts {
  type: ToastTypes;
  text: string;
  id: number;
}

interface IToastContext {
  toast: {
    success: (text: string) => void;
    error: (text: string) => void;
  };
  setToasts: (fn: (prev: IToasts[]) => IToasts[]) => void;
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
      setToasts((prev) => [
        ...prev,
        { text: v, type: "success", id: Date.now() },
      ]);
    },
    error: (v: string) => {
      setToasts((prev) => [
        ...prev,
        { text: v, type: "error", id: Date.now() },
      ]);
    },
  };

  console.log(toasts);

  return (
    <ToastContext.Provider value={{ toast, setToasts }}>
      {toasts.length > 0 && <ToastOverlay toasts={toasts} />}
      {children}
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);
