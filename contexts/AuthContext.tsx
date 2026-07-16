"use client";
import { useGetStorage } from "@/hooks/useGetStorage";
import { createContext, useState } from "react";

export const AuthContext = createContext({} as { token: string | null });
function AuthContextProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(
    useGetStorage<string>("t") || null,
  );

  return (
    <AuthContext.Provider value={{ token }}>{children}</AuthContext.Provider>
  );
}

export default AuthContext;
