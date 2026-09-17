"use client";
import { createContext, useState } from "react";
interface IModalsContext {
  modals: Record<string, boolean>;
  setModals: (b: Record<string, boolean>) => void;
  toggle: (s: string) => void;
}

export const ModalsContext = createContext({} as IModalsContext);

export default function ModalsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [modals, setModals] = useState<Record<string, boolean>>({
    reg: false,
    login: false,
  });

  const toggle = (toggleKey: string) => {
    if (!(toggleKey in modals)) return;

    setModals({ ...modals, [toggleKey]: !modals[toggleKey] });
  };

  return (
    <ModalsContext.Provider value={{ modals, setModals, toggle }}>
      {children}
    </ModalsContext.Provider>
  );
}
