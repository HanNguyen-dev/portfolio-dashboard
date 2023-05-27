import { call, put, takeEvery } from "redux-saga/effects";
import { updateError, updateForecasts, updatePlaces } from "../portalSlice";
import { fetchForecastsByPlace, fetchPlaces } from "./api/weatherApi";
import { Places } from "../domain/Places";
import { PortalActionTypes } from "./portalActionTypes";
import { Action } from "@reduxjs/toolkit";
import { Forecasts } from "../domain/Forecasts";

function* fetchPlacesQuery(
  { payload }: Action & { payload: { query: string, session?: string } }
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
  { payload }: Action & { payload: { placeId: string, session?: string } }
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

export default function* rootSaga() {
  yield takeEvery(PortalActionTypes.FETCH_PLACES_SAGA, fetchPlacesQuery);
  yield takeEvery(PortalActionTypes.FETCH_FORECASTS_SAGA, fetchForecastByPlaceQuery);
}