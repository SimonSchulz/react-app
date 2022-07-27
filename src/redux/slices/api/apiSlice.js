import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://gutendex.com/'}),
    tagTypes: ['Books'],
    endpoints: builder => ({
        getBooks: builder.query({
            query: () => 'books',
            providesTags: ['Books']
        }),
        getBooksById: builder.query({
            query: (id) => `books?ids=${id}`,
            providesTags: ['Book']
        }),
    })
});
export const {useGetBooksQuery,useGetBooksByIdQuery} = apiSlice;