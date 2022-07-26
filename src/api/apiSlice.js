import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://fox-library-api.herokuapp.com/api'}),
    tagTypes: ['Books'],
    endpoints: builder => ({
        getBooks: builder.query({
            query: () => '/library',
            providesTags: ['Books']
        }),
    })
});

export const {useGetBooksQuery} = apiSlice;