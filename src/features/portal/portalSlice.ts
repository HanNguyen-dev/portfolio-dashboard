import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Place } from "./domain/Places";
import { RootState } from "../../app/store";

export interface PortalState {
  location?: Place;
}

const initialState: PortalState = { };

export const portalSlice = createSlice({
  name: 'portal',
  initialState,
  reducers: {
    updateLocation: (state, action: PayloadAction<Place>) => {
      state.location = action.payload;
    },
  },
});

export const { updateLocation } = portalSlice.actions;

// Selectors for Portal

export const selectLocation = (state: RootState) => state.portal.location;

// Exporting reducer
export default portalSlice.reducer;