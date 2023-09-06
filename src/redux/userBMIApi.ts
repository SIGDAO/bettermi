// src/services/pokemon.ts

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface BMI {
  bmi: number;
  category: string;
}

export const userBMIApi = createApi({
  reducerPath: 'userBMIApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'http//3.113.21.169/' 
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

export const { useGetBMIMutation } = userBMIApi;