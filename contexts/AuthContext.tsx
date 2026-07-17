"use client";
import { IUser } from "@/app/frostTypes";
import { useGetToken } from "@/hooks/useGetStorage";
import { useGetUserMutation } from "@/store/frostApi";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext(
  {} as {
    token: string | null;
    setToken: (s: string | null) => void;
    user: IUser | null;
    setUser: (user: IUser | null) => void;
    logout: () => void;
    isUserLoading: boolean;
  },
);

function AuthContextProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(
    useGetToken<string>("t") || null,
  );
  const [getUser, { isLoading: isUserLoading }] = useGetUserMutation();

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("t");
  };

  useEffect(() => {
    if (!token) return;
    getUser()
      .unwrap()
      .then((res) => setUser(res))
      .catch(() => setUser(null));
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ token, setToken, user, setUser, logout, isUserLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

export const useAuth = () => useContext(AuthContext);
