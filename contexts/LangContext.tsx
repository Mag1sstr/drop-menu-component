import { getLocalStorageValue } from "@/helpers/getLocalStorageValue";
import { createContext, useState } from "react";

export type TLang = "ru" | "en";
interface ILangContext {
  lang: TLang;
  setLang: (l: TLang) => void;
}

export const LangContext = createContext({} as ILangContext);
function LangContextProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<TLang>(getLocalStorageValue("lang") || "ru");

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export default LangContextProvider;
