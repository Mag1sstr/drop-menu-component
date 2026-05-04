import { IUser } from "@/app/types";
import { getLocalStorageValue } from "@/helpers/getLocalStorageValue";
import { createContext, useContext, useState } from "react";

interface IAuthContext {
  token: string | null;
  setToken: (s: string | null) => void;
  user: IUser | null;
  setUser: (User: IUser) => void;
}

export const AuthContext = createContext({} as IAuthContext);

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [token, setToken] = useState(
    getLocalStorageValue<string | null>("token") ?? null,
  );
  const [user, setUser] = useState<null | IUser>(null);

  return (
    <AuthContext.Provider value={{ token, setToken, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
