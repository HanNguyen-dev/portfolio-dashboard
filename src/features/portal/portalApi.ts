import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TimeSeries } from './domain/TimeSeries';
import { PlaceDetails, Places } from './domain/Places';
import { Forecasts } from './domain/Forecasts';


export const portalApi = createApi({
  reducerPath: 'portalApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_PORTFOLIO_API}` }),
  // baseQuery: fetchBaseQuery({ baseUrl: 'https://api.bls.gov/publicAPI/v2'}),
  endpoints: (builder) => ({
    getPlaces: builder.query<Places, { query: string, session?: string }>({
      query: (payload) => `/places?q=${payload.query}${payload.session ? "&session=" + payload.session : ""}`,
    }),
    getPlaceDetails: builder.query<PlaceDetails, { placeId: string, session?: string }>({
      query: (payload) => `/places/${payload.placeId}/${payload.session}`,
    }),
    getForecasts: builder.query<Forecasts, { lat: number, lon: number }>({
      query: (payload) => `/weather?lat=${payload.lat}&lon=${payload.lon}`,
    }),
    getCpi: builder.query<TimeSeries, void>({
      query: () => `/timeseries/data/CUUR0000SA0`
    }),
    getUnemploymentRate: builder.query<TimeSeries, void>({
      query: () => `/timeseries/data/LNS14000000`
    }),
  }),
});

export const {
  useGetCpiQuery,
  useGetUnemploymentRateQuery,
  useGetPlacesQuery,
  useGetPlaceDetailsQuery,
  useGetForecastsQuery,
} = portalApi;