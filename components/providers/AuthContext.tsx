import { IUser } from "@/app/types";
import { getLocalStorageValue } from "@/helpers/getLocalStorageValue";
import { useGetUserQuery } from "@/store/api";
import { setUser } from "@/store/authSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { createContext, useContext, useEffect, useState } from "react";

interface IAuthContext {}

export const AuthContext = createContext({} as IAuthContext);

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { token } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const { data, isSuccess } = useGetUserQuery(undefined, {
    skip: !token,
    refetchOnMountOrArgChange: true,
  });

  console.log(data);

  useEffect(() => {
    if (isSuccess && data && token) {
      dispatch(setUser(data));
    }
  }, [token, isSuccess]);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
