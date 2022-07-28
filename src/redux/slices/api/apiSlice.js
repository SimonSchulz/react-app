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
    })
});
console.log(apiSlice)
export const {useGetBookByIdQuery} = apiSlice;