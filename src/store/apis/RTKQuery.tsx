import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rtkQueryFetchApi = createApi({
    reducerPath: 'rtkQueryFetchApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    // endpoints: function (build: EndpointBuilder<BaseQuery, TagTypes, ReducerPath>): Definitions {
    //     throw new Error('Function not implemented.');
    // }
    endpoints: (builder) => ({
        getPlaceHolder: builder.query<any, string>({
            query: () => `/todos`,
        }),
        getTodoById: builder.query<any, string>({
            query: (id) => `/todos/${id}`,
        }),
    }),
});


export const { useGetPlaceHolderQuery, useGetTodoByIdQuery } = rtkQueryFetchApi;