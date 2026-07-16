import {
  IItems,
  ILoginBody,
  ILoginResponse,
  IProduct,
  IProductsParams,
  IProductsResponse,
} from "@/app/frostTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const frostApi = createApi({
  reducerPath: "frostApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://frost.runtime.kz/api" }),
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
  }),
});
export const {
  useGetProductsQuery,
  useGetBrandsQuery,
  useGetModelsQuery,
  useGetGenerationsQuery,
  useGetTokenMutation,
} = frostApi;
