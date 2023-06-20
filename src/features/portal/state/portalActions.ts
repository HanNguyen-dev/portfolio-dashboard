import { PortalActionTypes } from "./portalActionTypes";
import { createAction } from "@reduxjs/toolkit";

export type PlacesPayload = { query: string, session?: string };

export type ForecastsPayload = { placeId: string, session?: string};

export const fetchPlaces = createAction<PlacesPayload>(PortalActionTypes.FETCH_PLACES_SAGA);

export const fetchForecasts = createAction<ForecastsPayload>(PortalActionTypes.FETCH_FORECASTS_SAGA);
