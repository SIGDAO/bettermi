// src/services/pokemon.ts

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



// 透過 createApi 可以建立 RTK query 的 API service，取名為 userBMIApi
export const userBMIApi = createApi({
  reducerPath: 'userBMIApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://127.0.0.1:8000/' 
  }),
  endpoints: (builder) => ({
    getBMI: builder.mutation({
      query: (imageForm) => ({
        url: 'getbmi/',
        method: 'POST',
        body: imageForm,
        header: {
          'content-type': 'multipart/form-data',
        }
      }),
    }),
  }),
});

// userBMIApi 會帶有 useGetPokemonByNameQuery 的方法，可以直接呼叫
export const { useGetBMIMutation } = userBMIApi;