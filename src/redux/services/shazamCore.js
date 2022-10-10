import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
  
export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'bbc0b6c53bmshb466c7f13e6f8dap17b76bjsn45a1ec5a27b1');
           
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' })
    })
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;
