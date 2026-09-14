import {
  ICartResponse,
  ICreateReviewBody,
  IItems,
  ILoginBody,
  ILoginResponse,
  IOrderBody,
  IOrdersData,
  IProduct,
  IProductsParams,
  IProductsResponse,
  IRegisterBody,
  IReviews,
  IUser,
} from "@/app/frostTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const frostApi = createApi({
  reducerPath: "frostApi",
  tagTypes: ["cart", "review"],
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
    getSingleProduct: builder.query<IProduct, number>({
      query: (id) => `/products/${id}`,
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
    getReviews: builder.query<IReviews[], number>({
      query: (id) => `/reviews?productId=${id}`,
      providesTags: ["review"],
    }),
    createReview: builder.mutation<void, ICreateReviewBody>({
      query: (body) => ({
        url: "/reviews",
        body,
        method: "POST",
      }),
      invalidatesTags: ["review"],
    }),
    checkReview: builder.query<boolean, number>({
      query: (id) => `/reviews/exists?productId=${id}`,
      providesTags: ["review"],
    }),
    getOrders: builder.query<IOrdersData[], void>({
      query: () => `/orders`,
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
  useGetReviewsQuery,
  useCreateReviewMutation,
  useCheckReviewQuery,
  useGetSingleProductQuery,
  useGetOrdersQuery,
} = frostApi;
