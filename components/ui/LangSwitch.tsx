import { LangContext } from "@/contexts/LangContext";
import { useContext } from "react";

function LangSwitch() {
  const { lang, setLang } = useContext(LangContext);
  return (
    <div className=" absolute top-1/2 -translate-y-1/2 left-10">
      <div className="text-white flex gap-2 [&>button]:cursor-pointer [&>button]:hover:text-(--prime) [&>button]:transition-all">
        <button
          className={lang === "en" ? "text-(--prime)" : ""}
          onClick={() => {
            setLang("en");
          }}
        >
          Eng
        </button>
        <span className="text-(--prime)">|</span>
        <button
          className={lang === "ru" ? "text-(--prime)" : ""}
          onClick={() => {
            setLang("ru");
          }}
        >
          Рус
        </button>
      </div>
    </div>
  );
}

export default LangSwitch;
