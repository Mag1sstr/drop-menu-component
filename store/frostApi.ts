import {
  ICartResponse,
  IItems,
  ILoginBody,
  ILoginResponse,
  IProduct,
  IProductsParams,
  IProductsResponse,
  IRegisterBody,
  IUser,
} from "@/app/frostTypes";
import { AuthContext } from "@/contexts/AuthContext";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useContext } from "react";

export const frostApi = createApi({
  reducerPath: "frostApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://frost.runtime.kz/api",
    prepareHeaders(headers) {
      const token = localStorage.getItem("t");
      if (token) {
        return headers.set("Authorization", "Bearer " + token);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProductsResponse, IProductsParams | void>({
      query: (params) => ({
        url: "/products",
        params: {
          ...params,
          page: params?.page || 0,
          size: params?.size || 0,
        },
      }),
    }),
    getBrands: builder.query<IItems[], void>({
      query: () => ({
        url: "/brands",
      }),
    }),
    getModels: builder.query<IItems[], number>({
      query: (id) => ({
        url: `/models?brandId=${id}`,
      }),
    }),
    getGenerations: builder.query<IItems[], number>({
      query: (id) => ({
        url: `/generations?modelId=${id}`,
      }),
    }),
    getToken: builder.mutation<ILoginResponse, ILoginBody>({
      query: (body) => ({
        method: "POST",
        url: "/auth/token",
        body,
      }),
    }),
    getUser: builder.mutation<IUser, void>({
      query: () => ({ url: "/auth/user", method: "POST" }),
    }),
    getCart: builder.query<ICartResponse, void>({
      query: () => ({ url: "/cart" }),
    }),
    registerUser: builder.mutation<IUser, IRegisterBody>({
      query: (body) => ({ url: "/registration", body, method: "POST" }),
    }),
  }),
});
export const {
  useGetProductsQuery,
  useGetBrandsQuery,
  useGetModelsQuery,
  useGetGenerationsQuery,
  useGetTokenMutation,
  useGetUserMutation,
  useGetCartQuery,
  useRegisterUserMutation,
} = frostApi;
