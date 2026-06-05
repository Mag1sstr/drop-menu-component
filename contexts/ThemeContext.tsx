import { createContext, useEffect, useState } from "react";

export type TTheme = "light" | "dark";

interface IThemeContext {
  theme: TTheme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as IThemeContext);

export default function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<TTheme>("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  useEffect(() => {
    if (!document.documentElement.getAttribute("theme")) {
      document.documentElement.setAttribute("theme", "light");
    }
  }, []);
  useEffect(() => {
    setTheme(theme);
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
