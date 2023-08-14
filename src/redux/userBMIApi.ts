// src/services/pokemon.ts

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface BMI {
  bmi: number;
  category: string;
}

// 透過 createApi 可以建立 RTK query 的 API service，取名為 userBMIApi
export const userBMIApi = createApi({
  reducerPath: 'userBMIApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http://3.113.21.169/' 
  }),
  endpoints: (builder) => ({
    getBMI: builder.mutation<BMI, Object>({
      query: (imageForm) => ({
        url: 'getbmi/',
        method: 'POST',
        body: imageForm,
        header: {
          'content-type': 'multipart/form-data',
        },
      }),
      transformResponse: (response: BMI) => response,
    }),
  }),
});

// userBMIApi 會帶有 useGetPokemonByNameQuery 的方法，可以直接呼叫
export const { useGetBMIMutation } = userBMIApi;