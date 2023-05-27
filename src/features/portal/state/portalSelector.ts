import { RootState } from "../../../app/store";

export const selectLocation = (state: RootState) => state.portal.location;

export const selectPlaces = (state: RootState) => state.portal.places;

export const selectForecasts = (state: RootState) => state.portal.forecast;
