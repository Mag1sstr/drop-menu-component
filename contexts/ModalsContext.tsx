"use client";
import { createContext, useState } from "react";

export type typeModals = "reg" | "login";
interface IModalsContext {
  modals: Record<typeModals, boolean>;
  setModals: (b: Record<typeModals, boolean>) => void;
  toggle: (s: typeModals, v?: boolean) => void;
}

export const ModalsContext = createContext({} as IModalsContext);

export default function ModalsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [modals, setModals] = useState<Record<typeModals, boolean>>({
    reg: false,
    login: false,
  });

  const toggle = (toggleKey: typeModals, value?: boolean) => {
    if (value !== undefined)
      return setModals((prev) => ({ ...prev, [toggleKey]: value }));
    if (!(toggleKey in modals)) return;

    setModals((prev) => ({ ...prev, [toggleKey]: !prev[toggleKey] }));
  };

  return (
    <ModalsContext.Provider value={{ modals, setModals, toggle }}>
      {children}
    </ModalsContext.Provider>
  );
}
