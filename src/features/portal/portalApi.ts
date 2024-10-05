import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TimeSeries } from './domain/TimeSeries';
import { PlaceDetails, Places } from './domain/Places';
import { Forecasts } from './domain/Forecasts';

export const portalApi = createApi({
  reducerPath: 'portalApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_PORTFOLIO_API_V2,
  }),
  endpoints: (builder) => ({
    getPlaces: builder.query<Places, { query: string; session?: string }>({
      query: (payload) =>
        `/places?q=${payload.query}${payload.session ? '&session=' + payload.session : ''}`,
    }),
    getPlaceDetails: builder.query<PlaceDetails, { placeId: string; session?: string }>({
      query: (payload) => `/places/${payload.placeId}/${payload.session}`,
    }),
    getForecasts: builder.query<Forecasts, { lat: number | null; lon: number | null }>({
      query: (payload) =>
        `/weather${
          payload.lat && payload.lon ? '?lat=' + payload.lat + '&lon=' + payload.lon : ''
        }`,
    }),
    getForecastsByPlace: builder.query<Forecasts, { placeId: string; session?: string }>({
      query: (payload) => `/weather/${payload.placeId}/${payload.session}`,
    }),
    getUnemploymentRate: builder.query<TimeSeries, void>({
      query: () => `/timeseries/data/LNS14000000`,
    }),
  }),
});

export const laborApi = createApi({
  reducerPath: 'laborApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_PORTFOLIO_API_V1,
  }),
  endpoints: (builder) => ({
    getCpi: builder.query<TimeSeries, void>({
      query: () => `/getInflationRates`,
    }),
  }),
});

export const {
  useGetUnemploymentRateQuery,
  useGetPlacesQuery,
  useGetPlaceDetailsQuery,
  useGetForecastsQuery,
  useGetForecastsByPlaceQuery,
} = portalApi;

export const { useGetCpiQuery } = laborApi;
