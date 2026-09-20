"use client";
import { createContext, useState } from "react";

export type typeModals = "reg" | "login";
interface IModalsContext {
  modals: Record<typeModals, boolean>;
  setModals: (b: Record<typeModals, boolean>) => void;
  toggle: (s: typeModals) => void;
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

  const toggle = (toggleKey: typeModals) => {
    if (!(toggleKey in modals)) return;

    setModals({ ...modals, [toggleKey]: !modals[toggleKey] });
  };

  return (
    <ModalsContext.Provider value={{ modals, setModals, toggle }}>
      {children}
    </ModalsContext.Provider>
  );
}
