import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ConsumerPriceIndex } from './domain/ConsumerPriceIndex';


export const portalApi = createApi({
  reducerPath: 'portalApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.bls.gov/publicAPI/v2'}),
  endpoints: (builder) => ({
    getCpi: builder.query<ConsumerPriceIndex, void>({
      query: () => `/timeseries/data/CUUR0000SA0`
    }),
  }),
});

export const { useGetCpiQuery } = portalApi;