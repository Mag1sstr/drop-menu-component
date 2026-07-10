import { IProduct, IProductsParams, IProductsResponse } from "@/app/frostTypes";
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
  }),
});
export const { useGetProductsQuery } = frostApi;
