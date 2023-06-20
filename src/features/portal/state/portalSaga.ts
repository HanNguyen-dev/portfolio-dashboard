import { call, put, takeEvery } from "redux-saga/effects";
import { updateError, updateForecasts, updatePlaces } from "../portalSlice";
import { fetchForecastsByPlace, fetchPlaces } from "./api/weatherApi";
import { Places } from "../domain/Places";
import { PortalActionTypes } from "./portalActionTypes";
import { Forecasts } from "../domain/Forecasts";
import { PlacesPayload, ForecastsPayload } from "./portalActions";
import { PayloadAction } from "@reduxjs/toolkit";

export function* fetchPlacesQuery(
  { payload }: PayloadAction<PlacesPayload>
): Generator<any> {
  try {
    const result = yield call(() => {
      return fetchPlaces(payload.query, payload.session);
    });
    yield put(updatePlaces(result as Places));
  } catch (e) {
    yield put(updateError(true));
  }
}

function* fetchForecastByPlaceQuery(
  { payload }: PayloadAction<ForecastsPayload>
): Generator<any> {
  try {
    const result = yield call(() => {
      return fetchForecastsByPlace(payload.placeId, payload.session);
    });
    yield put(updateForecasts(result as Forecasts));
  } catch (e) {
    yield put(updateError(true));
  }
}

export default function* portalSaga() {
  yield takeEvery(PortalActionTypes.FETCH_PLACES_SAGA, fetchPlacesQuery);
  yield takeEvery(PortalActionTypes.FETCH_FORECASTS_SAGA, fetchForecastByPlaceQuery);
}