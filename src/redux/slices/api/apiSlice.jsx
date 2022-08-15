import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://gutendex.com/books' }),
  tagTypes: ['Books'],
  endpoints: (builder) => ({
    getBookById: builder.query({
      query: (id) => `?ids=${id}`,
      providesTags: ['Book'],
      transformResponse: (response) => {
        const { results: books } = response;
        return books;
      },
    }),
    getBooksByStr: builder.query({
      query: (obj) => `?page=${obj.page}&search=${obj.str}`,
      providesTags: ['search'],
      transformResponse: (response) => {
        const { results, next } = response;
        return { results, next };
      },
    }),
    getBooksByPage: builder.query({
      query: (page) => `?page=${page}`,
      providesTags: ['search'],
      transformResponse: (response) => {
        const { results: books } = response;
        return books;
      },
    }),
  }),
});

export const { useGetBookByIdQuery, useGetBooksByPageQuery, useGetBooksByStrQuery } = apiSlice;
