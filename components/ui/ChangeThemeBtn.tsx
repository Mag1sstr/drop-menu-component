"use client";

import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

function ChangeThemeBtn() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <button className="bg-red-500" onClick={toggleTheme}>
      toggle
    </button>
  );
}

export default ChangeThemeBtn;
