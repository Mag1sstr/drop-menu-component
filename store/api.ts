import { IUser } from "@/app/types";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { RootState } from "./store";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.escuelajs.co/api/v1",
    prepareHeaders(headers, { getState }) {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "/products",
      }),
    }),
    loginUser: builder.mutation<
      { access_token: string },
      { email: string; password: string }
    >({
      query: (body) => ({
        url: "/auth/login",
        body,
        method: "POST",
      }),
    }),
    getUser: builder.query<IUser, void>({
      query: () => ({
        url: "/auth/profile",
      }),
    }),
  }),
});

export const { useGetProductsQuery, useLoginUserMutation, useGetUserQuery } =
  api;
