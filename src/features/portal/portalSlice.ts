import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Place, Places } from "./domain/Places";
import { RootState } from "../../app/store";
import { Forecasts } from "./domain/Forecasts";

export interface PortalState {
  location?: Place;
  places?: Places;
  forecast?: Forecasts;
  error: boolean;
}

const initialState: PortalState = {
  error: false,
};

export const portalSlice = createSlice({
  name: 'portal',
  initialState,
  reducers: {
    updateLocation: (state, action: PayloadAction<Place>) => {
      state.location = action.payload;
    },
    updatePlaces: (state, action: PayloadAction<Places>) => {
      state.places = action.payload;
    },
    updateForecasts: (state, action: PayloadAction<Forecasts>) => {
      state.forecast = action.payload;
      if (state.places)
        state.places.session = "";
    },
    updateError: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    }
  },
});

export const {
  updateLocation,
  updatePlaces,
  updateForecasts,
  updateError,
} = portalSlice.actions;

// Exporting reducer
export default portalSlice.reducer;