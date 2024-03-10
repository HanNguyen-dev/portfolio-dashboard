import { PortalActionTypes } from './portalActionTypes';
import { fetchPlacesQuery } from './portalSaga';
import { call } from 'redux-saga/effects';
import assert from 'assert';
import { fetchPlaces } from './api/weatherApi';

test('fetchPlacesQuery', () => {
  const action = {
    payload: {
      query: "query",
      session: "session",
    },
    type: PortalActionTypes.FETCH_PLACES_SAGA,
  } satisfies ActionPayload<{ query: string, session?: string }>;

  const iterator = fetchPlacesQuery(action);

  const expected = iterator.next().value;
  assert.equal(
    expected,
    // expected
    call(() => {
      return fetchPlaces(action.payload.query, action.payload.session)
    }),
    "should equal"
  );
  iterator.next().value

  console.log(iterator);
});
