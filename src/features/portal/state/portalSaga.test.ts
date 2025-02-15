import { cloneableGenerator } from '@redux-saga/testing-utils'
import portalSaga, { fetchPlacesQuery } from './portalSaga';
import assert from 'assert';
import { PortalActionTypes } from './portalActionTypes';
import { take, takeEvery } from 'redux-saga/effects';

test('portalSaga', () => {
  const gen = cloneableGenerator(portalSaga)();
  const value = gen.next();
  console.log(value.value.payload.args[1]())
  // value.value.next()
  // value.value.next()
  // gen.next()


  assert.deepEqual(value.value, takeEvery(PortalActionTypes.FETCH_PLACES_SAGA, fetchPlacesQuery), 'it should wait for a user to choose a color');

});
