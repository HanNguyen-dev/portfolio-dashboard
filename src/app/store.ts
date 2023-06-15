import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";
import saga from '../features/portal/state/portalSaga';
import counterReducer from '../features/counter/counterSlice';
import portalReducer from '../features/portal/portalSlice';
import { laborApi, portalApi } from '../features/portal/portalApi';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    portal: portalReducer,
    [portalApi.reducerPath]: portalApi.reducer,
    [laborApi.reducerPath]: laborApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(portalApi.middleware)
      .concat(laborApi.middleware)
      .concat(sagaMiddleware),
});

sagaMiddleware.run(saga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
