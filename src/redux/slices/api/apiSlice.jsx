import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://gutendex.com/' }),
  tagTypes: ['Books'],
  endpoints: (builder) => ({
    getBookById: builder.query({
      query: (id) => `books?ids=${id}`,
      providesTags: ['Book'],
      transformResponse: (response) => {
        const { results: books } = response;
        return books;
      },
    }),
    getBooksByStr: builder.query({
      query: (str) => `/books?search=${str}`,
      providesTags: ['search'],
      transformResponse: (response) => {
        const { results: books } = response;
        return books;
      },
    }),
    getBooksByPage: builder.query({
      query: (page) => `https://gutendex.com/books/?page=${page}`,
      providesTags: ['search'],
      transformResponse: (response) => {
        const { results: books } = response;
        return books;
      },
    }),
  }),
});

export const { useGetBookByIdQuery, useGetBooksByPageQuery, useGetBooksByStrQuery } = apiSlice;
