import {
  ICartResponse,
  ICreateReviewBody,
  IItems,
  ILoginBody,
  ILoginResponse,
  IOrderBody,
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
  tagTypes: ["cart"],
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
      providesTags: ["cart"],
    }),
    addCartItem: builder.mutation<void, { productId: number; count: number }>({
      query: (params) => ({ method: "GET", url: "/cart/add", params }),
      invalidatesTags: ["cart"],
    }),
    registerUser: builder.mutation<IUser, IRegisterBody>({
      query: (body) => ({ url: "/registration", body, method: "POST" }),
    }),
    deleteCartItem: builder.mutation<void, number>({
      query: (id) => ({ method: "GET", url: `/cart/delete?productId=${id}` }),
      invalidatesTags: ["cart"],
    }),
    increaseCartItem: builder.mutation<void, number>({
      query: (id) => ({ url: `/cart/increase?productId=${id}`, method: "GET" }),
      invalidatesTags: ["cart"],
    }),
    decreaseCartItem: builder.mutation<void, number>({
      query: (id) => ({ url: `/cart/decrease?productId=${id}`, method: "GET" }),
      invalidatesTags: ["cart"],
    }),
    createOrder: builder.mutation<number, IOrderBody>({
      query: (body) => ({
        method: "POST",
        url: "/orders",
        body,
      }),
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
  useAddCartItemMutation,
  useDeleteCartItemMutation,
  useIncreaseCartItemMutation,
  useDecreaseCartItemMutation,
  useCreateOrderMutation,
} = frostApi;
