import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://gutendex.com/'}),
    tagTypes: ['Books'],
    endpoints: builder => ({
        getBookById: builder.query({
            query: (id) => `books?ids=${id}`,
            providesTags: ['Book']
        }),
        getBooksByStr: builder.query({
            query: (str) => `/books?search=${str}`,
            providesTags: ['search']
        }),
        getBooksByPage: builder.query({
            query: (page) => `https://gutendex.com/books/?page=${page}`,
            providesTags: ['search']
        }),
    })
});
console.log(apiSlice)
export const {useGetBookByIdQuery,useGetBooksByStrQuery,useGetBooksByPageQuery, useLazyGetBooksByPageQuery} = apiSlice;