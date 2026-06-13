import { useGetUserQuery } from "@/store/api";
import { setUser } from "@/store/authSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { createContext, useContext, useEffect } from "react";

export const AuthContext = createContext({});

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const { data } = useGetUserQuery(undefined, {
    skip: !token,
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (data && token) {
      dispatch(setUser(data));
    }
  }, [token, data]);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
