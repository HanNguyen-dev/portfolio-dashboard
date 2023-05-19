import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TimeSeries } from './domain/TimeSeries';


export const portalApi = createApi({
  reducerPath: 'portalApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.bls.gov/publicAPI/v2'}),
  endpoints: (builder) => ({
    getCpi: builder.query<TimeSeries, void>({
      query: () => `/timeseries/data/CUUR0000SA0`
    }),
    getUnemploymentRate: builder.query<TimeSeries, void>({
      query: () => `/timeseries/data/LNS14000000`
    }),
  }),
});

export const { useGetCpiQuery, useGetUnemploymentRateQuery } = portalApi;